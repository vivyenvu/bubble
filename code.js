var scores = [79, 60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, "hello world", 61, 51, 44, 75, 79];

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
    
        /*if (typeof(scores[i]) == "string"){
            surprise = scores[i];
        }*/
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
var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with highest scores: " + bestSolutions);
//console.log("Surprise!: " + surprise);
