import readBuffer from '../readBuffer';
import readJson from '../readJson';
import readText from '../readText';
import { ReadAnyFileOptions } from './types';

/**
 * ファイルを入力する
 * @param filePath ファイルのパス
 * @param options オプション
 * @returns
 */
export default async function readAnyFile<R>(filePath: string, options: ReadAnyFileOptions = {}): Promise<R> {
  const { encoding, json, ...rest } = options;

  // 指定に従った入力
  let content;
  if (encoding === 'binary') {
    // バイナリで入力
    content = await readBuffer(filePath, rest);
  } else if (json) {
    // JSONで入力
    content = await readJson(filePath, rest);
  } else {
    // テキストで入力
    content = await readText(filePath, { ...rest, encoding });
  }

  return content;
}
