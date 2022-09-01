<?php

namespace App\Controllers;

use App\Models\Product;

class CartController
{
    public function index(): void
    {
        global $smarty;

        if (isset($_SESSION['cart']) && !empty($_SESSION['cart'])) {
            $smarty->assign('cart_cookie', $_SESSION['cart']);
        }

        $smarty->assign('products', Product::find($_SESSION['cart']));
        $smarty->assign('total_price', 0);
        $smarty->display('cart/index.tpl');
    }

    public function store(): void
    {
        $uri_chunks = explode('/', $_SERVER['REQUEST_URI']);
        $id = array_pop($uri_chunks);

        $resData = [];

        if (isset($_SESSION['cart']) && !in_array($id, $_SESSION['cart'])) {
            $_SESSION['cart'][] = $id;
            $resData['cntItems'] = count($_SESSION['cart']);
            $resData['success'] = 1;
        } else {
            $resData['success'] = 0;
        }

        echo json_encode($resData);
    }

    public function destroy() : void
    {
        $uri_chunks = explode('/', $_SERVER['REQUEST_URI']);
        $id = array_pop($uri_chunks);

        $resData = [];
        $key = array_search($id, $_SESSION['cart']);

        if ($key !== false)
        {
            unset($_SESSION['cart'][$key]);
            $resData['cntItems'] = count($_SESSION['cart']);
            $resData['success'] = 1;
        } else {
            $resData['success'] = 0;
        }

        echo json_encode($resData);
    }
}