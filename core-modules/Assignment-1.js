// 1. A program that uses path, os and process modules to  
// print out the current working directory

const path = require('path');
const os = require('os');

console.log('Current Working Directory:', process.cwd());

// 2. A program that uses path, os and process modules to  
// print out the separator of a given file path

const filePath = '/path/to/your/file.txt';
const separator = path.sep;

console.log('Separator:', separator);

// 3. A program that uses path, os and process modules to  
// print out the extension name of a file path

const extension = path.extname(filePath);

console.log('Extension:', extension);

// 4. A program that uses path, os and process modules to
// print out the process id of the current running process

const processId = process.pid;

console.log('Process ID:', processId);

// 5. A program that uses path, os and process modules to
// print out the user information of the os

const os = require('os');

const userInfo = os.userInfo();

console.log('User Information:', userInfo);

// 6. Write a nodeJs program to do the following using, path, os and process modules:
// print out the platform of an operating system

const os = require('os');

const platform = os.platform();

console.log('Operating System Platform:', platform);
