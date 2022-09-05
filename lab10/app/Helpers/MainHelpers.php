<?php

namespace App\Helpers;

use App\Models\User;
use finfo;
use RuntimeException;
use Smarty;
use SmartyException;

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
    /**
     * @throws SmartyException
     */
    function show_error_page(Smarty $smarty, int $error_code) : void
    {
        $smarty->display('errors/' . $error_code . '.tpl');
        exit();
    }
}

if (!function_exists('check_access')) {
    function access_control(string $location) : void
    {
        if (!$_SESSION['user'] || !is_admin($_SESSION['user'])) {
            header('Location: ' . $location);
        }
    }
}

if (!function_exists('upload_image')) {
    function upload_image() : string
    {
        if (!isset($_FILES['image']['error']) || is_array($_FILES['image']['error'])) {
            throw new RuntimeException('Invalid parameters.');
        }

        switch ($_FILES['image']['error']) {
            case UPLOAD_ERR_OK:
                break;
            case UPLOAD_ERR_NO_FILE:
                throw new RuntimeException('No file sent.');
            case UPLOAD_ERR_INI_SIZE:
            case UPLOAD_ERR_FORM_SIZE:
                throw new RuntimeException('Exceeded filesize limit.');
            default:
                throw new RuntimeException('Unknown errors.');
        }

        if ($_FILES['image']['size'] > 1000000) {
            throw new RuntimeException('Exceeded filesize limit.');
        }

        $finfo = new finfo(FILEINFO_MIME_TYPE);

        if (false === $ext = array_search(
                $finfo->file($_FILES['image']['tmp_name']),
                [
                    'jpg' => 'image/jpeg',
                    'png' => 'image/png',
                    'gif' => 'image/gif',
                ],
                true
            )) {
            throw new RuntimeException('Invalid file format.');
        }

        $image_name = sha1_file($_FILES['image']['tmp_name']) . '.' . $ext;

        if (!move_uploaded_file($_FILES['image']['tmp_name'], sprintf('./src/images/%s', $image_name))) {
            throw new RuntimeException('Failed to move uploaded file.');
        }

        return $image_name;
    }
}

if (!function_exists('set_status')) {
    function set_status(string $message, int $success = 0) : string
    {
        return json_encode([
            'success' => $success,
            'message' => $message,
        ]);
    }
}