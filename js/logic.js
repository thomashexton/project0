const game = {
	board: {
		'0': [ null, null, null ],
		'1': [ null, null, null ],
		'2': [ null, null, null ]
	},
	boardState: false,
	previousMarker: false,
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
	addToBoard: function( boardMarker, row, column ) {

		if ( this.boardState ) {
			console.log( 'Game over, click reset.' );
			return;
		}

		if ( boardMarker === 'X' ) {
			if ( column === 0 ) {
				this.board[ row ].splice( 0, 1, 'X' );
			} else if ( column === 1 ) {
				this.board[ row ].splice( 1, 1, 'X' );
			} else if ( column === 2 ) {
				this.board[ row ].splice( 2, 1, 'X' );
			}
			this.scanForMatch( boardMarker );

		} else if ( boardMarker === 'O' ) {
			if ( column === 0 ) {
				this.board[ row ].splice( 0, 1, 'O' );
			} else if ( column === 1 ) {
				this.board[ row ].splice( 1, 1, 'O' );
			} else if ( column === 2 ) {
				this.board[ row ].splice( 2, 1, 'O' );
			}
			this.scanForMatch( boardMarker );
		}
	},
	scanForMatch: function( boardMarker ) {

		for ( let i = 0; i < this.winningCombos.length; i += 1 ) {

			const combos = this.winningCombos[ i ]

			const row0 = this.winningCombos[ i ][ 0 ][ 0 ];
			const col0 = this.winningCombos[ i ][ 0 ][ 1 ];
			const row1 = this.winningCombos[ i ][ 1 ][ 0 ];
			const col1 = this.winningCombos[ i ][ 1 ][ 1 ];
			const row2 = this.winningCombos[ i ][ 2 ][ 0 ];
			const col2 = this.winningCombos[ i ][ 2 ][ 1 ];

			// checking for winning combos
			if ( this.board[ row0 ][ col0 ] === boardMarker && this.board[ row1 ][ col1 ] === boardMarker && this.board[ row2 ][ col2 ] === boardMarker ) {
				this.winner( boardMarker, row0, col0, row1, col1, row2, col2 );
				this.boardState = true;
				break;
			} else if ( this.clickCount >= 8 ) {
				this.draw();
			}
		}
	},
	winner: function( boardMarker, row0, col0, row1, col1, row2, col2 ) {
		// gather the DOM elements that match the row and col of the winning combo and addClass
		const $winningCombo = $( `[data-row=${row0}][data-col=${col0}]` ).add( `[data-row=${row1}][data-col=${col1}]` ).add( `[data-row=${row2}][data-col=${col2}]` );
		$winningCombo.addClass( 'winning-combo' )

		// upon win, disable mouse interaction through CSS
		$(' #game-board ').addClass( 'unselectable' );
		$( 'h1' ).text( `The winner is: ${ boardMarker }` ).fadeTo( 0, 100 );
		$( '#reset' ).fadeTo( 0, 100 ).removeClass( 'unselectable' ).removeClass( 'vis-hidden' );
	},
	draw: function() {
		$( 'h1' ).text( 'Draw, click reset.' ).fadeTo( 0, 100 );
		$( '#reset' ).fadeTo( 0, 100 ).removeClass( 'unselectable' ).removeClass( 'vis-hidden' );
	},
	reset: function() {
		$( '#game-board' ).removeClass( 'unselectable' );
		$( '.cell' ).removeClass( 'winning-combo' )

		game.boardState = false;
		game.board[0].splice( 0, 3, null, null, null );
		game.board[1].splice( 0, 3, null, null, null );
		game.board[2].splice( 0, 3, null, null, null );

		game.clickCount = 0;
		game.previousMarker = false;

		$( '.cell' ).data( 'render', 0 ).css( 'background-color', '#FD5252' );
		$( '#reset' ).fadeTo(800, 0).addClass( 'unselectable' );
		$( 'h1' ).fadeTo( 800, 0 );
		render();
	}
};
