const express = require('express');
const router = express.Router();
const Todo = require('../todo.model');

router.get('/', async (req, res) => {
     try {
         const todos = await Todo.find();
         if(!todos){
            res.json([]);
         }
         res.json(todos);
     } catch (e) {
        console.log(e);
     }
});

router.get('/:id',async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            res.send(null);
        }
        res.json(todo);
    } catch (e) {
        res.status(400).send(null);
    }
});

router.post('/add', async (req, res) => {
    try {
        let todo = new Todo(req.body);
        await todo.save();
        res.status(200).json({'todo': 'todo added successfully'});
    } catch (e) {
        res.status(400).send('Adding new todo failed');
    }
});


router.patch('/update/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true});
        res.json(todo);
    } catch (e) {
        res.status(400).send('Update not possible')
    }
});



module.exports = router;