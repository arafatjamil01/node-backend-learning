const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);
const homedir = os.homedir();
console.log(homedir);

// Outputs cpu cores
const cpus = os.cpus();
console.log(cpus);

// Computers name
const machine = os.hostname();
console.log(machine);

// Release
const release = os.release();
console.log(release);