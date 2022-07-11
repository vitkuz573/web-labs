<?php

require_once 'config.php';

$dsn = 'mysql:host=' . $database['host'] . ';port=' . $database['port'] . ';dbname=' . $database['name'] . ';charset=' . $database['charset'];

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

$dbh = new PDO($dsn, $database['login'], $database['password'], $options);