// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
      login: function (username, password) {
        this.fillField('Username/Email', username);
        this.fillField('Password', password);
        this.click('Login');
        this.waitForElement('.navbar-text', 10)
      }

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
