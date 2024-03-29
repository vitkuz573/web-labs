<?php

namespace App\Controllers;

class LogoutController
{
    public function index(): void
    {
        if ($_SESSION['user']) {
            unset($_SESSION['user']);
            unset($_SESSION['cart']);

            header('Location: login');
        }

        header('Location: products');
    }
}