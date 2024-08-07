import csv from 'csv-parser';
import { stdin, stdout } from 'process';

export function csvToJson() {
  const results = [];

  stdin
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      process.stdout.write(JSON.stringify(results, null, 2));
    });
}

export function csvToJs() {
  const results = [];

  stdin
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      const jsDataStr = `export default ${JSON.stringify(results, null, 2)}\n`;
      stdout.write(jsDataStr);
    });
}
