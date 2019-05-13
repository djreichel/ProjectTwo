module.exports = function(sequelize, DataTypes) {
  var beerReviews = sequelize.define("beerReviews", {
    author_name: DataTypes.STRING,
    beer_name: DataTypes.STRING,
    beer_type: DataTypes.STRING,
    beer_rating: DataTypes.INTEGER,
    beer_review: DataTypes.TEXT,
    review_date: DataTypes.DATE
  });
  return beerReviews;
};
