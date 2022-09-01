<?php

namespace App\Controllers;

use App\Models\Product;
use function App\Helpers\get_last_uri_chunk;

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
        $id = get_last_uri_chunk($_SERVER['REQUEST_URI']);

        $resData = [];

        if (isset($_SESSION['cart']) && !in_array($id, $_SESSION['cart'])) {
            $_SESSION['cart'][] = $id;
            $resData['success'] = 1;
            $resData['cntItems'] = count($_SESSION['cart']);
        } else {
            $resData['success'] = 0;
        }

        echo json_encode($resData);
    }

    public function destroy() : void
    {
        $id = get_last_uri_chunk($_SERVER['REQUEST_URI']);

        $resData = [];
        $key = array_search($id, $_SESSION['cart']);

        if ($key !== false)
        {
            unset($_SESSION['cart'][$key]);
            $resData['success'] = 1;
            $resData['cntItems'] = count($_SESSION['cart']);
        } else {
            $resData['success'] = 0;
        }

        echo json_encode($resData);
    }
}