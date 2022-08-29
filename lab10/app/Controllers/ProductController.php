<?php

namespace App\Controllers;

use App\Models\Product;

class ProductController
{
    public function index(): void
    {
        global $smarty;

        $smarty->assign('products', Product::all());
        $smarty->display('products/index.tpl');
    }

    public function show(): void
    {
        global $smarty;

        $smarty->display('products/show.tpl');
    }

    public function create(): void
    {
        global $smarty;

        $smarty->display('products/create.tpl');
    }

    public function store(): void
    {
        $image = filter_var(trim($_POST['image']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $description = filter_var(trim($_POST['description']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $price = filter_var(trim($_POST['price']), FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        Product::create([
            'image' => $image,
            'name' => $name,
            'description' => $description,
            'price' => $price,
        ]);

        header('Location: admin');
    }
}