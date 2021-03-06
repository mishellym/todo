var path = require('path'),
	rootPath = path.normalize(__dirname +'/..'),
	env = process.env.NODE_ENV || 'development';

var config = {
	development: {
		root: rootPath,
		app: { name: 'ToDo' },
		port: 5000,
		db: 'mongodb://127.0.0.1/todo-dev',
	},
	production: {
		root: rootPath,
		app: { name: 'ToDo' },
		port: 8080,
	},
	test: {
		root: rootPath,
		app: { name: 'ToDo' },
		port: 4000,
	},
};

module.export = config[env];
	
