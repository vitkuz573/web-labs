<?php

use App\Models\Product;

global $smarty;

$smarty->assign('products', Product::all());
$smarty->display('products.tpl');