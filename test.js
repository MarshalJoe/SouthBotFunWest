var natural = require('natural'),
  tokenizer = new natural.WordTokenizer();
var text = "@SouthBotFunWest! Where's some food?";

function matchRE (re, text) {
	var wordArray = tokenizer.tokenize(text);
	for(var i=0;i < wordArray.length;i++) {
		if (re.test(wordArray[i])) {
			return true;
		}
	}
	return false; 
}

// RegExes
var greetingRE = /^hi$/;
var musicRE = /^music$/;
var interactiveRE = /^interactive$/;
var filmRE = /^film$/;
var foodRE = /^food$/;
var drinkRE = /^drink$/;

if (matchRE(interactiveRE, text)) {
  console.log("interactive")
} else if (matchRE(filmRE, text)) {
  console.log("film", text)
} else if (matchRE(musicRE, text)) {
  console.log("music")
} else if (matchRE(drinkRE, text)) {
  console.log("drink");
} else if (matchRE(foodRE, text)) {
  console.log("food")
} else if (matchRE(greetingRE, text)) {
	console.log("greeting");
} else {

}
