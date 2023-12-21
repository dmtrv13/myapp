var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let readers = await req.db.any(`
        SELECT
            *
        FROM
            readers
    `)
    console.log(readers)
    res.render('readers/list', { title: 'Читатели', readers: readers })

});

router.post('/create', async function(req, res, next) {
    let readers = req.body  
    await req.db.none('INSERT INTO readers(label, phone_number) VALUES(${label}, ${phone_number})', readers);
    res.send({msg: ''})  
    });

router.delete('/delete', async function(req, res, next) {
    let readers = req.body  
    await req.db.none('DELETE FROM readers WHERE id = ${id}', readers);
    res.send({msg: ''})  
    });

router.put('/update', async function(req, res, next) {
    let readers = req.body  
    await req.db.none('UPDATE readers SET label = ${label}, phone_number = ${phone_number} WHERE id = ${id}', readers);
    res.send({msg: ''})  
    });
 
module.exports = router;
