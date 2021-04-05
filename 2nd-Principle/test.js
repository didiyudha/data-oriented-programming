const createAuthorData = require('./2_following_principle_2');

test('should valid data author', () => {
  const firstName = 'Didi';
  const lastName = 'Yudha';
  const books = 100;

  const author = createAuthorData(firstName, lastName, books);

  expect(author.get("firstName")).toEqual('Didi');
  expect(author.get("lastName")).toEqual('Yudha');
  expect(author.get("books")).toEqual(100);
})