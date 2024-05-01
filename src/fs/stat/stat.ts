import fs from 'fs-extra';
import { FsStatOptions } from './types';

/**
 * ファイル・ディレクトリなどの情報を返す。
 * ファイル・ディレクトリなどが存在しない場合はnullを返す
 * シンボリックリンクを判定した時の結果は下記の通り
 *
 * - ignoreSymlinks: false or undefined
 *     - isDirectory(): true
 *     - isFile(): false
 *     - isSymbolicLink: false
 *
 * - ignoreSymlinks: true
 *     - isDirectory(): false
 *     - isFile(): false
 *     - isSymbolicLink: true
 *
 * @param filePath
 * @param options
 * @returns
 */
export default async function fsStat(
  filePath: string,
  options?: FsStatOptions,
): Promise<fs.Stats | fs.BigIntStats | null> {
  const { ignoreSymlinks, ...rest } = options;
  if (ignoreSymlinks) {
    // シンボリックリンクを辿らない場合
    try {
      return await fs.lstat(filePath, rest);
    } catch (error) {
      return null;
    }
  } else {
    // シンボリックリンクを辿る場合
    try {
      return await fs.stat(filePath, rest);
    } catch (error) {
      return null;
    }
  }
}
