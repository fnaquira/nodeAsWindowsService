var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
	name: 'Node Hello World',
	description: 'The nodejs.org example web server.',
	script: 'C:\\users\\favio\\code\\node\\windowsService\\index.js',
	nodeOptions: ['--harmony', '--max_old_space_size=4096']
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
	svc.start();
});

svc.install();
