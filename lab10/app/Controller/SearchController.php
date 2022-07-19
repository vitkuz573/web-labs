<?php

namespace App\Controller;

use App\Models\Product;

class SearchController
{
    public function search()
    {
        $result = [];

        if (isset($_GET['term'])) {
            foreach (Product::select(['id', 'name'])->where('name', 'like', "%{$_GET['term']}%")->get() as $item) {
                array_push($result, [
                    'value' => $item->id,
                    'label' => $item->name
                ]);
            }
        } else {
            die();
        }

        echo json_encode($result);
    }
}