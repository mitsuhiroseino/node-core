# coreライブラリ

ユーティリティやシステムの基盤になる仕組みを提供するライブラリ

## 構成

- base: システムの基盤になる基底クラス
- comparator: 2つの値を比較するクラス
- data: データを保持するためのクラス
  - collection: entryを複数持つクラス
  - entry: fieldを複数持つクラス
  - field: valuetypeに合致する型の値を1つ持つクラス
  - validator:値の検証用クラス
  - valuerule: fieldなどに持つ値毎のルール。値の検証のためのvalidateや、serialize、parse、formatができる
  - valuetype: 値の型クラス。テキストファイルに出力する形式に変換する為のserialize、対象の型に変換する為のparser、対象の型から表示用の文字列に変換する為のformatterを持つ
- datasource: dataに持つ値の取得元＆保存先
- event: イベント関連のクラス
- extractor: オブジェクトなどから特定の項目を取得するためのクラス
- factory: クラスとそのインスタンスを管理するクラス
- filter: 2つの値の任意の項目が等しいか判定をするクラス。collectionなどで使用する
- formatter: 文字列として表示する際の形式に変換するためのクラス
- helper: 当パッケージ用の汎用的な処理を提供するクラス
- i18n: 国際化クラス
- matcher: 2つの値が等しいか判定をするクラス
- message: 主に画面に表示するメッセージの管理をするクラス
- mixin: クラスに追加可能な機能
- parser: 任意の値を指定の型に変換するためのクラス
- reader: 値を読み込むためのクラス
- relationaloperator: 関係演算子。比較条件する際の条件を表すクラス
- selection: 選択されていることを表すクラス
- sorter: 値の並べ替えを行うための条件を表すクラス
- util: 一般的に利用可能な汎用的な処理を提供するクラス
  - array: 配列用
  - boolean: 真偽値用
  - collection: 配列やオブジェクト用
  - coord: 座表計算用
  - data: 一般的な値用
  - date: 日付用
  - easing: イージング関数
  - function: 関数用
  - geo: 緯度・経度用
  - lang: 他に分類できないもの用
  - number: 数値用
  - object: オブジェクト用
  - ratio: 比を用いた処理用
  - spreadsheet: スプレッドシート用
  - string: 文字列用
- writer: 値を保存するためのクラス
