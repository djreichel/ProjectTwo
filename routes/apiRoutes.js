var db = require("../models");

module.exports = function(app) {
  // Get all examples - get filename from crystal
  app.get("/api/beers", function(req, res) { 
    db.beerReviews.findAll({}).then(function(beerReviewsdb) {
      res.json(beerReviewsdb);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/beers/category/:category", function(req, res) {
    db.beerReviews.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(beerReviewsdb) {
        res.json(beerReviewsdb);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/beers/:id", function(req, res) {
    db.beerReviews.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(beerReviewsdb) {
        res.json(beerReviewsdb);
      });
  });

  // // Create a new post
  // app.post("/api/beerReview", function(req, res) {
  //   db.beerReviews.create(req.body).then(function(beerReviewsdb) {
  //     res.json(beerReviewsdb);
  //   });
  // });

    // POST route for saving a new post
    app.post("/api/beers", function(req, res) {
      console.log(req.body);
      db.beerReviews.create({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category
      })
        .then(function(beerReviewsdb) {
          res.json(beerReviewsdb);
        });
    });

    // PUT route for updating posts
    app.put("/api/beers", function(req, res) {
      db.beerReviews.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
        .then(function(beerReviewsdb) {
          res.json(beerReviewsdb);
        });
    });

  // Delete a post by id
  app.delete("/api/beers/:id", function(req, res) {
    db.beerReviews.destroy(
      { 
      where: { 
        id: req.params.id 
      } 
    })
    .then(function(beerReviewsdb) {
      res.json(beerReviewsdb);
    });
  });
};
