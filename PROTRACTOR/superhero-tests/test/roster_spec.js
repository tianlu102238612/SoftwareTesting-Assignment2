var RosterPage = require('../page-objects/roster_object')
var LoginObject = require('../page-objects/login_object') 

describe('Roster Page', function() {
    var rosterPage
    var loginObject

    beforeEach(function () {
        rosterPage = new RosterPage()
        loginObject = new LoginObject()

        browser.ignoreSynchronization = true

        browser.get('file:///Users/Jiaqi/Downloads/PROTRACTOR/superhero/index.html')
        loginObject.emailTextField.sendKeys('11@gmail.com')
        loginObject.passwordTextField.sendKeys('1234')
        loginObject.submitButton.click()
    })

    afterEach(function () {

    })
    // Test id 1: Click submit without entering anything
    it('should display error message', function() {
        rosterPage.submitBtn.click()
        expect(rosterPage.rosterErrorAlert.isDisplayed()).toBe(true)
        expect(rosterPage.rosterErrorAlert.getText()).toEqual('You must enter a hero name to submit')
    })
    
    //Test id 2: Entering "Hulk" then click submit
    it('should add a hero on submit', function() {
        rosterPage.rosterFld.sendKeys('Hulk')
        rosterPage.submitBtn.click()
        expect(element(by.css('#hero-list > li:nth-child(6)')).isDisplayed()).toBe(true)
        expect(element(by.css('#hero-list > li:nth-child(6)')).getText()).toEqual('Hulk')
    })

    //Test id 3: Sbumit twice with entering "Storm" and "Luke"
    it('should add a hero on submit', function() {
      rosterPage.rosterFld.sendKeys('Hulk')
      rosterPage.submitBtn.click()
      rosterPage.rosterFld.sendKeys('Storm')
      rosterPage.submitBtn.click()
      rosterPage.rosterFld.sendKeys('Luke')
      rosterPage.submitBtn.click()
      expect(element(by.css('#hero-list > li:nth-child(6)')).isDisplayed()).toBe(true)
      expect(element(by.css('#hero-list > li:nth-child(6)')).getText()).toEqual('Hulk')
      expect(element(by.css('#hero-list > li:nth-child(7)')).isDisplayed()).toBe(true)
      expect(element(by.css('#hero-list > li:nth-child(7)')).getText()).toEqual('Storm')
      expect(element(by.css('#hero-list > li:nth-child(8)')).isDisplayed()).toBe(true)
      expect(element(by.css('#hero-list > li:nth-child(8)')).getText()).toEqual('Luke')
  })

      //Test id 4: Entering "Cage" then submit
      it('Should display error message', function() {
        rosterPage.rosterFld.sendKeys('Hulk')
        rosterPage.submitBtn.click()
        rosterPage.rosterFld.sendKeys('Storm')
        rosterPage.submitBtn.click()
        rosterPage.rosterFld.sendKeys('Luke')
        rosterPage.submitBtn.click()
        rosterPage.rosterFld.sendKeys('Cage')
        rosterPage.submitBtn.click()
        expect(rosterPage.rosterErrorAlert.isDisplayed()).toBe(true)
        expect(rosterPage.rosterErrorAlert.getText()).toEqual('You can only add a maximum of three heros to the roster')
    })

})