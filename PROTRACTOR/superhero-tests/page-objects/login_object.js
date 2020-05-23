// Objects in login page

var LoginObject = function () {}

LoginObject.prototype = Object.create({}, {
    emailTextField: {get: function () { return element(by.id('loginEmail')) } },
    passwordTextField: {get: function () { return element(by.id('loginPassword')) } },
    submitButton: {get: function () { return element(by.css('#form-login > button')) } },
    loginErrorAlert: {get: function () { return element(by.id('login-alert')) } }
})

module.exports = LoginObject