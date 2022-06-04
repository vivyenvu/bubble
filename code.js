var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .35, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

function printAndGetHighScore(scores) {
    var output;
    var highScore = 0;
    var surprise; 
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score " + scores[i];
        console.log(output);
    
        if (highScore <= scores[i]){
            highScore = scores[i];
        }
    }
    return highScore;
}
var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble scores: " + highScore);

function getBestResults(arr, highest) {
    var bestSolutions = [];
    for (var i = 0; i < arr.length; i++) {
        if (highest == scores[i]){
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}
function getLowestCost(scores, costs, highest){
    var lowest = 1;
    var index;
    for (var i = 0; i < scores.length; i++){
        if (scores[i] == highest){
            if (costs[i] < lowest) {
                lowest = costs[i];
                index = i;
            }
        }
    }
    return index;
}

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with highest scores: " + bestSolutions);
var mostCostEffective = getLowestCost(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
