<?php
$servername = "db4free.net:3306";
$username = "capirecords";
$password = "capi654654";
$database= "capivararecords";
 
$db = mysqli_connect($servername, $username, $password, $database);

if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}
echo "Connected successfully";
?>