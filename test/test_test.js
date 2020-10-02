Feature('ALL');

Before((I) => {
  I.amOnPage('http://portal-pbb.spesandbox.com/');
});

Scenario.only('view_masterdata', async (I) => {
  // login
  await I.login('usmanTag', 'Admin!23');
  // View Masterdata
  await I.amOnPage('http://portal-pbb.spesandbox.com/perusahaan');
  await I.click('//tbody/tr[1]/td[6]/a[2]/i[1]');
  await I.see("Detail Perusahaan");

});

//to run the test : npx codeceptjs run --steps
//npx codeceptjs run --steps test/test_test.js
 