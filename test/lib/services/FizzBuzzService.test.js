const Reader = require('../../../app/lib/utils/Reader.js');
const FizzBuzzService = require('../../../app/lib/services/FizzBuzzService.js');

describe("Tests for FizzBuzzService", () => {
    test("1. Test trick attribute for explorer with score non-divisible by 3 nor 5", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        const explorer1AfterFizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer1)
        expect(explorer1AfterFizzBuzz.trick).toBe(1)
    })
})