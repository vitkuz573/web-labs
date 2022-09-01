<?php

namespace App\Helpers;

use App\Models\User;
use Smarty;

if (!function_exists('is_admin')) {
    function is_admin(User $user) : bool
    {
        return $user['is_admin'];
    }
}

if (!function_exists('get_last_uri_chunk')) {
    function get_last_uri_chunk(string $uri) : string
    {
        $chunks = explode('/', $uri);

        return array_pop($chunks);
    }
}

if (!function_exists('show_error_page')) {
    function show_error_page(Smarty $smarty, int $error_code) : void
    {
        $smarty->display('errors/' . $error_code . '.tpl');
        exit();
    }
}