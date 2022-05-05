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

    test("4. Test for getTrickByNumber, when score is not divisible by 3 nor 5", () => {
        const trickForScore1 = ExplorerController.getTrickByNumber(1);
        expect(trickForScore1).toBe(1);
    });

    test("5. Test for getTrickByNumber, when score is divisible only by 3", () => {
        const trickForScore3 = ExplorerController.getTrickByNumber(3);
        expect(trickForScore3).toBe("FIZZ");
    });

    test("6. Test for getTrickByNumber, when score is divisible by 5", () => {
        const trickForScore5 = ExplorerController.getTrickByNumber(5);
        expect(trickForScore5).toBe("BUZZ");
    });

    test("7. Test for getTrickByNumber, when score is divisible by 3 and 5", () => {
        const trickForScore15 = ExplorerController.getTrickByNumber(15);
        expect(trickForScore15).toBe("FIZZBUZZ");
    });
});