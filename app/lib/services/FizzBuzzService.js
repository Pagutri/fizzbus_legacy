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

    static applyValidationInNumber(number) {
        let trick_str = "FIZZ";

        if(number%3 === 0) {
            if(number%5 === 0) {
                trick_str = "FIZZBUZZ";
            }
            return trick_str;
        }
        else if (number%5 === 0) {
            return "BUZZ";
        }
        else {
            return number;
        }
    }
}

module.exports = FizzBuzzService;