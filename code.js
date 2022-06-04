var scores = [79, 60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, "turkey", 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44, 75, 79];
var output;
var highScore = 0;
var bestSolutions = [];
var surprise; 
for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score " + scores[i];
    console.log(output);

    if (highScore <= scores[i]){
        highScore = scores[i];
    }

    if (type of(scores[i]) == "string"){
        surprise = scores[i];
    }
}

for (var i = 0; i < scores.length; i++) {
    if (highScore == scores[i]){
        bestSolutions.push(i);
    }
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble scores: " + highScore);
console.log("Solutions with highest scores: " + bestSolutions);
console.log("Surprise!: " + surprise);
