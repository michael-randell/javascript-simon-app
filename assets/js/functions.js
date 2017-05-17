// Browser detection for when you get desperate. A measure of last resort.

// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

// Uncomment the below to use:
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


$(function() {
	attachListeners();
});

let seqArray = []

function attachListeners() {

	$('#start').click(function(event) {
		sequence();
	});
};

function sequence() {
	if (seqArray.length < 1) {
		for(var i=0; i < 3; i++){
			var random = randomIntFromInterval(1, 4)
    	seqArray.push(random);
		};
	};
	console.log(seqArray)
};

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function tester() {

}
