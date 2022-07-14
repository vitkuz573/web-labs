<?php

require_once 'db.php';
require_once 'libs/Smarty.class.php';

$smarty = new Smarty();

$total_cost = 0;

$smarty->assign('dbh', $dbh);

if (isset($_COOKIE['cart']) && !empty($_COOKIE['cart'])) {
	$smarty->assign('cart_cookie', $_COOKIE['cart']);
}

$smarty->assign('total_cost', $total_cost);

$smarty->display('cart.tpl');