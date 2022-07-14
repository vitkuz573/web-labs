<?php

require_once 'db.php';
require_once 'libs/Smarty.class.php';

$smarty = new Smarty();

$smarty->assign('dbh', $dbh);

$smarty->display('index.tpl');