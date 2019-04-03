const game = {
	board: {
		'0': [ null, null, null ],
		'1': [ null, null, null ],
		'2': [ null, null, null ]
	},

	boardState: false,

	clickCount: 0,

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



	addToBoard: function( boardMarker, row, cell ) {

		if (this.boardState) {
			console.log('Game over.');
			return;
		}

		if ( boardMarker === 'X' ) {
			if ( cell === 0 ) {
				this.board[ row ].splice( 0, 1, 'X' );

			} else if ( cell === 1 ) {
				this.board[ row ].splice( 1, 1, 'X' );

			} else if ( cell === 2 ) {
				this.board[ row ].splice( 2, 1, 'X' );

			}
			this.scanForMatch(boardMarker);

		} else if ( boardMarker === 'O' ) {
			if ( cell === 0 ) {
				this.board[ row ].splice( 0, 1, 'O' );

			} else if ( cell === 1 ) {
				this.board[ row ].splice( 1, 1, 'O' );

			} else if ( cell === 2 ) {
				this.board[ row ].splice( 2, 1, 'O' );

			}
			this.scanForMatch(boardMarker);
		}
	},

	scanForMatch: function(boardMarker) {

		for ( let i = 0; i < this.winningCombos.length; i += 1 ) {

			const combos = this.winningCombos[ i ]

			const x0 = this.winningCombos[ i ][ 0 ][ 0 ];
			const y0 = this.winningCombos[ i ][ 0 ][ 1 ];
			const x1 = this.winningCombos[ i ][ 1 ][ 0 ];
			const y1 = this.winningCombos[ i ][ 1 ][ 1 ];
			const x2 = this.winningCombos[ i ][ 2 ][ 0 ];
			const y2 = this.winningCombos[ i ][ 2 ][ 1 ];

			// checking for winning combos
			if ( this.board[ x0 ][ y0 ] === boardMarker && this.board[ x1 ][ y1 ] === boardMarker && this.board[ x2 ][ y2 ] === boardMarker ) {
				this.winner( boardMarker );
				this.boardState = true;
				break;
			} else if ( this.clickCount >= 8 ) {
				this.draw();
			}
		}
	},

	winner: function( boardMarker ) {
		$( 'h1' ).text( `The winner is: ${boardMarker}` );
	},

	draw: function ( ) {
		$( 'h1' ).text( 'Draw, click reset.' );
	},

	reset: function() {
		game.boardState = false;
		game.board[0].splice( 0, 3, null, null, null );
		game.board[1].splice( 0, 3, null, null, null );
		game.board[2].splice( 0, 3, null, null, null );

		lastRenderValue = 0;
		game.clickCount = 0;
		$( '.cell' ).data( 'render', 0 );
		$( 'h1' ).text( 'Tic Tac Toe' );
		render();
	}
};
