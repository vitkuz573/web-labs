<?php

use Envms\FluentPDO\Query;

require_once 'vendor/autoload.php';

$dbh = new Query(new PDO('mysql:dbname=lab10', 'root', 'root'));

$smarty = new Smarty();
$smarty->assign('items', $dbh->from('items'));
$smarty->display('index.tpl');