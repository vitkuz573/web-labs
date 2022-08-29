<?php

namespace App\Controllers;

use App\Models\User;

class RegisterController
{
    public function index(): void
    {
        global $smarty;

        $smarty->display('users/register.tpl');
    }

    public function store(): void
    {
        $login = filter_var(trim($_POST['login']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $first_name = filter_var(trim($_POST['first_name']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $last_name = filter_var(trim($_POST['last_name']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $password = filter_var(trim($_POST['password']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        /*if (mb_strlen($login) < 5 || mb_strlen($login > 50)) {
            echo 'Недопустимая длина логина!';
            exit();
        } else if(mb_strlen($password) < 5 || mb_strlen($password > 32)){
            echo "Недопустимая длина пароля!";
            exit();
        } else if(mb_strlen($first_name) < 5 || mb_strlen($first_name > 50)){
            echo "Недопустимая длина имени!";
            exit();
        } else if(mb_strlen($last_name) < 5 || mb_strlen($last_name > 50)){
            echo "Недопустимая длина фамилии!";
            exit();
        }*/

        User::firstOrCreate([
            'login' => $login,
            'password' => md5($password),
            'first_name' => $first_name,
            'last_name' => $last_name,
        ]);
    }
}