<?php

namespace App\Controllers;

use App\Models\Product;
use function App\Helpers\is_admin;

class AdminController
{
    public function index(): void
    {
        if (!$_SESSION['user'] || !is_admin($_SESSION['user'])) {
            header('Location: login');
        }

        global $smarty;

        $smarty->assign('products', Product::all());
        $smarty->display('admin.tpl');
    }
}