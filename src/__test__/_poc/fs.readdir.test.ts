import fs from 'fs/promises';

const DEPTH_0_D = 'src\\__test__\\_resources_\\util\\iteration\\getFsGenerator.test\\dir1a';

describe('fs.readdir', () => {
  test('dir', async () => {
    const items = await fs.readdir(DEPTH_0_D, { withFileTypes: true });
    for (const item of items) {
      const info = {
        name: item.name,
        path: item.path,
        isBlockDevice: item.isBlockDevice(),
        isDirectory: item.isDirectory(),
        isCharacterDevice: item.isCharacterDevice(),
        isFIFO: item.isFIFO(),
        isFile: item.isFile(),
        isSocket: item.isSocket(),
        isSymbolicLink: item.isSymbolicLink(),
      };
      console.log(info);
    }
    expect(true).toEqual(true);
  });

  // test('stat', async () => {
  //   const names = await fs.readdir(DEPTH_0_D);
  //   for (const name of names) {
  //     try {
  //       const item = await fs.stat(path.join(DEPTH_0_D, name));
  //       const info = {
  //         name,
  //         path: DEPTH_0_D,
  //         isBlockDevice: item.isBlockDevice(),
  //         isCharacterDevice: item.isCharacterDevice(),
  //         isDirectory: item.isDirectory(),
  //         isFIFO: item.isFIFO(),
  //         isFile: item.isFile(),
  //         isSocket: item.isSocket(),
  //         isSymbolicLink: item.isSymbolicLink(),
  //       };
  //       console.log(info);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   expect(true).toEqual(true);
  // });

  // test('lstat', async () => {
  //   const names = await fs.readdir(DEPTH_0_D);
  //   for (const name of names) {
  //     try {
  //       const item = await fs.lstat(path.join(DEPTH_0_D, name));
  //       const info = {
  //         name,
  //         path: DEPTH_0_D,
  //         isBlockDevice: item.isBlockDevice(),
  //         isDirectory: item.isDirectory(),
  //         isCharacterDevice: item.isCharacterDevice(),
  //         isFIFO: item.isFIFO(),
  //         isFile: item.isFile(),
  //         isSocket: item.isSocket(),
  //         isSymbolicLink: item.isSymbolicLink(),
  //       };
  //       console.log(info);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   expect(true).toEqual(true);
  // });

  // test('drive', async () => {
  //   const item = await fs.stat('C:');
  //   const info = {
  //     mode: item.mode,
  //     gid: item.gid,
  //     isBlockDevice: item.isBlockDevice(),
  //     isDirectory: item.isDirectory(),
  //     isCharacterDevice: item.isCharacterDevice(),
  //     isFIFO: item.isFIFO(),
  //     isFile: item.isFile(),
  //     isSocket: item.isSocket(),
  //     isSymbolicLink: item.isSymbolicLink(),
  //   };
  //   console.log(info);

  //   expect(true).toEqual(true);
  // });
});
