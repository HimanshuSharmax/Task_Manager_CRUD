import { check } from "express-validator";

export const LoginSchema = [
      check('username','username is required!').exists()
      .isAlphanumeric().withMessage('username should be Alphanumeric')
      .trim().isLength({min:6, max: 100}),

      check('password','password is required').exists().isLength({min:6, max:100}).trim(),

]