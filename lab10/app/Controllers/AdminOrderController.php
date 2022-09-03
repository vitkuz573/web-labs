<?php

namespace App\Controllers;

use App\Models\Order;
use SmartyException;
use function App\Helpers\access_control;

class AdminOrderController
{
    /**
     * @throws SmartyException
     */
    public function index() : void
    {
        access_control('../login');

        global $smarty;

        $smarty->assign('orders', Order::all());
        $smarty->display('admin/orders/index.tpl');
    }
}