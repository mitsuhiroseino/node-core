import fs from 'fs-extra';
import path from 'path';
import { GetFsGeneratorOptions, ITEM_TYPE } from 'src/utils/iteration/getFsGenerator';

// 以下は検証用関数 ---------------------------------------------------------------------------------------
// イテレーターを使用せず地道にパスを辿って収集する関数
export default function getAllPaths<R = string>(directoryPath: string, options: GetFsGeneratorOptions<R> = {}): R[] {
  const {
    target,
    minDepth = 0,
    maxDepth = Infinity,
    ignoreSymlinks,
    arrangeValue = (...args) => args[0],
    reverse,
  } = options;

  // 取得対象
  const captureDirs = !target || target === ITEM_TYPE.DIR;
  const captureFiles = !target || target === ITEM_TYPE.FILE;

  const paths: R[] = [];
  // シンボリックリンクの有効／無効
  const statSync = ignoreSymlinks
    ? (currentPath) => fs.lstatSync(currentPath)
    : (currentPath) => fs.statSync(currentPath);

  //
  function traverseDirectorySync(currentPath: string, depth: number): void {
    const items = fs.readdirSync(currentPath);
    const nextDepth = depth + 1;

    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const stats = statSync(itemPath);

      if (stats.isDirectory()) {
        if (nextDepth <= maxDepth) {
          if (reverse) {
            traverseDirectorySync(itemPath, nextDepth); // 再帰的にディレクトリを検索
          }
          if (captureDirs && minDepth <= nextDepth) {
            paths.push(
              arrangeValue(itemPath, { name: item, depth: nextDepth, itemType: 'dir', parentPath: currentPath }) as R,
            ); // ディレクトリのパスを配列に追加
          }
          if (!reverse) {
            traverseDirectorySync(itemPath, nextDepth); // 再帰的にディレクトリを検索
          }
        }
      } else if (stats.isFile()) {
        if (captureFiles && minDepth <= nextDepth && nextDepth <= maxDepth) {
          paths.push(
            arrangeValue(itemPath, { name: item, depth: nextDepth, itemType: 'file', parentPath: currentPath }) as R,
          ); // ファイルのパスを配列に追加
        }
      }
    }
  }

  const stat = statSync(directoryPath);
  if (stat.isDirectory()) {
    traverseDirectorySync(directoryPath, 0);
  }
  return paths;
}
