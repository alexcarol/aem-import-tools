import csv from 'csv-parser';
import { stdin, stdout } from 'process';

export function textToJson() {
  let fileContents = '';
  stdin.on('data', (chunk) => {
    fileContents += chunk;
  });

  stdin.on('end', () => {
    const lines = fileContents.toString().split('\n').filter((line) => line.trim() !== '');
    stdout.write(JSON.stringify(lines, null, 2));
  });
}

export function textToJs() {
  let fileContents = '';
  stdin.on('data', (chunk) => {
    fileContents += chunk;
  });

  stdin.on('end', () => {
    const lines = fileContents
      .toString()
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line !== '');
    const jsDataStr = `export default ${JSON.stringify(lines, null, 2)}\n`;
    stdout.write(jsDataStr);
  });
}
