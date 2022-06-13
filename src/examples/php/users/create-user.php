<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use Dotenv\Dotenv;
use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\User;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_PROD_API_KEY']);

try {
    $user = User::create([
        'name' => 'Justin Hammond'
    ]);

    echo $user;
} catch (Error $exception) {
    echo $exception;
}
