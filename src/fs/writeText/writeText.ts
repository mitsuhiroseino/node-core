import toBuffer from '@visue/core/utils/lang/toBuffer';
import fs from 'fs-extra';
import { WriteTextOptions } from './types';

/**
 * テキストファイルを出力する
 * @param filePath ファイルのパス
 * @param content ファイルの内容
 * @param options オプション
 * @returns
 */
export default async function writeText(
  filePath: string,
  content: string,
  options: WriteTextOptions = {},
): Promise<void> {
  // テキストファイルを出力
  const { encoding = 'utf8', ...rest } = options;
  const buffer = toBuffer(content, encoding);
  return await fs.writeFile(filePath, buffer, rest);
}
