<?php

namespace App\Controller;

class SearchController
{
    public function search()
    {
        global $dbh;

        $result = [];

        if (isset($_GET['term'])) {
            foreach ($dbh->from('items')->select(['id', 'name'])->where("name LIKE '%{$_GET['term']}%'") as $item) {
                array_push($result, [
                    'value' => $item['id'],
                    'label' => $item['name']
                ]);
            }
        } else {
            die();
        }

        echo json_encode($result);
    }
}