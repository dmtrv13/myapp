var express = require('express');
var router = express.Router();
const md5 = require('md5')

router.get('/', async function(req, res, next) {

    let users = await req.db.any(`
        SELECT
            users.id AS id,
            users.login AS login,
            users.pass AS pass,
            users.fio AS fio,
            roles.label AS id_role
        FROM
            users
        INNER JOIN roles ON roles.id = users.id_role
        ORDER BY id
    `)
    console.log(users)

    let roles = await req.db.any(`
    SELECT
        *
    FROM
        roles
    `)
    console.log(roles)
    
    res.render('users/list', { title: 'Пользователи', users: users, roles: roles})
});

router.post('/create', async function(req, res, next) {
  let users = req.body  
  await req.db.none('INSERT INTO users(login, pass, fio, id_role) VALUES(${login}, md5(${pass}), ${fio}, ${id_role})', users);
  res.send({msg: ''})  
  });

router.delete('/delete', async function(req, res, next) {
  let users = req.body  
  await req.db.none('DELETE FROM users WHERE id = ${id}', users);
  res.send({msg: ''})  
  });

router.put('/update', async function(req, res, next) {
  let users = req.body  
  await req.db.none('UPDATE users SET fio = ${fio}, login = ${login}, pass = ${pass}, id_role = ${id_role} WHERE id = ${id}', users);
  res.send({msg: ''})  
  });

module.exports = router;
