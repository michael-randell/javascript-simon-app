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

let seqArray = [];
let userArray = [];
let buttonsCache = [];

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
	} else {
		var random = randomIntFromInterval(1, 4)
		seqArray.push(random);
	};
	setupTheFlash()
};

function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

function resetGame() {
	seqArray = [];
	userArray = [];
};

function setupTheFlash() {
	let timer = seqArray.length * 1000;

	for (var i = 0; i < seqArray.length; i++) {
		flash(i, seqArray[i])
	};
	userTurn(timer)
};

function flash(i, id) {
	setTimeout(function() {
		var idSelector = '#' + (id-1)
		$(idSelector).addClass('light')
		setTimeout(function() {
			$(idSelector).removeClass('light')
		}, 500)
	}, i*1000);
};

function grabButtons() {
	if (!(buttonsCache.length === 0)) {
		return buttonsCache
	} else {
		buttonsCache = $('.push');
		return buttonsCache
	};
};

function buttonsClickable() {
	buttonsCache.removeClass('unclickable').addClass('clickable');
	buttonsCache.unbind("click").click(function() {
		var button = $(this).attr('id');
		var buttonId = parseInt(button)+1;
		userArray.push(buttonId);

		if(seqArray[userArray.length-1] !== buttonId) {
			error()
		} else if (seqArray.length === userArray.length) {
				console.log('next, equals')
				userArray = []
				sequence()
		}
	});
}

function error() {
	var wrongButtonId = '#' + (seqArray[userArray.length-1]-1);
	var repeatThree = [1,2,3];
	repeatThree.forEach(function(i) {
		setTimeout(function() {
			$(wrongButtonId).addClass('light')
			setTimeout(function() {
				$(wrongButtonId).removeClass('light')
			}, 400)
		}, i*800)
	});
	resetGame()
};

function userTurn(timer) {
	grabButtons()

	setTimeout(function() {
		buttonsClickable()
	}, timer)
};
