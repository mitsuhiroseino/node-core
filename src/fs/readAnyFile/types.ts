import { ReadBufferOptions } from '../readBuffer';
import { ReadJsonOptions } from '../readJson';
import { ReadTextOptions } from '../readText';

export type ReadAnyFileOptions = ReadBufferOptions &
  ReadJsonOptions &
  ReadTextOptions & {
    /**
     * JSONで読み込む場合
     */
    json?: boolean;
  };
