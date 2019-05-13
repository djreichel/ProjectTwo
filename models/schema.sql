DROP DATABASE IF EXISTS beerReviewsdb;
CREATE DATABASE beerReviewsdb;
USE beerReviewsdb;

CREATE TABLE beers(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  author_name VARCHAR(255) NOT NULL,
  beer_name VARCHAR(150) NOT NULL,
  beer_type VARCHAR(50),
  beer_rating INTEGER(11),
  beer_review VARCHAR(500) NOT NULL,
  review_date DATE NOT NULL,
  PRIMARY KEY (id)
);
