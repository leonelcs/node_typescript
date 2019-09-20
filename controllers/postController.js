const Post = require("../models/post")
const validationError = require("../validations/validationHandler");


exports.index = (req, res) => {
    res.send({message: "Hi"});
}

exports.store = async (req, res, next) => {
    try {
        validationError(req);
        let post = new Post();
        post.description = req.body.description;
        post.image = req.file.filename;

        post = await post.save();

        res.send(post);
    } catch (err) {
        next(err);
    }

}