Feature('ALL');

Before((I) => {
  I.amOnPage('https://admin-pos.spesandbox.com/');
});

Scenario.only('create_merchant', async (I) => {
  // login
  await I.login('administrator', 'Password123');
  // Create Merchant
  await I.amOnPage('https://admin-pos.spesandbox.com/admin/merchants');
  await I.click('Create Merchant');
  await I.checkOption('Perorangan');
  await I.fillField('Nama', 'automationTest');
  await I.fillField('Alamat', 'Panguragan');
  await I.fillField('#basic_pemilik_kelurahan_id_placeholder', 'ARJAWINANGUN');
  await I.click('ARJAWINANGUN');
  await I.fillField('No. Telpon', '08911211111');
  await I.fillField('No. HP', '08911211111');
  await I.fillField('Email', 'akuntestspe+auto1@gmail.com');
  await I.checkOption('KTP');
  await I.fillField('Nomor Identitas', '11111111111');
  await I.fillField('Nama Merchant', 'autoTest');
  await I.fillField('Nama Perusahaan', 'PT auto');
  await I.checkOption('PT');
  await I.fillField('Alamat Terdaftar', 'Panguragan');
  await I.fillField('#basic_kelurahan_id_placeholder', 'PANGURAGAN');
  await I.click('PANGURAGAN KULON');
  await I.fillField('Nama PIC', 'AAuto');
  await I.fillField('No. HP PIC', '08919292919');
  await I.fillField('Email PIC', 'akuntestspe+auto1@gmail.com');
  await I.attachFile('#basic_business_doc_ktp', 'data/82003.jpg');
  await I.attachFile('Surat Ijin Usaha Perdagangan', 'data/82003.jpg');
  await I.attachFile('(NPWP)', 'data/82003.jpg');
});
//to run the test : npx codeceptjs run --steps
//npx codeceptjs run --steps test/test_test.js
