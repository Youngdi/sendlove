<?php
session_start();


include 'config/db_connect.php';

// $action = isset($_GET['action']) ? $_GET['action'] : "";
// $name = isset($_GET['name']) ? $_GET['name'] : "";

// if($action=='removed'){
//     echo "<div class='alert alert-info'>";
//     echo "<strong>{$name}</strong> was removed from your cart!";
//     echo "</div>";
// }

// else if($action=='quantity_updated'){
//     echo "<div class='alert alert-info'>";
//     echo "<strong>{$name}</strong> quantity was updated!";
//     echo "</div>";
// }

$quantity_updated = isset($_GET['quantity']) ? $_GET['quantity'] : "";
echo $quantity_updated;
    // get the product ids
    $ids = "";
    foreach($_SESSION['cart_items'] as $id=>$value){
        $ids = $ids . $id . ",";
    }
    // remove the last comma
    $ids = rtrim($ids, ',');
    $ids = ltrim($ids, ',');
    if ($ids != ""){
    $query = "SELECT id, name, price, img, quantity FROM products WHERE id IN ({$ids}) ORDER BY name";
    $stmt = $con->prepare( $query );
    $stmt->execute();
    $total_price=0;
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $total_price += $price;
        $get_item_str = $get_item_str . "{'quantity':{$quantity} ,'id':'{$id}', 'name':'{$name}', 'price':{$price}, 'img':'{$img}' },";
    }
    $get_item_str = rtrim($get_item_str,',');
    $get_item_str = str_replace("'",'"',$get_item_str);
    echo '{"status":"success","total_price":'.$total_price.', "item":['.$get_item_str.']}';
    }
else{
    echo "<center>沒有商品在你的購物籃喔！</center>";
}
?>