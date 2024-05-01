import fs from 'fs/promises';
import identity from 'lodash/identity';
import path from 'path';
import stat from '../../../fs/stat';
import { ITEM_TYPE } from './constants';
import { GetFsGeneratorOptions } from './types';

/**
 * 指定のパス配下の要素のパスを取得するジェネレーターを作成する関数
 * @param options オプション
 * @returns ジェネレーター
 */
export default function getFsGenerator<R = string>(
  options: GetFsGeneratorOptions<R> = {},
): (rootPath: string) => AsyncGenerator<R> {
  const {
    minDepth = 1,
    maxDepth = Infinity,
    target,
    ignoreSymlinks,
    arrangeValue = identity,
    reverse,
    sorter,
  } = options;
  const includeFiles = !target || target === ITEM_TYPE.FILE;
  const includeDirs = !target || target === ITEM_TYPE.DIR;

  // ディレクトリを辿りながらパスを返すジェネレーター
  const iterateFs = async function* (dirPath, depth = 1): AsyncGenerator<R> {
    const active = minDepth <= depth;
    const moreDeeply = depth < maxDepth;
    const items = await fs.readdir(dirPath, { withFileTypes: true });
    if (sorter) {
      items.sort(sorter);
    }
    for (const item of items) {
      const itemPath = path.join(item.path, item.name);
      if (item.isFile()) {
        if (active && includeFiles) {
          // ファイルのパスを返す
          yield arrangeValue(itemPath, { name: item.name, itemType: 'file', depth, parentPath: item.path });
        }
      } else if (item.isDirectory()) {
        if (moreDeeply && reverse) {
          // さらに下を取得 & 末端から取得する場合
          yield* iterateFs(itemPath, depth + 1);
        }
        if (active && includeDirs) {
          // ディレクトリのパスを返す
          yield arrangeValue(itemPath, { name: item.name, itemType: 'dir', depth, parentPath: item.path });
        }
        if (moreDeeply && !reverse) {
          // さらに下を取得する場合
          yield* iterateFs(itemPath, depth + 1);
        }
      }
    }
  };

  // ルートパスを処理してメインのジェネレーターを実行するジェネレーター
  return async function* (rootPath: string): AsyncGenerator<R> {
    const stats = await stat(rootPath, { ignoreSymlinks });
    // ディレクトリ(ドライブも含む)を処理対象とする
    if (stats && stats.isDirectory() && 1 <= maxDepth) {
      yield* iterateFs(path.normalize(rootPath));
    }
  };
}
