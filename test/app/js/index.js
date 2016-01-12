$(document).ready(function() {
	$('#mytab a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	});
});