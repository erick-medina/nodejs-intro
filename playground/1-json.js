const fs = require('fs');

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// };
//
// const bookJson = JSON.stringify(book);
// console.log(bookJson);
//
// fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJ = dataBuffer.toString();
// const data = JSON.parse(dataJ);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json').toString();
const data = JSON.parse(dataBuffer);
data.name = 'Erick';
data.age= 24;

const stringData = JSON.stringify(data);
fs.writeFileSync('1-json.json', stringData);

