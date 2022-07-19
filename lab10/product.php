<?php

global $smarty;
global $capsule;

$smarty->assign('capsule', $capsule);
$smarty->display('product.tpl');