<?php

use Envms\FluentPDO\Query;

require_once 'vendor/autoload.php';

$smarty = new Smarty();

if (isset($_COOKIE['cart']) && !empty($_COOKIE['cart'])) {
	$smarty->assign('cart_cookie', $_COOKIE['cart']);
}

$smarty->assign('dbh', new Query(new PDO('mysql:dbname=lab10', 'root', 'root')));
$smarty->assign('total_cost', 0);
$smarty->display('cart.tpl');