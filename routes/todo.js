const router = require("express").Router();
const todocontrollers = require("../controllers/todoController");

router.get("/", todocontrollers.getTodos);
router.get("/:id", todocontrollers.getTodoById);
router.post("/", todocontrollers.createTodo);
router.put("/:id", todocontrollers.updateTodo);
router.delete("/:id", todocontrollers.deleteTodo);

module.exports = router;
