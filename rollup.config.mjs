import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import * as path from 'path';
import packagejson from 'rollup-plugin-generate-package-json';

const INPUT = './src/index.ts',
  EXTENTIONS = ['.ts', '.js'],
  EXTENTION_CJS = 'js',
  EXTENTION_ESM = 'mjs',
  // node_modules配下のdependenciesはバンドルしない。下記の正規表現の指定をするためには'@rollup/plugin-node-resolve'が必要
  EXTERNAL = [/node_modules/, /@visue/],
  OUTPUT = './build',
  BABEL_CONFIG_PATH = path.resolve('babel.config.js'),
  TEST_DIR = /.+__test__.+/;

// commonjs用とesmodule用のソースを出力する
const config = [
  // cjs & typeのビルド
  {
    // エントリーポイント
    input: INPUT,
    output: {
      // 出力先ディレクトリ
      dir: OUTPUT,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      entryFileNames: `[name].${EXTENTION_CJS}`,
      // バンドルしない(falseだとindex.cjsに纏められてしまう)
      preserveModules: true,
    },
    external: EXTERNAL,
    treeshake: false,
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: [TEST_DIR],
        declarationDir: OUTPUT,
        outDir: OUTPUT,
      }),
      // babel({
      //   extensions: EXTENTIONS,
      //   babelHelpers: 'runtime',
      //   configFile: BABEL_CONFIG_PATH,
      // }),
      commonjs(),
      // packagejson({
      //   baseContents: (pkgjson) => ({
      //     name: pkgjson.name,
      //     version: pkgjson.version,
      //     author: pkgjson.author,
      //     license: pkgjson.license,
      //     main: `index.${EXTENTION_CJS}`,
      //     module: `esm/index.${EXTENTION_ESM}`,
      //     types: 'index.d.ts',
      //   }),
      // }),
    ],
  },
  // esmのビルド
  {
    // エントリーポイント
    input: INPUT,
    output: {
      // 出力先ディレクトリ
      dir: OUTPUT,
      format: 'es',
      exports: 'named',
      sourcemap: true,
      entryFileNames: `[name].${EXTENTION_ESM}`,
      // バンドルしない(falseだとindex.mjsに纏められてしまう)
      preserveModules: true,
    },
    external: EXTERNAL,
    treeshake: false,
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        exclude: [TEST_DIR],
        outDir: OUTPUT,
      }),
      // babel({
      //   extensions: EXTENTIONS,
      //   babelHelpers: 'runtime',
      //   configFile: BABEL_CONFIG_PATH,
      // }),
      commonjs(),
    ],
  },
];
export default config;
