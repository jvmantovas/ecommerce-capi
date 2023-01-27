<?php
require "connect.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$query = $db->query("SELECT * FROM product");

$products = [];

while($row = $query->fetch_assoc()) {
    $products[] = $row;
};

echo json_encode($products);

?>