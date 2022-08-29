<?php

namespace App\Controllers;

class CartController
{
    public function index(): void
    {
        global $smarty;

        if (isset($_COOKIE['cart']) && !empty($_COOKIE['cart'])) {
            $smarty->assign('cart_cookie', $_COOKIE['cart']);
        }

        $smarty->assign('total_price', 0);
        $smarty->display('cart/index.tpl');
    }
}