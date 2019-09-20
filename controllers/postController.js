const Post = require("../models/post")
const validationError = require("../validations/validationHandler");


exports.index = async (req, res) => {
    try {
        const post = await Post.find().sort( {createdAt: -1} );
        res.send();
    } catch (err) {
        next(err);
    }
}

exports.show = async (req, res) => {
    try {
        const post = await Post.findOne(
            { _id: req.params.id }
        );
        res.send(post);
    } catch (err) {
        next(err);
    }
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