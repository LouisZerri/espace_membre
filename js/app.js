$(document).ready(function(){

	$('#categoryFilter').keyup(function(event){

		var input = $(this);
		var val = input.val();
		var regexp = '\\b(.*)a(.*)\\b';
		$('#filter').find('td').each(function(){
			var td = $(this);
			console.log(td);
		})
	});



})