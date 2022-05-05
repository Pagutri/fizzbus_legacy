const ExplorerController = require("../../../app/lib/controllers/ExplorerController.js");

describe("Tests for ExplorerController", () => {
    test("1. Test for getExplorersByMission", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode[5].name).toBe("Woopa11");
    });
});