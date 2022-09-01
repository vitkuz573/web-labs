<?php

namespace App\Controllers;

use App\Models\Product;

class SearchController
{
    public function index(): void
    {
        $term = filter_var(trim($_GET['term']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        if (isset($term) && $term) {
            echo json_encode(Product::where('name', 'LIKE', '%' . $_GET['term'] . '%')->get());
        } else {
            die();
        }
    }
}