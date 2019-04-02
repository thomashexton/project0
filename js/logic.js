const game = {
	boardX: {
		'0': [ true, true, true ],
		'1': [ ],
		'2': [ ]
	},

	boardO: {
		'0': [ ],
		'1': [ ],
		'2': [ ]
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

	addToBoard: function( whichBoard, whichKey, whichCell ) {
		// if boardX then put
		if (whichBoard === 1) {
			// add to boardX
			this.boardX[whichKey].push( true );
			this.scanForMatch();
		} else if (whichBoard === 2) {
			// add to boardO
			this.boardO[whichKey].push( true );
			this.scanForMatch();
		}
	},

	scanForMatch: function() {
		for ( let i = 0; i < this.winningCombos.length; i += 1 ) {

			const combos = this.winningCombos[ i ]

			// console.log( combos );

			const x0 = combos[0][0];
			const y0 = combos[0][1];
			const x1 = combos[1][0];
			const y1 = combos[1][1];
			const x2 = combos[2][0];
			const y2 = combos[2][1];


			// if ( this.boardX[ x0 ][ y0 ] === true &&
			// 	 this.boardX[ x1 ][ y1 ] === true &&
			// 	 this.boardX[ x2 ][ y2 ] === true) {
			// 		 console.log('Winner');
			// 		 break;
			// }
		}
	}
};
