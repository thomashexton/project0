const game = {
	board: {
		'0': [ null, null, null ],
		'1': [ null, null, null ],
		'2': [ null, null, null ]
	},

	winningCombos: [
		[ [0, 0], [0, 1], [0, 2] ], // [0]
		[ [1, 0], [1, 1], [1, 2] ], // [1]
		[ [2, 0], [2, 1], [2, 2] ], // [2]
		[ [0, 0], [1, 0], [2, 0] ], // [3]
		[ [0, 1], [1, 1], [2, 1] ], // [4]
		[ [0, 2], [1, 2], [2, 2] ], // [5]
		[ [0, 0], [1, 1], [2, 2] ], // [6]
		[ [0, 2], [1, 1], [2, 0] ]  // [7]
	],

	addToBoard: function( whichMarker, whichKey, whichCell ) {
		// if boardX then put
		if ( whichMarker === 'X' ) {
			// add to boardX
			if ( whichCell === 0 ) {
				this.board[ whichKey ].splice( 0, 1, 'X' );

			} else if ( whichCell === 1 ) {
				this.board[ whichKey ].splice( 1, 1, 'X' );

			} else if ( whichCell === 2 ) {
				this.board[ whichKey ].splice( 2, 1, 'X' );

			}

			this.scanForMatch();

		} else if ( whichMarker === 'O' ) {
			// add to boardO
			if ( whichCell === 0 ) {
				this.board[ whichKey ].splice( 0, 1, 'O' );

			} else if ( whichCell === 1 ) {
				this.board[ whichKey ].splice( 1, 1, 'O' );

			} else if ( whichCell === 2 ) {
				this.board[ whichKey ].splice( 2, 1, 'O' );

			}

			this.scanForMatch();
		}
	},

	scanForMatch: function() {

		for ( let i = 0; i < this.winningCombos.length; i += 1 ) {

			const combos = this.winningCombos[ i ]

			const x0 = this.winningCombos[ i ][ 0 ][ 0 ];
			const y0 = this.winningCombos[ i ][ 0 ][ 1 ];
			const x1 = this.winningCombos[ i ][ 1 ][ 0 ];
			const y1 = this.winningCombos[ i ][ 1 ][ 1 ];
			const x2 = this.winningCombos[ i ][ 2 ][ 0 ];
			const y2 = this.winningCombos[ i ][ 2 ][ 1 ];

			// console.log( x2, y2 );
			// console.log( this.board[ x2 ][ y2 ] );

			if ( this.board[ x0 ][ y0 ] === 'X' && this.board[ x1 ][ y1 ] === 'X' && this.board[ x2 ][ y2 ] === 'X') {
				console.log( 'Winner' );
				break;
			} // check for O
			else if ( this.board[ x0 ][ y0 ] === 'O' && this.board[ x1 ][ y1 ] === 'O' && this.board[ x2 ][ y2 ] === 'O' ) {
				 console.log( 'Winner' );
		  		break;
			} else if () {
				console.log('draw');
			}
		}
	}
};
