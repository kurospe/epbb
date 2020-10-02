// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
      login: function (username, password) {
        this.fillField('Username', username);
        this.fillField('Password', password);
        this.click('Submit');
        this.waitForElement('.ant-breadcrumb-link');
        this.see('Dashboard');
      }

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
