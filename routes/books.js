var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let books = await req.db.any(`
        SELECT
            books.id AS id,
            books.label AS label,
            authors.fio AS id_author,
            genres.label AS id_genre,
            books.year_of_publication as year_of_publication
        FROM
            books
        INNER JOIN
            authors ON authors.id = books.id_author
        INNER JOIN
            genres ON genres.id = books.id_genre
        ORDER BY id
    `)
    console.log(books)

    let authors = await req.db.any(`
    SELECT
        *
    FROM
        authors
    `)
    console.log(authors)

    let genres = await req.db.any(`
    SELECT
        *
    FROM
        genres
    `)
    console.log(genres)
   
    res.render('books/list', { title: 'Книги', books: books, authors: authors, genres: genres})
});

router.post('/create', async function(req, res, next) {
    let books = req.body  
    await req.db.none('INSERT INTO books(label, id_author, id_genre, year_of_publication) VALUES(${label}, ${id_author}, ${id_genre}, ${year_of_publication})', books);
    res.send({msg: ''})  
    });

router.delete('/delete', async function(req, res, next) {
    let books = req.body  
    await req.db.none('DELETE FROM books WHERE id = ${id}', books);
    res.send({msg: ''})  
    });

router.put('/update', async function(req, res, next) {
    let books = req.body  
    await req.db.none('UPDATE books SET label = ${label}, id_author = ${id_author}, id_genre = ${id_genre}, year_of_publication = ${year_of_publication} WHERE id = ${id}', books);
    res.send({msg: ''})  
    });

module.exports = router;
