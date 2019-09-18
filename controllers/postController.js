const validationError = require("../validations/validationHandler");

exports.index = (req, res) => {
    res.send({message: "Hi"});
}

exports.store = (req, res, next) => {
    try {
        validationError(req);
        res.send({ message: "The name is " + req.body.name})
    } catch (err) {
        next(err);
    }

}