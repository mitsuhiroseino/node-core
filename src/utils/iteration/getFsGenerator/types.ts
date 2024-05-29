import fs from 'fs-extra';
import { ITEM_TYPE } from './constants';

/**
 * アイテム種別
 */
export type ItemType = (typeof ITEM_TYPE)[keyof typeof ITEM_TYPE];

export type GetFsGeneratorOptions<R = string> = {
  /**
   * イテレーションの対象とするエントリーの種類
   * iterationにディレクトリまたはファイルのパス(string)を指定した場合にのみ有効
   *
   * - dir: 指定したパス配下のディレクトリのみを取得する
   * - file: 指定したパス配下のファイルのみを取得する
   *
   * 未指定の場合はディレクトリ、ファイル共に取得する
   */
  target?: ItemType;

  /**
   * 繰り返し処理の開始位置とするディレクトリの深さ
   * iterationにディレクトリまたはファイルのパス(string)を指定した場合にのみ有効
   *
   * - 1: 指定したパス直下から処理する
   * - 2以上: 指定したパス配下の指定された深さから処理する
   * - 未指定: 指定したパスから処理する
   */
  minDepth?: number;

  /**
   * 繰り返し処理の終了位置とするディレクトリの深さ
   * iterationにディレクトリまたはファイルのパス(string)を指定した場合にのみ有効
   *
   * - 1: 指定したパス直下を処理する
   * - 2以上: 指定したパス配下を指定のレベルまで処理する
   * - 未指定: 指定したパス配下をすべて処理する
   */
  maxDepth?: number;

  /**
   * next().valueで取得できる値のアレンジャー
   * @returns
   */
  arrangeValue?: (path: string, pathInfo: PathInfo) => R;

  /**
   * シンボリックリンクの参照先のパスは取得しない
   */
  ignoreSymlinks?: boolean;

  /**
   * 末端の要素から取得
   */
  reverse?: boolean;

  sorter?: (item1: fs.Dirent, item2: fs.Dirent) => number;
};

export type PathInfo = {
  /**
   * ファイル／ディレクトリの名称
   */
  name: string;

  /**
   * dir/file
   */
  itemType: ItemType;

  /**
   * ルートパスからのネストの深さ
   */
  depth: number;

  /**
   * 親ディレクトリのパス
   */
  parentPath: string;
};
