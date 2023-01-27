<?php
require "connect.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $email = $request->email;
    $password = $request->password;
    
    $sql = ("SELECT * from users where email = '$email' and password = '$password'");
    $result = mysqli_query($db, $sql);

    $nums = mysqli_num_rows($result);
    $rs = mysqli_fetch_array($result);

    if($nums != 0) {
        http_response_code(200);

    } else {
        http_response_code(202);
    }
}
?>