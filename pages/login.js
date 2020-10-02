const { I } = inject();

module.exports = {
  fields: {
    email: '#user_basic_email',
    password: '#user_basic_password'
  },
  submitButton: {'css: '#new_user_basic input[type=submit]''},

  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  }
  // insert your locators and methods here
}
