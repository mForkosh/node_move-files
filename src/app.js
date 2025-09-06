/* eslint-disable no-console */
'use strict';

const fsCb = require('fs');
const path = require('path');

const [subject, destination] = process.argv.slice(2);

let fileName;
let destinationIsDirectory = false;

try {
  fileName = path.basename(subject);
  destinationIsDirectory = fsCb.statSync(destination).isDirectory();
} catch (error) {}

const correctDestination = destinationIsDirectory
  ? path.join(destination, fileName)
  : destination;

try {
  fsCb.renameSync(subject, correctDestination);
} catch (err) {
  console.error(err);
}
