import fs from 'fs-extra';
import { WriteBufferOptions } from './types';

/**
 * ファイルを出力する
 * @param filePath ファイルのパス
 * @param buffer ファイルの内容
 * @param options オプション
 * @returns
 */
export default async function writeBuffer(
  filePath: string,
  buffer: Buffer,
  options: WriteBufferOptions = {},
): Promise<void> {
  // バイナリファイルを出力
  const { mode, flag, signal, flush } = options;
  return await fs.writeFile(filePath, buffer, { mode, flag, signal, flush });
}
