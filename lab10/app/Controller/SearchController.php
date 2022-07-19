<?php

namespace App\Controller;

class SearchController
{
    public function search()
    {
        global $capsule;

        $result = [];

        if (isset($_GET['term'])) {
            foreach ($capsule->table('items')->select(['id', 'name'])->where('name', 'LIKE', "%{$_GET['term']}%")->get() as $item) {
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