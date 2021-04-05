const createAuthorData = (firstName, lastName, books) => {
  const map = new Map();
  map.set("firstName", firstName);
  map.set("lastName", lastName);
  map.set("books", books);
  return map;
}

module.exports = createAuthorData;