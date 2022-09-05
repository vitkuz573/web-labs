<?php

namespace App\Controllers;

use App\Models\User;
use SmartyException;
use function App\Helpers\set_status;

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
        $current_password = trim($_PUT['currentPassword']);

        $user = User::find($_SESSION['user']['id']);

        if (password_verify($current_password, $user['password'])) {
            if ($password) {
                if ($password === $password_confirmation) {
                    $user->password = password_hash($password, PASSWORD_BCRYPT);
                } else {
                    echo set_status('Ошибка. Пароли не совпадают!');
                    return;
                }
            }

            if (!empty($first_name) && !preg_match('/\d+/', $first_name)) {
                $user->first_name = $first_name;
            } else {
                echo set_status('Ошибка. Проверьте введенные значения!');
                return;
            }

            if (!empty($last_name) && !preg_match('/\d+/', $last_name)) {
                $user->last_name = $last_name;
            } else {
                echo set_status('Ошибка. Проверьте введенные значения!');
                return;
            }

            $user->phone = $phone;
            $user->address = $address;

            $saved = $user->save();

            if ($saved) {
                $_SESSION['user']['last_name'] = $last_name;
                $_SESSION['user']['phone'] = $phone;
                $_SESSION['user']['address'] = $address;
            }
        } else {
            echo set_status('Ошибка. Текущий пароль введен неверно!');
        }
    }
}