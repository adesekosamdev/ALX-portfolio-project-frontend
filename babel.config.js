// babel.config.js or .babelrc
module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react',
	],
	ignore: [
		// Paths to large files you want to ignore
		'./src/images/Piggybank.svg',
	],
};
