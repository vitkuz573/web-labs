<?php

namespace App\Controllers;

use App\Models\Product;

class SearchController
{
    public function index(): void
    {
        if (isset($_GET['term']) && !empty($_GET['term'])) {
            echo json_encode(Product::where('name', 'LIKE', '%' . $_GET['term'] . '%')->get());
        } else {
            die();
        }
    }
}