var db = require("../models");

module.exports = function(app) {
  // Get all reviews
  app.get("/api/beerReviews", function(req, res) {
    db.beerReviews.findAll({}).then(function(beerReviewsdb) {
      res.json(beerReviewsdb);
    });
  });

  // Create a new review
  app.post("/api/beerReviews", function(req, res) {
    db.beerReviews.create(req.body).then(function(beerReviewsdb) {
      res.json(beerReviewsdb);
    });
  });

  // Delete a review by id
  app.delete("/api/beerReviews/:id", function(req, res) {
    db.beerReviews.destroy({ where: { id: req.params.id } }).then(function(beerReviewsdb) {
      res.json(beerReviewsdb);
    });
  });
};
