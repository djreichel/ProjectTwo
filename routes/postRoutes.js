var db = require("../models");

module.exports = function (app) {

    //GET route for getting all of the posts 
    app.get("/api/posts", function (req, res) {
        var query = {};
        if (req.query.author_id) {
            query.AuthorId = req.query.author_id;
        }

        db.Post.findAll({
            where: query,
            include: [db.Author]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    //get route for retrieving a single post
    app.get("api/posts/:id", function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Author]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    //post route for saving a new post
    app.post("/api/posts", function (req, res) {
        db.Post.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    //delete route for deleting posts
    app.delete("/api/posts/:id", function (req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    //put route for updating posts
    app.put("/api/posts", function (req, res) {
        db.Post.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });
};