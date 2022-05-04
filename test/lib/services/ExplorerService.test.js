const Reader = require('../../../app/lib/utils/Reader.js');
const ExplorerService = require('../../../app/lib/services/ExplorerService.js');

describe("Tests for ExplorerService", () => {
    test("1. Get the list of explorers that are only in the node mission", () => {
        const explorers = Reader.readJsonFile("test/lib/services/ExplorerService_testfile.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).toStrictEqual([
            {
              "name": "Woopa1",
              "githubUsername": "ajolonauta1",
              "mission": "node"
            },
            {
              "name": "Woopa2",
              "githubUsername": "ajolonauta2",
              "mission": "node"
            }
        ])
    })

    test("2. Get number of explorers in node mission", () => {
        const explorers = Reader.readJsonFile("test/lib/services/ExplorerService_testfile.json");
        const numberOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(numberOfExplorers).toBe(2)
    })
})