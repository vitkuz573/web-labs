<?php

global $smarty;
global $capsule;

$smarty->assign('items', $capsule->table('items')->get());
$smarty->display('products.tpl');