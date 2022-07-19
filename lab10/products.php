<?php

use App\Models\Product;

global $smarty;

$smarty->assign('items', Product::all());
$smarty->display('products.tpl');