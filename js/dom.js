const render = function() {
	// search each div and determine it's render state through the 'data-render=' value
	$( '.cell' ).each( function() {
		if ( $( this ).data( 'render' ) === 'X' ) {
			$( this ).html( '<img src="img/cross.svg">' )
		} else if ( $( this ).data( 'render' ) === 'O' ) {
			$( this ).html( '<img src="img/naught.svg">' )
		} else {
			$( this ).html( '<img src="img/blank.svg">' )
		}
	} );
};

$( document ).ready( function() {

	// on page load, add data-render='false' attribute to all jQuery '.cell' objects
	$( '.cell' ).data( 'render', false );

	$( '.cell' ).on( 'click', function() {

		if ( game.boardState ) {
			// checks if winningCombos has been played already
			$( 'h1' ).text( 'Game over, click reset.' );
			return;

		} else if ( $( this ).data( 'render' ) ) {
			// if the cell clicked returns true in the data-render field, if returns true don't allow click
			return;

		} else if ( !game.previousMarker ) {
			// if there previousMarker returns true, if not assigns first click to X
			$( this ).data( 'render', 'X' );

			const row = $( this ).data( 'row' );
			const cell = $( this ).data( 'cell' );

			game.addToBoard( 'X', row, cell );
			game.previousMarker = 'X';
			game.clickCount += 1;

		} else if ( game.previousMarker === 'X' ) {
			// if previous marker placed was 'X', place 'O'
			$( this ).data( 'render', 'O' );

			const row = $( this ).data( 'row' );
			const cell = $( this ).data( 'cell' );

			game.addToBoard( 'O', row, cell );
			game.previousMarker = 'O';
			game.clickCount += 1;

		} else if ( game.previousMarker === 'O' ) {
			// if previous marker placed was 'O', place 'X'
			$( this ).data( 'render', 'X' );

			const row = $( this ).data( 'row' );
			const cell = $( this ).data( 'cell' );

			game.addToBoard( 'X', row, cell );
			game.previousMarker = 'X';
			game.clickCount += 1;
		}

		render();
	} );

	$( '#reset' ).css( 'visibility', 'hidden' );
	$( '#reset' ).on( 'click', game.reset );
} );
