import toString from '@visue/core/utils/lang/toString';
import fs from 'fs-extra';
import { ReadTextOptions } from './types';

/**
 * テキストファイルを入力する
 * @param filePath ファイルのパス
 * @param options オプション
 * @returns
 */
export default async function readText(filePath: string, options: ReadTextOptions = {}): Promise<string> {
  // テキストファイルを入力
  const { encoding = 'utf8', ...rest } = options;
  const buffer = await fs.readFile(filePath, rest);
  const text = toString(buffer, encoding);
  return text;
}
