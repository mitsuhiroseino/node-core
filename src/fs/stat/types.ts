import fs from 'fs-extra';

export type FsStatOptions = fs.StatOptions & { ignoreSymlinks?: boolean };
