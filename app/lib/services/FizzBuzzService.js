class FizzBuzzService {
    static applyValidationInExplorer(explorer) {
        let trick_str = "FIZZ";

        if(explorer.score%3 === 0) {
            if(explorer.score%5 === 0) {
                trick_str = "FIZZBUZZ";
            }
            explorer.trick = trick_str;
            return explorer;
        }
        else if (explorer.score%5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        }
        else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }
}

module.exports = FizzBuzzService;