<?php
require "connect.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $name = $request->name;
    $email = $request->email;
    $password = $request->password;

    $sql_e = "SELECT * FROM users WHERE email='$email'";

    $sql = "INSERT INTO users (name, email, password) VALUES('$name', '$email', '$password')";

    $res_e = mysqli_query($db, $sql_e);

    if(mysqli_num_rows($res_e) > 0) {
        http_response_code(202);
    } else {
        if(mysqli_query($db, $sql)) {
        http_response_code(200);
    } else {
        http_response_code(202);
    }}
}
?>