<?php

use Envms\FluentPDO\Query;

require_once 'vendor/autoload.php';

function search_autocomplete(): string
{
    $dbh = new Query(new PDO('mysql:dbname=lab10', 'root', 'root'));

    $result = [];

    foreach ($dbh->from('items')->select(['name', 'page'])->where("name LIKE '%{$_GET['term']}%'") as $item) {
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