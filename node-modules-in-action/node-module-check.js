// console.log(module);

console.log(__filename); // This will print the full path of the current file
console.log(__dirname); // This will print the directory of the current file
const logger =  require ('./logger'); // This will not work because the logger.js file does not export anything	

logger('message'); // This will not work because the logger.js file does not export anything)