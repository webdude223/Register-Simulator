<?php

//echo "hello world! PHP Folder";

//Getting data from database
require("../DB/dblogin_final.php");

//build query
 $q = "SELECT * FROM Food;";

 $r = @mysqli_query($my_db, $q); // Run the query.

//store into array
 $data = array();
while($row = mysqli_fetch_assoc($r)){
  $data[] = $row;
}

unset($q);

//returning response in JSON format
echo json_encode($data);



  ?>
