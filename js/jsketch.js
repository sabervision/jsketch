//$(document).ready(function(){

var start = function(option){
		$('#grid_wrapper').html("");

		var input = prompt('Specify a number between 1 and 256');

		if (input >= 1 && input <= 128) {  //ensure a valid input is used
				var square_size = $('#grid_wrapper').width()/input - 2;  // -2 accounts for border size
				
				for(var i =1; i <= input; i++){
						for(var j = 1; j <= input; j++){
								$('#grid_wrapper').append('<div class="grid_square"></div>');
						}
						$('#grid_wrapper').append('<div class="new_row"></div>');
				}

				$('.grid_square').css('width', square_size);
				$('.grid_square').css('height', square_size);

				$('.grid_square').mouseenter(function(){
						switch(option){
								case 1: 
										$(this).addClass('grid_square_lit');
										break;
								case 2:
										var currentOpacity = $(this).css('opacity');
										if(currentOpacity > 0)  {
												$(this).css('opacity', currentOpacity - 0.1);
										}
										break;
						}	
				});

			}
			else {
					alert('User error: please follow the instructions!');
			}
}

//});