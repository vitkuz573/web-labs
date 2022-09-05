<?php

namespace App\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\Purchase;
use SmartyException;
use function App\Helpers\access_control;
use function App\Helpers\get_last_uri_chunk;
use function App\Helpers\set_status;
use function App\Helpers\show_error_page;

class OrderController
{
    /**
     * @throws SmartyException
     */
    public function index() : void
    {
        $itemsIds = $_SESSION['cart'] ?? null;

        if (!$itemsIds) {
            header('Location: cart');
            return;
        }

        $itemsCnt = [];

        foreach ($itemsIds as $item) {
            $postVar = 'itemCnt_' . $item;
            $itemsCnt[$item] = $_POST[$postVar] ?? null;
        }

        $products = Product::find($itemsIds)->toArray();

        $products_data = [];

        $i = 0;

        foreach ($products as $product) {
            $product['cnt'] = $itemsCnt[$product['id']] ?? 0;

            if ($product['cnt']) {
                $product['realPrice'] = $product['cnt'] * $product['price'];
            } else {
                unset($products[$i]);
            }

            $products_data[] = $product;

            $i++;
        }

        if (!$products) {
            return;
        }

        $_SESSION['saleCart'] = $products_data;

        global $smarty;

        $smarty->assign('order', $products_data);
        $smarty->assign('total_price', 0);
        $smarty->display('orders/index.tpl');
    }

    /**
     * @throws SmartyException
     */
    public function show() : void
    {
        access_control('../../login');

        $id = get_last_uri_chunk($_SERVER['REQUEST_URI']);
        $order = Order::find($id);

        global $smarty;

        if ($order == null)
        {
            show_error_page($smarty, 404);
        }

        $smarty->assign('purchases', Purchase::whereOrderId($id)->get());
        $smarty->display('orders/show.tpl');
    }

    public function store() : void
    {
        $cart = $_SESSION['saleCart'] ?? null;

        if (!$cart) {
            echo set_status('Нет товаров для заказа!');
            return;
        }

        $order = Order::create([
            'user_id' => $_SESSION['user']['id'],
            'user_ip' => $_SERVER['REMOTE_ADDR'],
        ]);

        if (!$order->id) {
            echo set_status('Ошибка создания заказа!');
            return;
        } else {
            echo set_status('Заказ успешно создан! Номер заказа: ' . $order->id, 1);
        }

        foreach ($_SESSION['saleCart'] as $item) {
            Purchase::create([
                'order_id' => $order->id,
                'product_id' => $item['id'],
                'price' => $item['price'],
                'amount' => $item['cnt'],
            ]);

            $product = Product::find($item['id']);
            $in_stock = $product->in_stock - $item['cnt'];
            $product->update([
                'in_stock' => $in_stock
            ]);
        }

        unset($_SESSION['cart']);
        unset($_SESSION['saleCart']);
    }

    /**
     * @throws SmartyException
     */
    public function destroy() : void
    {
        access_control('../../login');

        $id = get_last_uri_chunk($_SERVER['REQUEST_URI']);
        $order = Order::find($id);

        if ($order == null)
        {
            global $smarty;

            show_error_page($smarty, 404);
        }

        foreach ($order->purchases as $purchase) {
            $product = $purchase->product;
            $in_stock = $product->in_stock;

            $product->update([
                'in_stock' => $in_stock + $purchase->amount
            ]);
        }

        $order->delete();
    }
}