<?php

require("../DB/dblogin_final.php");

//build query
 $q = "SELECT * FROM Food;";

 $r = @mysqli_query($my_db, $q); // Run the query.

 if ($r) { // If results came back
     echo "<br/>Content load: PASSED<br/>";

     while($row = $r->fetch_assoc()) {
       echo "<br> Food: ". $row["Description"] . " --- UPC Short Code: " .  $row["Smart_Code"];
        $i++;
     }//end while */
  } else { //else -- could not access data base or no results back
   // Public message:

     echo "<br/>Content load: FAILED<br/>";
     // Debugging message:

     echo "<p>" . mysqli_error($my_db) . "<br /><br /> Query: " . $q . '</ p >';
 }

 unset($q);

 echo "<br/> begin object test...<br/>";
  $myObj = new \stdClass();
  $myObj->name = "John";
  $myObj->age = 30;
  $myObj->city = "New York";

  $myJSON = json_encode($myObj);

  echo $myJSON;
