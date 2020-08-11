const express = require('express');
const app = express();
const router = express.Router();
const multer  = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
const fs = require('fs');
const path = require('path');

router.post('/upload', upload.single('image_data'), function(req, res, next) {
    const imageBuffer = req.file.buffer;
    const imageType = req.body.type;
    fs.writeFile(`${path.join(__dirname, '/uploads/')}${imageType}.png`, imageBuffer, (err) => { 
        if (err) console.log(err); 
        else res.send('success');
    });
});

app.use(express.static(__dirname + '/uploads'));

app.use('/api', router);

app.listen(8080);