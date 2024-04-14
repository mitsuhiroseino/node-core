import getFsGenerator, { ITEM_TYPE } from 'src/utils/iteration/getFsGenerator';

import getAllPaths from './getAllPaths';

const DEPTH_0_DIR = 'src\\__test__\\_resources_\\util\\iteration\\getFsGenerator.test';
const DEPTH_0_FILE = 'src\\__test__\\_resources_\\util\\iteration\\getFsGenerator.test\\file1a.txt';

const DEPTH_1_DIR_SYMBOLIC_LINK = '';
const DEPTH_1_FILE_SYMBOLIC_LINK = '';
const DEPTH_1_DIR_HARD_LINK = '';
const DEPTH_1_FILE_HARD_LINK = '';

describe('getFsGenerator', () => {
  test('rootがdir', async () => {
    const rootPath = DEPTH_0_DIR;
    const generator = getFsGenerator();
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }

    expect(paths).toEqual(getAllPaths(rootPath));
  });

  test('rootがfile', async () => {
    const rootPath = DEPTH_0_FILE;
    const generator = getFsGenerator();
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }

    expect(paths).toEqual(getAllPaths(rootPath));
  });

  test('target="dir"', async () => {
    const rootPath = DEPTH_0_DIR;
    const options = { target: ITEM_TYPE.DIR };
    const generator = getFsGenerator(options);
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }

    expect(paths).toEqual(getAllPaths(rootPath, options));
  });

  test('target="file"', async () => {
    const rootPath = DEPTH_0_DIR;
    const options = { target: ITEM_TYPE.FILE };
    const generator = getFsGenerator(options);
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }

    expect(paths).toEqual(getAllPaths(rootPath, options));
  });

  test('minDepth=2', async () => {
    const rootPath = DEPTH_0_DIR;
    const options = { minDepth: 2 };
    const generator = getFsGenerator(options);
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }

    expect(paths).toEqual(getAllPaths(rootPath, options));
  });

  test('maxDepth=2', async () => {
    const rootPath = DEPTH_0_DIR;
    const options = { maxDepth: 2 };
    const generator = getFsGenerator(options);
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }

    expect(paths).toEqual(getAllPaths(rootPath, options));
  });

  test('minDepth=2 & maxDepth=3', async () => {
    const rootPath = DEPTH_0_DIR;
    const options = { minDepth: 2, maxDepth: 3 };
    const generator = getFsGenerator(options);
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }

    expect(paths).toEqual(getAllPaths(rootPath, options));
  });

  test('target="dir" & minDepth=2 & maxDepth=3', async () => {
    const rootPath = DEPTH_0_DIR;
    const options = { target: ITEM_TYPE.DIR, minDepth: 2, maxDepth: 3 };
    const generator = getFsGenerator(options);
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }

    expect(paths).toEqual(getAllPaths(rootPath, options));
  });

  test('target="file" & minDepth=2 & maxDepth=3', async () => {
    const rootPath = DEPTH_0_DIR;
    const options = { target: ITEM_TYPE.FILE, minDepth: 2, maxDepth: 3 };
    const generator = getFsGenerator(options);
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }

    expect(paths).toEqual(getAllPaths(rootPath, options));
  });

  test('arrangeValue', async () => {
    const rootPath = DEPTH_0_DIR;
    const options = {
      arrangeValue: (path, pathInfo) => ({ path, depth: pathInfo.depth, isDirectory: pathInfo.itemType === 'dir' }),
    };
    const generator = getFsGenerator(options);
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }
    expect(paths).toEqual(getAllPaths(rootPath, options));
  });

  test('followSymbolicLink', async () => {
    const rootPath = DEPTH_0_DIR;
    const options = { followSymbolicLink: true };
    const generator = getFsGenerator(options);
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }
    expect(paths).toEqual(getAllPaths(rootPath, options));
  });

  test('reverse', async () => {
    const rootPath = DEPTH_0_DIR;
    const options = { reverse: true };
    const generator = getFsGenerator(options);
    const iterator = await generator(rootPath);

    const paths = [];
    for await (const currentPath of iterator) {
      paths.push(currentPath);
    }
    expect(paths).toEqual(getAllPaths(rootPath, options));
  });
});
