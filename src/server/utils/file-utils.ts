import * as fs from 'fs';

export function loadJsonFile(fileName: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.exists(fileName, exists => {
      if (exists) {
        fs.readFile(fileName, 'utf8', (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(data));
          }
        });
      } else {
        resolve();
      }
    });
  });
}

export function saveJsonFile(fileName: string, data: any): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, JSON.stringify(data, null, 2), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
