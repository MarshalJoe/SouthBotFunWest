var natural = require('natural'),
  tokenizer = new natural.WordTokenizer();

var text = "hi @SouthBotFunWest, where's a cool party?";

var wordArray = tokenizer.tokenize(text);
var greetingRE = /^hi$/;

for(var i=0;i < wordArray.length;i++) {
  if (greetingRE.test(wordArray[i])) {
    console.log(wordArray[i]);
    console.log("Sup " + "@person. So, I've heard about some cool South-by parties. You know, whatever [music, interactive, film, free, food, drink]");
  }
}