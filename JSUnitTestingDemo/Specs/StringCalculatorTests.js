/// <reference path="..\Scripts/jasmine/jasmine.js" />
/// <reference path="..\Scripts/StringCalculator.js" />
describe('String Calculator', function () {
    it("should return zero when an empty string is passed", function () {
        expect(add('')).toEqual(0);
    });

    it("should return string long", function () {
        expect(long('Angular7')).toEqual(8);
    });

    it("should return sum numbers", function () {
        expect(sum(8, 4)).toEqual(48);
    });
});