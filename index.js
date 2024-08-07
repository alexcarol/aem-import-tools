#!/usr/bin/env node

import { Command } from 'commander';
import { csvToJson, csvToJs } from './commands/csv.js';
import jsonToJs from './commands/json-to-js.js';
import { textToJson, textToJs } from './commands/text.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Bundle of CLI tools assist in the AEM import process');

program
  .command('csv-to-json')
  .description('Convert a CSV file to a JSON file')
  .action(() => {
    csvToJson();
  });

program
  .command('csv-to-js')
  .description('Convert a CSV file to a js file')
  .action(() => {
    csvToJs();
  });


program
  .command('json-to-js')
  .description('Convert a JSON file to a JavaScript file')
  .action(() => {
    jsonToJs();
  });

program
  .command('text-to-json')
  .description('Convert a text file to json')
  .action(() => {
    textToJson();
  });

program
  .command('text-to-js')
  .description('Convert a text file to js')
  .action(() => {
    textToJs();
  });

program.parse(process.argv);
