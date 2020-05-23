var TestPage = function(){}

TestPage.prototype = Object.create({},{
  emailField:{get:function() {return element(by.id('loginEmail'))}}

})

module.exports = TestPage