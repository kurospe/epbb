Feature('Tambah Perusahaan');

Before((I) => {
  I.amOnPage('http://portal-pbb.spesandbox.com/');
});

Scenario.only('view_masterdata', async (I) => {
  // login
  await I.login('usmanTag', 'Admin!23');
  // View Masterdata
  I.amOnPage('http://portal-pbb.spesandbox.com/perusahaan');
  I.click('+ Tambah Perusahaan');
  I.fillField('input', 'Testauto');
  I.click('aktif');
  I.click('inaktif')
  I.click('Simpan')
});

//to run the test : npx codeceptjs run --steps
//npx codeceptjs run --steps test/Tambah_perusahaan.js
 