<?php

if ($_POST) {
    $first_number = (int) $_POST['first_number'];
    $second_number = (int) $_POST['second_number'];
    $operator = $_POST['operator'];

    switch($operator) {
        case '+':
            $result = $first_number + $second_number; break;
        case '-':
            $result = $first_number - $second_number; break;
        case '*':
            $result = $first_number * $second_number; break;
        case '/':
            if($second_number == 0) {
                $result = 'Делить на ноль нельзя!';
            } else {
                $result = $first_number / $second_number;
            }
    
            break;
            
        default:
            return false;
    }
    
    echo $result;
} else {
    die();
}
