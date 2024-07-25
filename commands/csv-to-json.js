import csv from 'csv-parser';
import { stdin } from 'process';

export default function csvToJson() {
  const results = [];

  stdin
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      process.stdout.write(JSON.stringify(results, null, 2));
    });
}
