DROP DATABASE IF EXISTS reservations;

CREATE DATABASE reservations;

USE reservations;


CREATE TABLE properties (
  property_id INT(10) NOT NULL AUTO_INCREMENT,
  property_name VARCHAR(255) NOT NULL,
  price_per_night VARCHAR(255) NOT NULL,
  max_occupants VARCHAR(255) NOT NULL,
  cleaning_fee VARCHAR(255) NOT NULL,
  occupancy_tax_fee VARCHAR(255) NOT NULL,
  PRIMARY KEY (property_id)
);

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
  booking_id VARCHAR(100) NOT NULL,
  property_id INT(10) NOT NULL,
  starting_date VARCHAR(255) NOT NULL,
  ending_date VARCHAR(255) NOT NULL,
  adults INT(2) NOT NULL,
  children INT(2) NOT NULL,
  infants INT(2) NOT NULL,
  total_price VARCHAR(255) NOT NULL,
  PRIMARY KEY (booking_id),
  FOREIGN KEY (property_id)
    REFERENCES properties(property_id)
);

DROP TABLE IF EXISTS blackout_days;

CREATE TABLE blackout_days (
  blackout_id VARCHAR(100) NOT NULL,
  property_id INT(10) NOT NULL,
  day_blacked_out VARCHAR(100) NOT NULL,
  PRIMARY KEY (blackout_id),
  FOREIGN KEY (property_id)
    REFERENCES properties(property_id)
);