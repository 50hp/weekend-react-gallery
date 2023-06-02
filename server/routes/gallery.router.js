const express = require('express');
const router = express.Router();
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

module.exports = router;
