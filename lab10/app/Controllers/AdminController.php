<?php

namespace App\Controllers;

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

        $smarty->display('admin/index.tpl');
    }
}