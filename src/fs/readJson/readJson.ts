import toString from '@visue/core/utils/lang/toString';
import fs from 'fs-extra';
import { ReadJsonOptions } from './types';

/**
 * JSONファイルを入力する
 * @param filePath ファイルのパス
 * @param options オプション
 * @returns
 */
export default async function readJson(filePath: string, options: ReadJsonOptions = {}): Promise<any> {
  // JSONファイルを出力
  const { encoding = 'utf8', reviver, ...rest } = options;
  const buffer = await fs.readFile(filePath, rest);
  const text = toString(buffer, encoding);
  const json = JSON.parse(text, reviver);
  return json;
}
