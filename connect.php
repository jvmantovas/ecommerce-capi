<?php
$servername = "localhost";
$username = "root";
$password = "";
$database= "capi";
 
$db = mysqli_connect($servername, $username, $password, $database);

if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}
echo "Connected successfully";
?>