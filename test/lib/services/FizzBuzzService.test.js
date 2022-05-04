const Reader = require('../../../app/lib/utils/Reader.js');
const FizzBuzzService = require('../../../app/lib/services/FizzBuzzService.js');

describe("Tests for FizzBuzzService", () => {
    test("1. Test fizzbuzz validation for a given explorer", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorer1.trick).toBe(1)

        const explorer3 = {name: "Explorer3", score: 3}
        FizzbuzzService.applyValidationInExplorer(explorer3)
        expect(explorer3.trick).toBe("FIZZ")

        const explorer5 = {name: "Explorer5", score: 5}
        FizzbuzzService.applyValidationInExplorer(explorer5)
        expect(explorer5.trick).toBe("BUZZ")

        const explorer15 = {name: "Explorer15", score: 15}
        FizzbuzzService.applyValidationInExplorer(explorer15)
        expect(explorer15.trick).toBe("FIZZBUZZ")
    })
})