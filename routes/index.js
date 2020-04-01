var express = require('express');
var router = express.Router();

// Home page
router.get('/', function(req, res, next) {
	var database = req.mysql_connection;
	var data = "";
	var date = "";
	var searchDate = "";
	date = req.query.date;
	if (date){
		searchDate = 'WHERE date = ?'
	}

	database.query('SELECT * FROM todolist ' + searchDate, date, function(err, rows){
		if (err){
			console.log(err);
		}
		data = rows;
		
		// Use index.ejs to render client
		res.render('index', { title: 'To Do - List', data: data});
	});
});

// Go to add page
router.get('/add',function(req, res, next){

	// Use todoAdd.ejs to render client
	res.render('todoAdd', { title: 'Add Something To Do'});
});

// Handle todoAdd post
router.post('/todoAdd',function(req, res ,next){
	var database = req.mysql_connection;
	var sql = {
		date: req.body.date,
		time: req.body.time,
		todo: req.body.todo
	};

	database.query('INSERT INTO todolist SET ?', sql, function(err, rows){
		if (err){
			console.log(err);
		}
		res.setHeader('Content-Type', 'application/json');
		res.redirect('/');
	});
});

// Go to edit page
router.get('/todoEdit', function(req, res, next){
	var id = req.query.id;
	var database = req.mysql_connection;
	var data = "";

	database.query('SELECT * FROM todolist WHERE id = ?', id, function(err, rows){
		if (err){
			console.log(err);
		}
		data = rows;

		// Use todoEdit.ejs to render client
		res.render('todoEdit', {title: 'Edit TodoList', data: data});
	});
});

// Handle todoEdit post
router.post('/todoEdit',function(req, res, next){
	var id = req.body.id;
	var database = req.mysql_connection;
	var sql = {
		date: req.body.date,
		time: req.body.time,
		todo: req.body.todo
	};

	database.query('UPDATE todolist SET ? WHERE id = ?', [sql, id], function(err, rows){
		if (err){
			console.log(err);
		}
		res.setHeader('Content-Type', 'application/json');
		res.redirect('/');
	});
});

// Go to delete pade
router.get('/todoDelete',function(req, res, next){
	var id = req.query.id;
	var database = req.mysql_connection;

	database.query('DELETE FROM todolist WHERE id = ?', id, function(err, rows){
		if (err){
			console.log(err);
		}
		res.redirect('/');
	});
})
module.exports = router;
