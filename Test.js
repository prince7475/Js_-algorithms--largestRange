
const chai = require('chai')
const program = require('./SecondGo')


describe('Largest Range', function () {

    it('Test #1', function() {
        chai.expect(program.largestRange([19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14])).to.deep.equal([10, 19]);
    });

    it('Test #2', function() {
        chai.expect(program.largestRange([0, 9, 19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14])).to.deep.equal([-1, 19]);
    });

    it('Test #3', function() {

        chai.expect(program.largestRange([0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13, 14, -2])).to.deep.equal([-7, 7]);
    });

    
    it('Test #4', function() {
        chai.expect(program.largestRange([-7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, -6, 8, 7, 6, 15, 12, 12, -5, 2, 1, 6, 13, 14, -4, -2])).to.deep.equal([-8, 19]);
    });


    it('Test #5', function() {
        chai.expect(program.largestRange([1])).to.deep.equal([1, 1]);
    });



    it('Test #6', function() {
        chai.expect(program.largestRange([1, 2])).to.deep.equal([1, 2]);
    });



    it('Test #7', function() {
        chai.expect(program.largestRange([4, 2, 1, 3])).to.deep.equal([1, 4]);
    });


    it('Test #8', function() {
        chai.expect(program.largestRange([4, 2, 1, 3, 6])).to.deep.equal([1, 4]);
    });

    it('Test #9', function() {
        chai.expect(program.largestRange([8, 4, 2, 10, 3, 6, 7, 9, 1])).to.deep.equal([6, 10]);
    });
});