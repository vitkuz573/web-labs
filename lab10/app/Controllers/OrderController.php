<?php

namespace App\Controllers;

use App\Models\Order;
use App\Models\Product;
use SmartyException;
use function App\Helpers\access_control;
use function App\Helpers\get_last_uri_chunk;
use function App\Helpers\show_error_page;

class OrderController
{
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

        $smarty->assign('items', json_decode($order['items']));
        $smarty->display('orders/show.tpl');
    }

    public function store() : void
    {
        Order::create([
            'user_id' => $_SESSION['user']['id'],
            'items' => json_encode(array_combine($_SESSION['cart'], array_reverse(json_decode($_POST['quantities'])))),
        ]);
    }

    /**
     * @throws SmartyException
     */
    public function update() : void
    {
        access_control('../../login');

        $id = get_last_uri_chunk($_SERVER['REQUEST_URI']);
        $order = Order::find($id);

        if ($order == null)
        {
            global $smarty;

            show_error_page($smarty, 404);
        }

        header('Location: ../admin/orders');
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

        $order->delete();
    }
}