

	// Initial array of topics
	var topics = ['Messie Goals ', 'Best Dunks', 'Basketball Shots', 
					'Famous Touchdowns', 'Best football catches'];

					
	function renderButtons()

	{ 

		//$('#displayButtons').empty();

		for (var k= 0; k< topics.length; k++)
		{

			var b = $('<button>');

			b.attr('data-name', topics[k]);

			b.text(topics[k]);

			console.log(b);


			$('#displayButtons').append(b);
			$('#displayButtons').html("why isn't it working");

		}

	}
	

	
	renderButtons();










