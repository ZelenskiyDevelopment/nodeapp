console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _= require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
// console.log('Process',process.argv);
console.log('Yargs', argv);


if (command === 'add') {
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else {
	console.log('Command not recognized');
}


// var filteredArray = _.uniq(['Vitalii', 1, 'Vitalii', 1,2,3,4]);
// console.log(filteredArray);
// console.log(_.isString(true));
// console.log(_.isString('Vitalii'));
// console.log('Result: ', notes.add(9, -2));

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();

// // fs.appendFile('greetings.txt', 'Hello ' + user.username + '!');
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

