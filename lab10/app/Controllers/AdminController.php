<?php

namespace App\Controllers;

use App\Models\Product;

class AdminController
{
    public function index(): void
    {
        global $smarty;

        $smarty->assign('products', Product::all());
        $smarty->display('admin.tpl');
    }
}