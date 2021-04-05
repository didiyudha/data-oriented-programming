const Author = require('./listing_01_breaking_principle');
const createAuthorObject = require('./listing_02_breaking_principle_1');

const firstName = 'Didi';
const lastName = 'Yudha';
const books = 100;

const author = new Author(firstName, lastName, books);
console.log(author.fullName());
console.log(author.isProlific());

const authorObject = createAuthorObject(firstName, lastName, books);
console.log(authorObject.fullName());
console.log(authorObject.isProlific());