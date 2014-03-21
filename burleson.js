$('#search > form').submit(function( event ) {
	var d = new Date();
	var input = this.querySelector('input');
	var li = $('<li>').hide().fadeIn(500);
	li.text(input.value + ' - ' + d.getSeconds());
	$('#page > ol').prepend(li);
	input.value = '';
	event.preventDefault();
});

$('#page').html('<ol></ol>');