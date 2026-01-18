// Hashing function SHA-256
// const crypto = require('crypto');

// const input = 'Atharv Awle';
// const hash = crypto.createHash('sha256').update(input).digest('hex');    //importing sha256 function
// console.log(`SHA-256 hash of '${input}': ${hash}`);




// Proof of work
// Assignment-1
// Give me an input string that gives me a sha256 output hash which starts with '00000'

const crypto = require('crypto');
const hash = crypto.createHash('sha256').update(input).digest('hex');  

let input = 0;

while(true){

}