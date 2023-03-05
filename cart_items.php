<?php

require "connect.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['user_id'])) {
    $user_id = $_GET['user_id'];
    // rest of the code
    } else {
    http_response_code(400);
    $data = [
        "status" => "failure",
        "message" => "Missing user_id parameter"
    ];
    echo json_encode($data);
    exit();
    }

    // $query = "SELECT cart_items.id, cart_items.quantity, products.id as product_id, products.name, products.price FROM cart_items INNER JOIN products ON cart_items.product_id = products.id WHERE cart_items.user_id = ?";
    $query = "SELECT cart_items.id, cart_items.quantity, product.id as product_id, product.artist, product.title, product.price FROM cart_items INNER JOIN product ON cart_items.product_id = product.id WHERE cart_items.user_id = ?";
    $stmt = $db->prepare($query);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

     if ($result->num_rows === 0) {
        http_response_code(404);
        $data = [
            "status" => "failure",
            "message" => "O carrinho está vazio"
        ];
        echo json_encode($data);
        exit();
    }

    $cart_items = array();
    while ($row = $result->fetch_assoc()) {
        $cart_item = [
            "id" => $row['id'],
            "product_id" => $row['product_id'],
            "name" => $row['artist'] . ' - ' . $row['title'],
            "price" => $row['price'],
            "quantity" => $row['quantity']
        ];
        array_push($cart_items, $cart_item);
    }

    http_response_code(200);
    echo json_encode($cart_items);
    exit();
}

?>