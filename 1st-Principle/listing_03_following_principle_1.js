class AuthorData {
  constructor(firstName = '', lastName = '', books = '') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.books = books;
  }
}

class NameCalculation {
  static fullName(data) {
    return data.firstName + " " + data.lastName;
  }
}

class AuthorRating {
  static isProlific(data)  {
    return data.books > 100;
  }
}

module.exports = {
  AuthorData,
  NameCalculation,
  AuthorRating,
};