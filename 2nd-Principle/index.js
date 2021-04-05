const createAuthorData = require('./2_following_principle_2');

const firstName = 'Didi';
const lastName = 'Yudha';
const books = 100;

const author = createAuthorData(firstName, lastName, books);

console.log(`author firstName: ${author.get("firstName")}`);
console.log(`author lastName: ${author.get("lastName")}`);
console.log(`author books: ${author.get("books")}`);
