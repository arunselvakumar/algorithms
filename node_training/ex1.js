'use strict';

// won't process it, so we use a module called minimilist.
console.log(process.argv.slice(2));

let args = require('minimist')(process.argv.slice(2));
console.log(args);


process.stdout.write('Hello World!')

console.log('Hello World!');

// console.log is not a wrapper around process.stdout.write();
// equivalent of line 3 is process.stdout.write('Hello World!\n');

console.error('Hai Error');