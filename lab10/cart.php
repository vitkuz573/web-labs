<?php

require_once 'vendor/autoload.php';
require_once 'db.php';

$smarty = new Smarty();

if (isset($_COOKIE['cart']) && !empty($_COOKIE['cart'])) {
	$smarty->assign('cart_cookie', $_COOKIE['cart']);
}

$smarty->assign('total_cost', 0);

$smarty->display('cart.tpl');