module.exports = {
	presets: [
	  '@babel/preset-env',
	  '@babel/preset-react',
	],
	overrides: [
	  {
		test: './src/images/Piggybank.svg',
		compact: false,
	  },
	],
  };
