import fs from 'fs-extra';
import toBuffer from '../../utils/lang/toBuffer';
import { WriteJsonOptions } from './types';

/**
 * JSONファイルを出力する
 * @param filePath ファイルのパス
 * @param content ファイルの内容
 * @param options オプション
 * @returns
 */
export default async function writeJson(filePath: string, content: any, options: WriteJsonOptions = {}): Promise<void> {
  // JSONファイルを出力
  const { replacer, space, encoding = 'utf8', ...rest } = options;
  const json = JSON.stringify(content, replacer, space);
  const buffer = toBuffer(json, encoding);
  return await fs.writeFile(filePath, buffer, rest);
}
