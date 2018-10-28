const application = require('./dist');

require('dotenv').load();
module.exports = application;

if (require.main === module) {
  // Run the application
  application.main().catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
