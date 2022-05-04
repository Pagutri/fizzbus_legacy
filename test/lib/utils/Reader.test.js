const Reader = require('../../../app/lib/utils/Reader.js');

describe("Tests for Reader", () => {
    test("1. Read the file correctly", () => {
        const explorers = Reader.readJsonFile("../../../explorers.json");
        expect(explorers[0].name).toBe("Woopa1")
    });
});