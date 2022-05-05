const Reader = require("../utils/Reader.js");
const ExplorerService = require("../services/ExplorerService.js");
const FizzBuzzService = require("../services/FizzBuzzService.js");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }
}

module.exports = ExplorerController