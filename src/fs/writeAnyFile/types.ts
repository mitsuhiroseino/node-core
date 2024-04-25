import { WriteBufferOptions } from '../writeBuffer';
import { WriteJsonOptions } from '../writeJson';
import { WriteTextOptions } from '../writeText';

export type WriteAnyFileOptions = WriteBufferOptions & WriteJsonOptions & WriteTextOptions;
