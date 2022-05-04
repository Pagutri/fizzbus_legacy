const Reader = require('../../../app/lib/utils/Reader.js');
const FizzBuzzService = require('../../../app/lib/services/FizzBuzzService.js');

describe("Tests for FizzBuzzService", () => {
    test("1. Test trick attribute for explorer with score non-divisible by 3 nor 5", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorer1.trick).toBe(1)
    })
})