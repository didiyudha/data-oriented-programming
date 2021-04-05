const createAuthorObject = (firstName, lastName, books) => {
  return {

    fullName() {
      return firstName + " " + lastName;
    },

    isProlific() {
      return books > 100;
    }
  }
}

module.exports = createAuthorObject;