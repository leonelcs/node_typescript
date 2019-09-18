const {body} = require("express-validator/check");

exports.hasName = body('name')
    .isLength({ min: 5})
    .withMessage("Name is required and the minimum length is 5 characters");