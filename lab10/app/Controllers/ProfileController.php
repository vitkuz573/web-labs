<?php

namespace App\Controllers;

use App\Models\User;
use SmartyException;

class ProfileController
{
    /**
     * @throws SmartyException
     */
    public function edit() : void
    {
        if (!isset($_SESSION['user'])) {
            header('Location: login');
        }

        global $smarty;

        $smarty->assign('user', $_SESSION['user']);
        $smarty->display('profile/edit.tpl');
    }

    public function update() : void
    {
        parse_str(file_get_contents('php://input'), $_PUT);
        $_PUT = json_decode(array_keys($_PUT)[0], true);

        $first_name = $_PUT['firstName'];
        $last_name = $_PUT['lastName'];
        $phone = $_PUT['phone'];
        $address = $_PUT['address'];
        $password = trim($_PUT['password']);
        $password_confirmation = trim($_PUT['passwordConfirmation']);

        $newPassword = null;

        if ($password && ($password == $password_confirmation)) {
            $newPassword = password_hash($password, PASSWORD_BCRYPT);
        }

        $user = User::find($_SESSION['user']['id']);

        if ($newPassword) {
            $user->password = $newPassword;
        }

        $user->first_name = $first_name;
        $user->last_name = $last_name;
        $user->phone = $phone;
        $user->address = $address;

        $user->save();

        $_SESSION['user']['first_name'] = $first_name;
        $_SESSION['user']['last_name'] = $last_name;
        $_SESSION['user']['phone'] = $phone;
        $_SESSION['user']['address'] = $address;
    }
}