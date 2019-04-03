const render = function() {
	// iterate over each div and find if it's data value is equal to X or O ... replacing it as necessary
	$( '.cell' ).each( function() {
		if ( $( this ).data( 'render' ) === 'X' ) {
			$( this ).html( '<img src="img/cross.svg">' )
		} else if ( $( this ).data( 'render' ) === 'O' ) {
			$( this ).html( '<img src="img/nought.svg">' )
		} else {
			$( this ).html( '<img src="img/blank.svg">' )
		}
	} );
};

$( document ).ready( function() {

	var lastRenderValue = 0;

	// on page load, add data render attributes to jQuery '.cell' objects
	$( '.cell' ).data( 'render', 0 );

	$( '.cell' ).on( 'click', function() {

		// checks to see if match has been found already
		if (game.boardState) {
			console.log('Game over.');
			return;
		}

		// first click places an X
		if ( lastRenderValue === 0 ) {
			// change the jQuery object data-row='1'
			$( this ).data( 'render', 'X' );

			const row = $( this ).data( 'row' );
			const cell = $( this ).data( 'cell' );

			game.addToBoard( 'X', row, cell );

			lastRenderValue = 'X';
			game.clickCount += 1;

		} // so they can't reclick a used square
		else if ( $( this ).data( 'render' ) !== 0 ) {
			console.log( 'Can\'t reselect.' );

		} // if previous marker placed was X (1) choose O (2)
		else if ( lastRenderValue === 'X' ) {
			$( this ).data( 'render', 'O' );

			const row = $( this ).data( 'row' );
			const cell = $( this ).data( 'cell' );

			game.addToBoard( 'O', row, cell );

			lastRenderValue = 'O';
			game.clickCount += 1;

		} // if previous marker placed was O (2) choose X (1)
		else if ( lastRenderValue === 'O' ) {
			$( this ).data( 'render', 'X' );

			const row = $( this ).data( 'row' );
			const cell = $( this ).data( 'cell' );

			game.addToBoard( 'X', row, cell );

			lastRenderValue = 'X';
			game.clickCount += 1;

		}

		// console.log( $( this ).data( 'row' ), $( this ).data( 'cell' ) );
		render();
	} );

	$( '#reset' ).on( 'click', game.reset );
} );
