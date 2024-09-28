# What I have learned

## Node module system
- Code is encapsulated in each files, and has to be made public by exporting it. Just console.log(module) to check the module object.
- In our modules, we can export a single function, or an object and access that accordingly
- We can use require to import modules, and use the module.exports to export modules
- The path module is used to get the absolute path of the file, and is used to get the path of the file we want to import
