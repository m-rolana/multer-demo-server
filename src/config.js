const path = require('path');

module.exports = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 5000,
    uploadsFolder: process.env.UPLOADS_DIR || path.join(__dirname, '../uploads'),
};