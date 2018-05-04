<?php
/**
 * phpunit
 */

error_reporting(E_ALL);
ini_set('display_errors', 'On');
date_default_timezone_set('Asia/Shanghai');

$classmap = [
    dirname(__DIR__) . '/src/Miner.php',
];

spl_autoload_register(function ($class) {
    $file = null;

    if (0 === strpos($class,'Miner\Test\\')) {
        $path = str_replace('\\', '/', substr($class, strlen('Miner\Test\\')));
        $file = __DIR__ . "/{$path}.php";
    }

    if ($file && is_file($file)) {
        include $file;
    }
});
