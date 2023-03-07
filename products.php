<?php
require "connect.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Cache-Control: public, max-age=604800");

$query = $db->query("SELECT * FROM product");

if (!$query) {
    http_response_code(500);
    die(json_encode(array("message" => "Failed to retrieve products")));
}

$products = [];

while($row = $query->fetch_assoc()) {
    $products[] = $row;
};

if (!empty($products)) {
    echo json_encode($products);
} else {
    http_response_code(404);
    die(json_encode(array("message" => "No products found")));
}

?>