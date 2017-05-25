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
let buttonsCache = []

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
}

function setupTheFlash() {


	for (var i = 0; i < seqArray.length; i++) {
		flash(i, seqArray[i])
	}
	userTurn()
};

function flash(i, id) {
	setTimeout(function() {
		var idSelector = '#' + (id-1)
		$(idSelector).addClass('light')
		setTimeout(function() {
			$(idSelector).removeClass('light')
		}, 500)
	}, i*1000)
}

function grabButtons() {
	//buttonsCache = $('.push')
	if (!(buttonsCache.length === 0)) {
		return buttonsCache
	} else {
		buttonsCache = $('.push')
		return buttonsCache
	}
}

function buttonsClickable() {
	buttonsCache.removeClass('unclickable').addClass('clickable')

	//$.each(buttonsCache, function(i, button) {
	//	debugger;
	//	button.switchClass('unclickable', 'clickable')
	//})

	//for(var i = 0; i < buttonsCache.length; i++) {
	//	debugger;
	//	buttonsCache[i].switchClass('unclickable', 'clickable')
	//}
}

function userTurn(timer) {
	grabButtons()
	setTimeout(function() {
		buttonsClickable()
	}, timer)
	//buttonsClickable()
}
