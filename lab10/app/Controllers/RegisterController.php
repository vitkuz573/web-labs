<?php

namespace App\Controllers;

use App\Models\User;
use SmartyException;

class RegisterController
{
    /**
     * @throws SmartyException
     */
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

        User::firstOrCreate([
            'login' => $login,
            'password' => password_hash($password, PASSWORD_BCRYPT),
            'first_name' => $first_name,
            'last_name' => $last_name,
        ]);

        header('Location: login');
    }
}