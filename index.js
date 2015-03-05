var Twit = require('twit');
var twitInfo = require('./config.js');

var twitter = new Twit(twitInfo);

function search (query, asker) {
	var search = "SXSW party " + query + " filter:links";
	twitter.get('search/tweets', { q: search, count: 10 }, function(err, data, response) {

		var resultLink; 

		if (data.statuses[0].entities.urls.length > 0) {
			console.log("first try");
			resultLink = data.statuses[0].entities.urls[0].url;
		} else {
			console.log("second try");
			for (var i=0;i < data.statuses.length;i++) {
				if (data.statuses[i].entities.urls.length > 0) {
					resultLink = data.statuses[i].entities.urls[0].url;
					i = data.statuses.length;
				}
			}
		};	  

	  var result = "@" + asker + " Cool cool. Totally get that... " + query + " is neat. How about this? " + resultLink;
	  post(result);
	})
}

function post (content) {
	twitter.post('statuses/update', { status: content }, function(err, data, response) {
	})
}
	
var stream = twitter.stream('statuses/filter', { track: '@SouthBotFunWest' })

stream.on('tweet', function (tweet) {
  var asker = tweet.user.screen_name;
	var text = tweet.text;

	// RegExes
	var re = /party/;
	var musicRE = /music/;
	var interactiveRE = /interactive/;
	var filmRE = /film/;
	var foodRE = /food/;
	var drinkRE = /drink/;

	if (re.test(text)) {
		post("Sup " + "@" + asker + " . So, I've heard about some cool South-by parties. You know, whatever [music, interactive, film, free, food, drink]");
	} else if (musicRE.test(text)) {
		search("music", asker);
	} else if (interactiveRE.test(text)) {
		search("interactive", asker)
	} else if (filmRE.test(text)) {
		search("film", asker)
	} else if (foodRE.test(text)) {
		search("food", asker)
	} else {
	}

})