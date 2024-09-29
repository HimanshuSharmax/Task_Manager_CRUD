import { validationResult } from "express-validator";
import Todo from "../models/Todo.js";
import { StatusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helpers.js";

export const MarkTodo = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.json(
      jsonGenerate(
        StatusCode.VALIDATION_ERROR,
        "todo id is requied",
        error.mapped()
      )
    );
  }

  try {
    const todo = await Todo.findOneAndUpdate(
      {
        _id: req.body.todo_id,
        userId: req.userId,
      },
      [
        {
          $set: {
            isCompleted: {
              $eq: [false, "$isCompleted"],
            },
          },
        },
      ]
    );

    if (todo) {
      return res.json(jsonGenerate(StatusCode.SUCCESS, "Status Updated", todo));
    }
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY, "Could Not Update", null)
    );
  }
};