const Reader = require("../utils/Reader.js");
const ExplorerService = require("../services/ExplorerService.js");
const FizzBuzzService = require("../services/FizzBuzzService.js");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getTrickByNumber(number) {
        return FizzBuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;