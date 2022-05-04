const Reader = require('../../../app/lib/utils/Reader.js');
const FizzBuzzService = require('../../../app/lib/services/FizzBuzzService.js');

describe("Tests for FizzBuzzService", () => {
    test("1. Test trick attribute for explorer with score non-divisible by 3 nor 5", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        const explorer1AfterFizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer1)
        expect(explorer1AfterFizzBuzz.trick).toBe(1)
    })

    test("2. Test trick attribute for explorer with score divisible only by 3", () => {
        const explorer3 = {name: "Explorer3", score: 3}
        const explorer3AfterFizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer3) 
        expect(explorer3AfterFizzBuzz.trick).toBe("FIZZ")
    })

    test("3. Test trick attribute for explorer with score divisible only by 5", () => {
        const explorer5 = {name: "Explorer5", score: 5}
        const explorer5AfterFizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer5) 
        expect(explorer5AfterFizzBuzz.trick).toBe("BUZZ")
    })
})