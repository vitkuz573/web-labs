<?php

require_once 'vendor/autoload.php';
require_once 'db.php';

$smarty = new Smarty();

$smarty->display('index.tpl');