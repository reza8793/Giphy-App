
	var movies = ['The Matrix', 'The Notebook', 'Mr. Nobody', 'The Lion King'];
	function renderButtons(){ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#moviesView').empty();

		// Loops through the array of movies
		for (var i = 0; i < movies.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('movie'); // Added a class 
		    a.attr('data-name', movies[i]); // Added a data-attribute
		    a.text(movies[i]); // Provided the initial button text
		    $('#moviesView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addMovie').on('click', function(){

		// This line of code will grab the input from the textbox
		var movie = $('#movie-input').val().trim();

		// The movie from the textbox is then added to our array
		movies.push(movie);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

	// ========================================================

	// This calls the renderButtons() function
	renderButtons();
