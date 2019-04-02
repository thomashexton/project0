const game = {
	board: {
		foo: [ '', '', '' ],
		oof: [ '', '', '' ],
		ofo: [ '', '', '' ]
	},
	winningCombos: [
		[ 00, 01, 02 ],
		[ 10, 11, 12 ],
		[ 20, 21, 22 ],
		[ 00, 10, 20 ],
		[ 01, 11, 21 ],
		[ 02, 12, 22 ],
		[ 00, 11, 22 ],
		[ 02, 11, 20 ]
	],
};


// need to work out how to alternate between X and O

//run sort on the arrays & if they match the winning arrays, game over
