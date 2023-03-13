<?php
require "connect.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

session_start();

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $email = $request->email;
    $password = $request->password;
    
    $stmt = mysqli_prepare($db, "SELECT * from users where email = ? and password = ?");
    mysqli_stmt_bind_param($stmt, 'ss', $email, $password);
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);
    $nums = mysqli_num_rows($result);
    $rs = mysqli_fetch_array($result);

    if($nums != 0) {
         // Generate random token for user
        $token = bin2hex(random_bytes(32));
        $expires_at = date('Y-m-d H:i:s', strtotime('+1 week'));
        $user_id = $rs['id'];
        
        // Insert token into user_tokens table
        $stmt = mysqli_prepare($db, "INSERT INTO user_tokens (user_id, token, expires_at) VALUES (?, ?, ?)");
        mysqli_stmt_bind_param($stmt, 'iss', $user_id, $token, $expires_at);
        if (mysqli_stmt_execute($stmt)) {

            http_response_code(200);
            $data = [
                "status" => "success",
                "user" => [
                    "id" => $rs['id'],
                    "name" => $rs['name'],
                    "email" => $rs['email']
                ],
                "token" => $token // add token to response
            ];

            echo json_encode($data);

        } else {
            http_response_code(401);
            $data = [
                "status" => "failure",
                "message" => "Invalid email or password"
            ];
            echo json_encode($data);
        }
    }   else {
        http_response_code(401);
        $data = [
            "status" => "failure",
            "message" => "Invalid email or password"
        ];
        echo json_encode($data);
    }
}
?>