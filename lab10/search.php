<?php

require_once 'db.php';

function search_autocomplete(): string
{
    $result = [];

    foreach (DB::getAll("SELECT name, page FROM items WHERE name LIKE '%{$_GET['term']}%'") as $item) {
        array_push($result, [
            'label' => $item['name'],
            'value' => $item['page']
        ]);
    }

    return json_encode($result);
}

if (!empty($_GET['term'])) {
    exit(search_autocomplete());
}