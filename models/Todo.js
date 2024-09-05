const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    priority: {
      type: String,
      required: true,
      enum: ["low", "medium", "high"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    deadline: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
