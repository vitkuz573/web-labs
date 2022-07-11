<?php

require_once 'db.php';

$items = $dbh->query('SELECT * FROM items');