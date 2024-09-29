import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helpers.js";
import { StatusCode } from "../utils/constant.js";
import Todo from "../models/Todo.js";

export const UpdateTodo = async (req, res) => {
    // Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json(
            jsonGenerate(
                StatusCode.VALIDATION_ERROR, 
                "Validation error", 
                errors.mapped()
            )
        );
    }

    const { todo_id } = req.params; // Assuming todoId is passed as a URL param
    const { title, desc } = req.body; // The fields to update

    try {
        // Find the todo item by id and make sure it belongs to the current user
        const todo = await Todo.findOneAndUpdate(
            { _id: todo_id, userId: req.userId }, // Ensure the todo belongs to the current user
            { title, desc }, // The fields to update
            { new: true } // Return the updated document
        );

        if (!todo) {
            return res.json(
                jsonGenerate(
                    StatusCode.UNPROCESSABLE_ENTITY, 
                    "Todo not found or you are not authorized to update it"
                )
            );
        }

        return res.json(
            jsonGenerate(
                StatusCode.SUCCESS, 
                "Todo updated successfully", 
                todo
            )
        );
    } catch (error) {
        return res.json(
            jsonGenerate(
                StatusCode.UNPROCESSABLE_ENTITY, 
                "An error occurred while updating the todo", 
                error
            )
        );
    }
};
