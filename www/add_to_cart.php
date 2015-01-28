
<?php
session_start();

// get the product id
$id = isset($_GET['id']) ? $_GET['id'] : "";
$name = isset($_GET['name']) ? $_GET['name'] : "";
$quantity = isset($_GET['quantity']) ? $_GET['quantity'] : "";

/*
 * check if the 'cart' session array was created
 * if it is NOT, create the 'cart' session array
 */
if(!isset($_SESSION['cart_items'])){
    $_SESSION['cart_items'] = array();
}

// check if the item is in the array, if it is, do not add
// http://tw1.php.net/manual/zh/function.array-key-exists.php
if(array_key_exists($id, $_SESSION['cart_items'])){
	echo '已經加入過囉';
    // redirect to product list and tell the user it was added to cart
    // header('Location: products.php?action=exists&id' . $id . '&name=' . $name);
}

// else, add the item to the array
else{
    $_SESSION['cart_items'][$id]=$name;
    $output = '將'.$name.'加入購物袋中';
    echo nl2br($output);

    // redirect to product list and tell the user it was added to cart
    // header('Location: products.php?action=added&id' . $id . '&name=' . $name);
}
?>
