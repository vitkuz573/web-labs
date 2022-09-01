<?php

namespace App\Controllers;

use App\Models\Product;
use SmartyException;
use function App\Helpers\access_control;

class AdminController
{
    /**
     * @throws SmartyException
     */
    public function index(): void
    {
        access_control('login');

        global $smarty;

        $smarty->assign('products', Product::all());
        $smarty->display('admin.tpl');
    }
}