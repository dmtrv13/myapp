var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let book_issuance = await req.db.any(`
        SELECT
            book_issuance.id AS id,
            books.label AS id_book,
            readers.label AS id_reader,
            status.label AS id_status
        FROM
            book_issuance
        INNER JOIN
            books ON books.id = book_issuance.id_book
        INNER JOIN
            readers ON readers.id = book_issuance.id_reader
        INNER JOIN
            status ON status.id = book_issuance.id_status
    `)
    console.log(book_issuance)
    let readers = await req.db.any(`
        SELECT
            *
        FROM
            readers
    `)
    console.log(readers)

    let books = await req.db.any(`
        SELECT
            *
        FROM
            books
    `)
    console.log(books)

    let status = await req.db.any(`
        SELECT
            *
        FROM
            status
    `)
    console.log(status)
    res.render('book_issuance/list', { title: 'Выдача книг', book_issuance: book_issuance, readers: readers, books: books, status: status })

});

router.post('/create', async function(req, res, next) {
    let book_issuance = req.body
    await req.db.none('INSERT INTO book_issuance(id_book, id_reader, id_status) VALUES(${id_book}, ${id_reader}, ${id_status})', book_issuance);
    res.send({msg: ''})
});

router.delete('/delete', async function(req, res, next) {
    let book_issuance = req.body  
    await req.db.none('DELETE FROM book_issuance WHERE id = ${id}', book_issuance);
    res.send({msg: ''})  
    });

router.put('/update', async function(req, res, next) {
    let book_issuance = req.body  
    await req.db.none('UPDATE book_issuance SET id_book = ${id_book}, id_reader = ${id_reader}, id_status = ${id_status} WHERE id = ${id}', book_issuance);
    res.send({msg: ''})  
    });


router.get('/:id', async function(req, res) {

    let id = req.params.id

    let book_issuance = await req.db.one(`
        SELECT
            book_issuance.id AS id,
            books.label AS id_book,
            readers.label AS id_reader,
            status.label AS id_status
        FROM
            book_issuance
        INNER JOIN
            books ON books.id = book_issuance.id_book
        INNER JOIN
            readers ON readers.id = book_issuance.id_reader
        INNER JOIN
            status ON status.id = book_issuance.id_status
        WHERE
            book_issuance.id = $/id/
    `, {id: id})

    res.render('book_issuance/view', { title: 'Выдача книги' + book_issuance.label, book_issuance: book_issuance })

});

module.exports = router;
