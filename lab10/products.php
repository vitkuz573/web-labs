<?php

global $dbh;
global $smarty;

$smarty->assign('items', $dbh->from('items'));
$smarty->display('products.tpl');