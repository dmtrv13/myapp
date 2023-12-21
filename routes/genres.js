var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let genres = await req.db.any(`
        SELECT
            *
        FROM
            genres
    `)
    console.log(genres)
    res.render('genres/list', { title: 'Жанры', genres: genres })

});

router.post('/create', async function(req, res, next) {
    let genres = req.body  
    await req.db.none('INSERT INTO genres(label) VALUES(${label})', genres);
    res.send({msg: ''})  
    });

router.delete('/delete', async function(req, res, next) {
    let genres = req.body  
    await req.db.none('DELETE FROM genres WHERE id = ${id}', genres);
    res.send({msg: ''})  
    });

router.put('/update', async function(req, res, next) {
    let genres = req.body  
    await req.db.none('UPDATE genres SET label = ${label} WHERE id = ${id}', genres);
    res.send({msg: ''})  
    });

module.exports = router;
