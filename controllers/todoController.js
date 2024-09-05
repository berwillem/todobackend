const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      count: todos.length,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
