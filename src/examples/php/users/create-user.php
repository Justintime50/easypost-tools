<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\User;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_PROD_API_KEY']);

try {
    $user = User::create(array(
        'name' => 'Justin Hammond'
    ));

    echo $user;
} catch (Error $exception) {
    echo $exception;
}
