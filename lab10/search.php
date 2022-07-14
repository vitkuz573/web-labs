<?php

use Envms\FluentPDO\Query;
use Dotenv\Dotenv;

require_once 'vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

function search_autocomplete(): string
{
    $dbh = new Query(new PDO('mysql:dbname=' . $_ENV['DB_NAME'], $_ENV['DB_USER'], $_ENV['DB_PASSWORD']));

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