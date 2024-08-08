import { stdin, stdout } from 'process';

export default function jsonToJs() {
  let jsonData = '';
  stdin.on('data', (chunk) => {
    jsonData += chunk;
  });

// When JSON data is fully read
  stdin.on('end', () => {
    const jsData = JSON.parse(jsonData);
    const jsDataStr = `export default ${JSON.stringify(jsData, null, 2)}\n`;

    stdout.write(jsDataStr);
  });
}
