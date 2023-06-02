const express = require('express');
const router = express.Router();
const pool = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryText ="SELECT * FROM pictures;"
     pool.query(queryText)
    .then((response) => {
        res.send(response.rows);
        console.log('sending list');
    }).catch((err) => {
        res.sendStatus(500);
        console.log('request for list failed');
    });
}); // END GET Route

module.exports = router;
