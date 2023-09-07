const multer = require('multer');
const { uploadsFolder } = require('../config');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsFolder);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

module.exports = multer({ storage: storage });
