<?php

namespace App\Controllers;

class ProductController
{
    public function index()
    {
        require_once 'products.php';
    }

    public function show()
    {
        require_once 'product.php';
    }
}