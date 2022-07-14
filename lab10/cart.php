<?php

use Envms\FluentPDO\Query;
use Dotenv\Dotenv;

require_once 'vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$smarty = new Smarty();

if (isset($_COOKIE['cart']) && !empty($_COOKIE['cart'])) {
	$smarty->assign('cart_cookie', $_COOKIE['cart']);
}

$smarty->assign('dbh', new Query(new PDO('mysql:dbname=' . $_ENV['DB_NAME'], $_ENV['DB_USER'], $_ENV['DB_PASSWORD'])));
$smarty->assign('total_cost', 0);
$smarty->display('cart.tpl');