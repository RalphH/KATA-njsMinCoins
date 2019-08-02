var sum = require('../sum');
var minCoins = require('../src/minCoins');
var expect = require('chai').expect;

describe('#sum()', function () {

    context('without arguments', function () {
        it('should return 0', function () {
            expect(sum()).to.equal(0)
        })
    })

    context('with number arguments', function () {
        it('should return sum of arguments', function () {
            expect(sum(1, 2, 3, 4, 5)).to.equal(15)
        })

        it('should return argument when only one argument is passed', function () {
            expect(sum(5)).to.equal(5)
        })
    })

    context('with non-number arguments', function () {
        it('should throw error', function () {
            expect(function () {
                sum(1, 2, '3', [4], 5)
            }).to.throw(TypeError, 'sum() expects only numbers.')
        })
    })

    // for 'npm test' via win terminal : \source\repos\njsMinCoins

    context('with 4p', function () {
        it('should return : 2 2p coins', function () {
            expect(minCoins("4p")).to.equal("2 2p coins")
        })        
    })

    context('with 11p', function () {
        it('should return : 1 10p coin and 1 1p coin', function () {
            expect(minCoins("11p")).to.equal("1 10p coin and 1 1p coin")
        })
    })

    context('with 456', function () {
        it('should return : 2 £2 coins, 1 50p coin, 1 5p coin and 1 1p coin', function () {
            expect(minCoins("456")).to.equal("2 £2 coins, 1 50p coin, 1 5p coin and 1 1p coin")
        })
    })

    context('with L200', function () {
        it('should return : Invalid input - enter a positive amount of money', function () {
            expect(minCoins("L200")).to.equal("Invalid input - enter a positive amount of money")            
        })
    })

    context('with ', function () {
        it('should return : Invalid input - enter a positive amount of money', function () {
            expect(minCoins("")).to.equal("Invalid input - enter a positive amount of money")
        })
    })

    context('with £p', function () {
        it('should return : Invalid input - enter a positive amount of money', function () {
            expect(minCoins("£p")).to.equal("Invalid input - enter a positive amount of money")
        })
    })

    context('with p', function () {
        it('should return : Invalid input - enter a positive amount of money', function () {
            expect(minCoins("p")).to.equal("Invalid input - enter a positive amount of money")
        })
    })

    context('with .5', function () {
        it('should return : Invalid input - enter a positive amount of money', function () {
            expect(minCoins(".5")).to.equal("Invalid input - enter a positive amount of money")
        })
    })

    context('with 80.p', function () {
        it('should return : Invalid input - enter a positive amount of money', function () {
            expect(minCoins("80.p")).to.equal("Invalid input - enter a positive amount of money")
        })
    })

    

})
