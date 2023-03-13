<?php

require "connect.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit();
}

// // Get user's ID
// $user_id = $rs['user_id'];
// echo $user_id;

// Check if product ID is provided in the request body
$postdata = file_get_contents("php://input");
// var_dump($postdata);
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    if (!isset($request->product_id)) {
        http_response_code(400);
        die(json_encode(array("message" => "No product id read")));
    }
    $user_id = $request->user_id;
    $quantity = $request->quantity;
    $product_id = $request->product_id;
    $token = $request->token;

    $stmt = mysqli_prepare($db, "SELECT * from user_tokens where token = ? AND expires_at > NOW()");
    mysqli_stmt_bind_param($stmt, 's', $token);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $rs = mysqli_fetch_array($result);
    if (!$rs) {
        http_response_code(401);
        $data = [
            "status" => "failure",
            "message" => "Invalid token"
        ];
        echo json_encode($data);
        exit();
    }

    // Check if product ID is valid
    $stmt = mysqli_prepare($db, "SELECT * from product where id = ?");
    mysqli_stmt_bind_param($stmt, 'i', $product_id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $rs = mysqli_fetch_array($result);
    if (!$rs) {
        http_response_code(400);
        die(json_encode(array("message" => "Invalid product ID")));
    }

    // Check if item already exists in user's cart
    $stmt = mysqli_prepare($db, "SELECT * from cart_items where user_id = ? and product_id = ?");
    mysqli_stmt_bind_param($stmt, 'ii', $user_id, $product_id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    // $rs = mysqli_fetch_array($result);
    // if ($rs) {
    //     http_response_code(400);
    //     die(json_encode(array("message" => "Item already exists in cart")));
    // }

    if (mysqli_num_rows($result) > 0) {
        // Update cart item quantity
        $cart_item = mysqli_fetch_array($result);
        $new_quantity = $cart_item['quantity'] + $quantity;
        $stmt = mysqli_prepare($db, "UPDATE cart_items SET quantity = ? WHERE id = ?");
        mysqli_stmt_bind_param($stmt, 'ii', $new_quantity, $cart_item['id']);
        mysqli_stmt_execute($stmt);

        if (mysqli_affected_rows($db) > 0) {
            http_response_code(200);
            $data = [
                "status" => "success",
                "message" => "Quantidade de produtos atualizada no carrinho!"
            ];
            echo json_encode($data);
            exit();
        } else {
            http_response_code(500);
            $data = [
                "status" => "failure",
                "message" => "Erro ao atualizar a quantidade de produtos no carrinho!"
            ];
            echo json_encode($data);
            exit();
        }
    } else {

    // Add item to user's cart
    $stmt = mysqli_prepare($db, "INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)");
    mysqli_stmt_bind_param($stmt, 'iii', $user_id, $product_id, $quantity);
    if (mysqli_stmt_execute($stmt)) {

        http_response_code(201);
        die(json_encode(array("message" => "Item adicionado ao carrinho!")));
    } else {
        http_response_code(500);
        die(json_encode(array("message" => "Failed to add item to cart")));
    }
} }else {
    http_response_code(400);
    die(json_encode(array("message" => "Product ID is required", "postdata" =>$postdata)));
}
?>