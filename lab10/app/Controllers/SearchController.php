<?php

namespace App\Controllers;

use App\Models\Product;

class SearchController
{
    public function search()
    {
        if (isset($_GET['term'])) {
            echo json_encode(Product::where('name', 'LIKE', '%' . $_GET['term'] . '%')->get(['id AS value', 'name AS label'])->toArray());
        } else {
            die();
        }
    }
}