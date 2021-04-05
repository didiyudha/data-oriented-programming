const {AuthorData, NameCalculation, AuthorRating} = require('./listing_03_following_principle_1');

describe('Following first principle', () => {
  test('Should return valid propertie', () => {
    const firstName = 'Didi';
    const lastName = 'Yudha';
    const books = 500;
    const author = new AuthorData(firstName, lastName, books);

    expect(author.firstName).toEqual(firstName);
    expect(author.lastName).toEqual(lastName);
    expect(author.books).toEqual(books);

  })

  test('Should return valid username', () => {
    const firstName = 'Didi';
    const lastName = 'Yudha';
    const books = 500;
    const author = new AuthorData(firstName, lastName, books);

    const fullName = NameCalculation.fullName(author);
    expect(fullName).toEqual(firstName + ' ' + lastName);

  });

  test('Should return valid prolific', () => {
    const firstName = 'Didi';
    const lastName = 'Yudha';
    const books = 500;

    const author = new AuthorData(firstName, lastName, books);

    let prolific = AuthorRating.isProlific(author);
    expect(prolific).toEqual(true);

    author.books = 10;
    prolific = AuthorRating.isProlific(author);
    expect(prolific).toEqual(false);

  })

});