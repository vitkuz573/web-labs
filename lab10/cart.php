<?php

global $smarty;
global $capsule;

if (isset($_COOKIE['cart']) && !empty($_COOKIE['cart'])) {
	$smarty->assign('cart_cookie', $_COOKIE['cart']);
}

$smarty->assign('capsule', $capsule);
$smarty->assign('total_price', 0);
$smarty->display('cart.tpl');