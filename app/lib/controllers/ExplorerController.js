const Reader = require("../utils/Reader.js");
const ExplorerService = require("../services/ExplorerService.js");
const FizzBuzzService = require("../services/FizzBuzzService.js");

class ExplorerController {
    static getExplorersByMission(filePath, mission) {
        const explorers = Reader.readJsonFile(filePath);
        return ExplorerService.filterByMission(explorers, mission);
    }
}

module.exports = ExplorerController