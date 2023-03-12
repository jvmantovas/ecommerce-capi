<?php
require "connect.php";
// header("Access-Control-Allow-Origin: http://localhost:5173");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: DELETE");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

// Handle DELETE request
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = file_get_contents("php://input");
    $request = json_decode($data);

    // $product_id = $_GET['product_id'];
    // $user_id = $_GET['user_id'];
    // Get product ID from request body
    $product_id = $request->product_id;
    $user_id = $request->user_id;
    // $product_id = $_GET['id'];

    if (isset($request->delete_all) && $request->delete_all === true) {
        // Delete all items from cart
        $query = "DELETE FROM cart_items WHERE user_id = '$user_id'";
        $result = mysqli_query($db, $query);

        if (!$result) {
            http_response_code(500);
            $data = [
                "status" => "failure",
                "message" => "Erro: Não foi possível deletar os items do carrinho."
            ];
            echo json_encode($data);
            exit();
        }

        http_response_code(200);
        $data = [
            "status" => "success",
            "message" => "O carrinho foi limpo com sucesso!"
        ];
        echo json_encode($data);
        exit();
    }


    // Check if product is already in cart
    $query = "SELECT * FROM cart_items WHERE user_id = '$user_id' AND product_id = '$product_id'";
    $result = mysqli_query($db, $query);

    if (!$result) {
        http_response_code(500);
        $data = [
            "status" => "failure",
            "message" => "Erro: Não foi possível esvaziar o carrinho."
        ];
        echo json_encode($data);
        exit();
    }

    if (mysqli_num_rows($result) === 0) {
        http_response_code(404);
        $data = [
            "status" => "failure",
            "message" => "Erro: Produto não encontrado no carrinho!"
        ];
        echo json_encode($data);
        exit();
    }

    
    // Delete product from cart
    $query = "DELETE FROM cart_items WHERE user_id = '$user_id' AND product_id = '$product_id'";
    $result = mysqli_query($db, $query);

    if (!$result) {
        http_response_code(500);
        $data = [
            "status" => "failure",
            "message" => "Erro: Não foi possível remover o item do carrinho."
        ];
        echo json_encode($data);
        exit();
    }

    http_response_code(200);
    $data = [
        "status" => "success",
        "message" => "O produto foi removido com sucesso do carrinho!"
    ];
    echo json_encode($data);
    exit();
}

?>
