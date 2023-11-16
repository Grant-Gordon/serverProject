const fs = require('fs');

const readStream = fs.createReadStream('./docs/bigRando.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/newBigRando.txt');

/*
readStream.on('data', (chunk) =>{
console.log('---------------------New CHUNK-------------------');
console.log(chunk);
writeStream.write('\nNEWCHUNK\n');
writeStream.write(chunk);
});
*/
readStream.pipe(writeStream);