<?php

global $dbh;
global $smarty;

$smarty->assign('dbh', $dbh);
$smarty->display('product.tpl');