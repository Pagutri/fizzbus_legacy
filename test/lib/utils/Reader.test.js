const Reader = require("../../../app/lib/utils/Reader.js");

describe("Tests for Reader", () => {
    test("1. Read the file correctly", () => {
        const explorers = Reader.readJsonFile("test/lib/utils/Reader_testfile.json");
        expect(explorers).toStrictEqual([
            {
                "name": "Woopa1",
                "stacks": [
                    "javascript",
                    "reasonML"
                ]
            },
            {
                "name": "Woopa2",
                "stacks": [
                    "javascript",
                    "groovy"
                ]
            }
        ]);
    });
});