const ExplorerController = require("../../../app/lib/controllers/ExplorerController.js");

describe("Tests for ExplorerController", () => {
    test("1. Test for getExplorersByMission", () => {
        const filePath = "test/lib/services/ExplorerService_testfile.json";
        const explorersInNode = ExplorerController.getExplorersByMission(filePath, "node");
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
        ]);
    });
});