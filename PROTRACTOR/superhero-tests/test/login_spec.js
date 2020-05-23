/*
// Test Login Function 
// Import login_object File
var LoginObject = require('../page-objects/login_object') 

describe('Login Page Tests', function() {
    var loginObject

    beforeEach(function () {
        loginObject = new LoginObject()
        browser.ignoreSynchronization = true
        //Test id 1:Should load the login page
        browser.get('file:///Users/Jiaqi/Downloads/PROTRACTOR/superhero/index.html') 
    })
    
    afterEach(function () {

    })

    //Test id 2: Click submit with no email or password entered
    it('should display error message when email and password are empty', function() {
      loginObject.submitButton.click()

        expect(loginObject.loginErrorAlert.isDisplayed()).toBe(true)
        expect(loginObject.loginErrorAlert.getText()).toEqual('A password and a valid email are required.')
    })

    //Test id 3: Click submit with empty email and password "1234"
    it('should display error message when email is empty', function() {
      loginObject.passwordTextField.sendKeys('1234')
      loginObject.submitButton.click()

      expect(loginObject.loginErrorAlert.isDisplayed()).toBe(true)
      expect(loginObject.loginErrorAlert.getText()).toEqual('A password and a valid email are required.')
    })

    //Test id 4: Click submit with email"11@gamil.com" and empty password
    it('should display error message when password is empty', function() {
      loginObject.emailTextField.sendKeys('11@gamil.com')
      loginObject.submitButton.click()

        expect(loginObject.loginErrorAlert.isDisplayed()).toBe(true)
        expect(loginObject.loginErrorAlert.getText()).toEqual('A password and a valid email are required.')
    })

  //Test id 5: Click submit with email "abcd" and password "1234"
    it('Should display error message when email address is not valid', function() {
      loginObject.emailTextField.sendKeys('abcd')
      loginObject.passwordTextField.sendKeys('1234')
      loginObject.submitButton.click()
        expect(loginObject.loginErrorAlert.isDisplayed()).toBe(true)
        expect(loginObject.loginErrorAlert.getText()).toEqual('A password and a valid email are required.')
      })
  
  //Test id 6: Click submit with email"11@gmail.com" and password "1234"
    it('Should navigate to SuperheroRoster page with a valide email and password', function() {
      loginObject.emailTextField.sendKeys('11@gmail.com')
      loginObject.passwordTextField.sendKeys('1234')
      loginObject.submitButton.click()
    })
})
*/