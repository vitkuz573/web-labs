<?php

namespace App\Controllers;

use App\Models\User;

class LoginController
{
    public function index(): void
    {
        global $smarty;

        $smarty->display('users/login.tpl');
    }

    public function store(): void
    {
        $login = filter_var(trim($_POST['login']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $password = filter_var(trim($_POST['password']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        $user = User::whereLogin($login)->first();

        if (!password_verify($password, $user['password'])) {
            echo 'Логин или пароль введены неверно!';
            exit();
        }

        $_SESSION['user'] = $user;

        if ($user['is_admin'] == 1)
        {
            header('Location: admin');
        } else {
            header('Location: products');
        }
    }
}