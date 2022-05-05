const ExplorerController = require("../../../app/lib/controllers/ExplorerController.js");

describe("Tests for ExplorerController", () => {
    test("1. Test for getExplorersByMission", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode[5].name).toBe("Woopa11");
    });

    test("2. Test for getExplorersUsernamesByMission", () => {
        const usernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernames[6]).toBe("ajolonauta12");
    });

    test("3. Test for getExplorersAmountByMission", () => {
        const amount = ExplorerController.getExplorersAmountByMission("node");
        expect(amount).toBe(10);
    });
});