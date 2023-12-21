var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let authors = await req.db.any(`
        SELECT
            *
        FROM
            authors
    `)
    console.log(authors)
    res.render('authors/list', { title: 'Авторы', authors: authors })

});
 
router.post('/create', async function(req, res, next) {
    let authors = req.body  
    await req.db.none('INSERT INTO authors(fio) VALUES(${fio})', authors);
    res.send({msg: ''})  
    });

router.delete('/delete', async function(req, res, next) {
    let authors = req.body  
    await req.db.none('DELETE FROM authors WHERE id = ${id}', authors);
    res.send({msg: ''})  
    });

router.put('/update', async function(req, res, next) {
    let authors = req.body  
    await req.db.none('UPDATE authors SET fio = ${fio} WHERE id = ${id}', authors);
    res.send({msg: ''})  
    });

module.exports = router;
