const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: '../public/images/'});
const pool = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id/1;
    const queryText = `UPDATE pictures SET likes = likes+1 WHERE "id"=$1;`

    pool.query(queryText, [galleryId])
    .then(result => {
        res.sendStatus(200);
    }).catch(err => {
        console.log(`Error making query ${queryText}`, err);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryText ="SELECT * FROM pictures ORDER BY id ASC;"
     pool.query(queryText)
    .then((response) => {
        res.send(response.rows);
        console.log('sending list');
    }).catch((err) => {
        res.sendStatus(500);
        console.log('request for list failed');
    });
}); // END GET Route

router.post('/', upload.single('image'), (req, res) => {
    let picData = req.body;
    let queryText = `INSERT INTO pictures ("path", "description") 
                     VALUES ($1, $2);`
    const file = req.file
    console.log(file);
    // pool.query(queryText, [filePath, picData.description])
    // .then((ressponse) => {
    //     res.sendStatus(200);
    // }).catch((err) => {
    //     res.sendStatus(500);
    //     console.log('request for post pic failed', err);
    // });
});



module.exports = router;
