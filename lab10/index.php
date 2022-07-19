<?php

require_once __DIR__ . '/vendor/autoload.php';

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

// Загрузка .env
$dotenv = new Dotenv();
$dotenv->load(__DIR__ . '/.env');

// Создание экземпляра класса PDO для работы с БД
$pdo = new PDO('mysql:dbname=' . $_ENV['DB_NAME'], $_ENV['DB_USER'], $_ENV['DB_PASSWORD']);

// Eloquent
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

// Инициализация шаблонизатора Smarty
$smarty = new Smarty();

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
    require_once 'errors/404.php';
}