const {body} = require("express-validator");

exports.hasDescription = body('description')
    .isLength({ min: 5})
    .withMessage("Name is required and the minimum length is 5 characters");