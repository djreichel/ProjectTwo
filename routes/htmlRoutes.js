var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.beerReviews.findAll({}).then(function(beerReviewsdb) {
      res.render("index", {
        msg: "Welcome!",
        beerReviews: beerReviewsdb
      });
    });
  });

  // Load review page and pass in a review by id
  app.get("/beerReviews/:id", function(req, res) {
    db.beerReviews.findOne({ where: { id: req.params.id } }).then(function(beerReviewsdb) {
      res.render("beerReviews", {
        beerReviews: beerReviewsdb
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};