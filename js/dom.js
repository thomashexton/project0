const render = function() {
	// iterate over each div and find if it's data value is equal to X or O ... replacing it as necessary
	$( '.cell' ).each( function() {
		if ( $( this ).data( 'render' ) === 1 ) {
			$( this ).html( '<img src="img/cross.svg">' )
		} else if ( $( this ).data( 'render' ) === 2 ) {
			$( this ).html( '<img src="img/nought.svg">' )
		} else {
			$( this ).html( '<img src="img/blank.svg">' )
		}
	} );
};

$( document ).ready( function() {

	var lastRenderValue = 0;

	// on page load, add data attributes to jQuery .cell objects
	$( '.cell' ).data( 'render', 0 );

	$( '.cell' ).on( 'click', function() {
		// first click place desired action
		if ( lastRenderValue === 0 ) {
			$( this ).data( 'render', 1 );
			lastRenderValue = 2;
		} // so they can't reclick a used square
		else if ( $( this ).data( 'render' ) !== 0 ) {
			console.log( 'Can\'t reselect.' );
		} // if previous marker placed was X (1) choose O (2)
		else if ( lastRenderValue === 1 ) {
			$( this ).data( 'render', 1 );
			lastRenderValue = 2;
		} // if previous marker placed was O (2) choose X (1)
		else if ( lastRenderValue === 2 ) {
			$( this ).data( 'render', 2 );
			lastRenderValue = 1;
		}
		// console.log($(this).data('row'), $(this).data('cell'));
		// console.log( lastRenderValue );
		render();
	} );
} );
