$(document).ready(function() {
    // run function on initial page load
	colorGuess();
});

function colorGuess() {
	var colorArray = ["../img/Hermes.png", "../img/burberry.png", "../img/apple.png", "../img/mini.jpg"];
	var color = Math.floor(Math.random() * colorArray.length);
	var stripped = colorArray[color].toLowerCase();
	console.log(colorArray[color]);
	console.log(stripped);
	$('body').css('background-color', colorArray[color]);
	$('#submit').click(function() {
		var guess = $('input').val();
		console.log(guess);
		if (guess == stripped || guess == colorArray[color]) {
			$('h1').text(guess + ' is right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is wrong');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	})
}

"../img/Hermes.png", "../img/burberry.png", "../img/apple.png", "../img/mini.jpg"





