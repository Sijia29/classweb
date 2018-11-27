 $(document).ready(function() {
	numberGuess();
});

function numberGuess() {
	var number = Math.floor(Math.random() * 12);
	console.log(number);
	$('#submit').click(function() {
		var guess = $('input').val();
		console.log(guess);
		if (number == guess) {
			$('h1').text(number + ' is right!, snowy!');
			$('input').val('');
		} else if (number < guess) {
			$('h1').text(guess + ' is too late');
			$('input').val('')
		} else {
			$('h1').text(guess + ' is too early');
			$('input').val('');
		}
		 else if (number = 1) {
			$('h1').text(guess + ' snowy');
			$('input').val('')
		}

		
    })
}
