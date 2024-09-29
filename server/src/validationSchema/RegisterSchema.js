import { check } from "express-validator";

export const RegisterSchema = [
      check('name').trim().isAlpha().withMessage("Name Should be Alphabets only"),

      check('username','username is required').exists()
      .isAlphanumeric().withMessage('username should be Alphanumeric')
      .trim().isLength({min:6, max: 32}),

      check('password','password is required').exists().isLength({min:6, max:15}).trim(),

      check('email','email is required').exists().isEmail(),
]