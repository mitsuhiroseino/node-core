import isBuffer from 'lodash/isBuffer';
import isString from 'lodash/isString';
import writeBuffer from '../writeBuffer';
import writeJson from '../writeJson';
import writeText from '../writeText';
import { WriteAnyFileOptions } from './types';

/**
 * ファイルを出力する
 * @param filePath ファイルのパス
 * @param content ファイルの内容
 * @param options オプション
 * @returns
 */
export default async function writeAnyFile(
  filePath: string,
  content: string | Buffer | any,
  options: WriteAnyFileOptions = {},
): Promise<boolean> {
  const { encoding, ...rest } = options;

  // contentの型に合わせた出力
  if (isBuffer(content) || encoding === 'binary') {
    // バイナリファイルを出力
    await writeBuffer(filePath, content, rest);
  } else if (isString(content)) {
    // テキストファイルを出力
    await writeText(filePath, content, rest);
  } else {
    // JSONファイルを出力
    await writeJson(filePath, content, rest);
  }

  return true;
}
