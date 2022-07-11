<?php

require_once 'config.php';

$dsn = 'mysql:host=' . $database['host'] . ';port=' . $database['port'] . ';dbname=' . $database['name'] . ';charset=' . $database['charset'];

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

$dbh = new PDO($dsn, $database['login'], $database['password'], $options);

if ($_POST) {
    $fname = $_POST['first_name'];
    $lname = $_POST['last_name'];
    $mname = null;
    
    if ($_POST['middle_name']) {
        $mname = $_POST['middle_name'];
    }

    if ($mname != null) {
        $abiturients = $dbh->query("SELECT * FROM abiturients WHERE first_name = '$fname' AND last_name = '$lname' AND middle_name = '$mname'");
    } else {
        $abiturients = $dbh->query("SELECT * FROM abiturients WHERE first_name = '$fname' AND last_name = '$lname' AND middle_name IS NULL");
    }
} else {
    die();
}

if ($abiturients->rowCount() > 0) {
    foreach ($abiturients as $abiturient) {
        echo 'Фамилия: ' . $abiturient['last_name'] . '<br>';
        echo 'Имя: ' . $abiturient['first_name'] . '<br>';
    
        if ($mname != null) {
            echo 'Отчество: ' . $abiturient['middle_name'] . '<br>';
        }

        echo 'Регистрационный номер: ' . $abiturient['reg_number'];
    }
} else {
    echo 'Абитуриент не найден!';
}