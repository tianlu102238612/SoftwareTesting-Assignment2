var RosterPage = function() {}

RosterPage.prototype = Object.create({}, {
    rosterFld: {get: function () { return element(by.id('heroInput')) } },
    submitBtn: {get: function () { return element(by.id('submitHero')) } },
    rosterErrorAlert:{get: function () { return element(by.id('addHero-Alert')) } }
})

module.exports = RosterPage