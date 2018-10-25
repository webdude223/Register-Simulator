<?php


// This file contains the database access information.
// This file also establishes a connection to MySQL
// selects the database, and sets the encoding.
// Set the database access information as constants:


DEFINE ("DB_USER", "ben");
DEFINE ("DB_PASSWORD", "AxeuuHhN3IRji2aj");
DEFINE ("DB_HOST", "localhost");
DEFINE ("DB_NAME", "ALDI");

//OhW9E36aj8BuZ3bX

// Make the connection:

global $my_db;
$my_db = @mysqli_connect ( DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) OR die
(' Could not connect to MySQL: ' . mysqli_connect_error());

// Set the encoding...

mysqli_set_charset( $my_db, 'utf8');

//echo "DB Login: PASSED<br/><br/>";
