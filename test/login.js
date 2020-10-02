Feature('LOGIN');

Scenario('LOGIN', (I) => {
  I.amOnPage('https://admin-pos.spesandbox.com/');
  I.fillField('Username', 'something@totest.com');
  I.fillField('Password', '123456');
  I.click('submit');
  I.see('Invalid username or password.');
});

Scenario('Create Merchant', (I) => {
  I.amOnPage('https://admin-pos.spesandbox.com/');
  I.click('Merchant Management');
}
//to run the test : npx codeceptjs run --steps
//npx codeceptjs run --steps test/login.js
