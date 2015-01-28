<?php
// 啟動 session
// http://tw1.php.net/manual/zh/function.session-start.php
session_start();
include 'config/db_connect.php';

//設置頁面標題
// $page_title="Products";

// to prevent undefined index notice
$action = isset($_GET['action']) ? $_GET['action'] : "";
$product_id = isset($_GET['product_id']) ? $_GET['product_id'] : "1";
$name = isset($_GET['name']) ? $_GET['name'] : "";
$store_number = isset($_GET['store_number']) ? $_GET['store_number'] : "";
// if($action=='added'){
//     echo "<div class='alert alert-info'>";
//     echo "<strong>{$name}</strong> was added to your cart!";
//     echo "</div>";
// }

// if($action=='exists'){
//     echo "<div class='alert alert-info'>";
//     echo "<strong>{$name}</strong> already exists in your cart!";
//     echo "</div>";
// }

$query = 'SELECT id, name, price, img FROM products WHERE store_number = "'.$store_number.'" ORDER BY name';

$stmt = $con->prepare( $query );
$stmt->execute();
$num = $stmt->rowCount();
$get_item_str = "";

if($num>0){
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $get_item_str = $get_item_str . "{'id':'{$id}', 'name':'{$name}', 'price':{$price}, 'img':'{$img}' },";
    }
    $get_item_str = rtrim($get_item_str,',');
    $get_item_str = str_replace("'",'"',$get_item_str);
    echo '{"status":"success", "item":['.$get_item_str.']}';

}

// tell the user if there's no products in the database
else{
    echo "No products found.";
}

?>