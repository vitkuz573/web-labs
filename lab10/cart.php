<?php

require_once 'db.php';
require_once 'libs/Smarty.class.php';

$smarty = new Smarty();

if (isset($_COOKIE['cart']) && !empty($_COOKIE['cart'])) {
	$smarty->assign('cart_cookie', $_COOKIE['cart']);
}

$smarty->assign('dbh', $dbh);
$smarty->assign('total_cost', 0);

$smarty->display('cart.tpl');