<?php

require_once __DIR__ . '/vendor/autoload.php';

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pagination\Paginator;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\Routing\Loader\YamlFileLoader;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\HttpKernel\Controller;
use Symfony\Component\Dotenv\Dotenv;
use Illuminate\Database\Capsule\Manager as Capsule;

// Запуск сессии
session_start();

if (!isset($_SESSION['cart']))
{
    $_SESSION['cart'] = [];
}

// Загрузка .env
$dotenv = new Dotenv();
$dotenv->load(__DIR__ . '/.env');

// Инициализация Eloquent
$capsule = new Capsule();

$capsule->addConnection([
    'driver' => 'mysql',
    'host' => $_ENV['DB_HOST'],
    'database' => $_ENV['DB_NAME'],
    'username' => $_ENV['DB_USER'],
    'password' => $_ENV['DB_PASSWORD'],
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => '',
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();

// Создание макроса для WHERE LIKE
Builder::macro('whereLike', function (string $attribute, string $searchTerm) {
    return $this->orWhere($attribute, 'LIKE', "%{$searchTerm}%");
});

// Назначение page resolver для пагинации
Paginator::currentPageResolver(function ($pageName = 'page') {
    return (int) ($_GET[$pageName] ?? 1);
});

// Инициализация шаблонизатора Smarty
$smarty = new Smarty();
$smarty->debugging = false;

// Маршрутизация с использованием YML файла в качестве файла маршрутов
$locator = new FileLocator([__DIR__]);
$loader = new YamlFileLoader($locator);
$routes = $loader->load('config/routes.yml');

$context = new RequestContext();
$request = Request::createFromGlobals();
$context->fromRequest($request);
$matcher = new UrlMatcher($routes, $context);
$controllerResolver = new Controller\ControllerResolver();
$argumentResolver = new Controller\ArgumentResolver();

try {
    $matcher = $matcher->match($request->getPathInfo());
    $request->attributes->add($matcher);

    $controller = $controllerResolver->getController($request);
    $arguments = $argumentResolver->getArguments($request, $controller);
    
    call_user_func_array($controller, $arguments);
} catch (ResourceNotFoundException $e) {
    $response = new Response('Not found!', Response::HTTP_NOT_FOUND);
    $smarty->display('errors/404.tpl');
}