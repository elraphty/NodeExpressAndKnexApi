const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('./db/knex');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/todos', (req, res) => {
    // knex.raw('select * from todos')
    // .then((data) => {
    //     res.send(data);
    // });
    knex.select()
        .from('todos')
        .then(function(todos) {
            res.send(todos);
        });
});

app.get('/todos:id', (req, res) => {
    knex.select()
        .from('todos')
        .where('id', req.params.id)
        .then(function(todos) {
            res.send(todos);
        });
});

app.post('/todos', (req, res) => {
    knex('todos').insert({
        title: req.body.title,
        user_id: req.body.user_id
    })
    .then(() => {
        knex.select().from('todos').then(function(todos) {
            res.send(todos);
        })
    });
});

app.put('/todos/:id', (req, res) => {
    knex('todos')
        .where('id', req.params.id)
        .update({
            title: req.body.title,
            completed: req.body.completed
        })
        .then( ( )=> {
            knex.select()
                .from('todos')
                .then(function(todos) {
                    res.send(todos);
                });
        })
});


app.listen(PORT, () => {
    console.log(`App running ${PORT}`);
});