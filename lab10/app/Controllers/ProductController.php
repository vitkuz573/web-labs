<?php

namespace App\Controllers;

use App\Models\Product;
use function App\Helpers\get_last_uri_chunk;
use function App\Helpers\show_error_page;

class ProductController
{
    public function index(): void
    {
        global $smarty;

        $smarty->assign('products', Product::paginate(8));
        $smarty->display('products/index.tpl');
    }

    public function show(): void
    {
        $id = get_last_uri_chunk($_SERVER['REQUEST_URI']);
        $product = Product::find($id);

        global $smarty;

        if ($product == null) {
            show_error_page($smarty, 404);
        }

        $smarty->assign('product', $product);
        $smarty->display('products/show.tpl');
    }

    public function create(): void
    {
        global $smarty;

        $smarty->display('products/create.tpl');
    }

    public function store(): void
    {
        Product::create([
            'image' => filter_var(trim($_POST['image']), FILTER_SANITIZE_FULL_SPECIAL_CHARS),
            'name' => filter_var(trim($_POST['name']), FILTER_SANITIZE_FULL_SPECIAL_CHARS),
            'description' => filter_var(trim($_POST['description']), FILTER_SANITIZE_FULL_SPECIAL_CHARS),
            'price' => filter_var(trim($_POST['price']), FILTER_SANITIZE_FULL_SPECIAL_CHARS),
        ]);

        header('Location: admin');
    }

    public function edit() : void
    {
        global $smarty;

        $id = get_last_uri_chunk($_SERVER['REQUEST_URI']);

        if (Product::find($id) == null)
        {
            show_error_page($smarty, 404);
        }

        $smarty->assign('product', Product::find($id));
        $smarty->display('products/edit.tpl');
    }

    public function update() : void
    {
        $id = get_last_uri_chunk($_SERVER['REQUEST_URI']);
        $product = Product::find($id);

        if ($product == null)
        {
            global $smarty;

            show_error_page($smarty, 404);
        }

        $product->update();
    }
}