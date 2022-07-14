<?php

use Envms\FluentPDO\Query;
use Dotenv\Dotenv;

require_once 'vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$dbh = new Query(new PDO('mysql:dbname=' . $_ENV['DB_NAME'], $_ENV['DB_USER'], $_ENV['DB_PASSWORD']));

$smarty = new Smarty();
$smarty->assign('items', $dbh->from('items'));
$smarty->display('index.tpl');