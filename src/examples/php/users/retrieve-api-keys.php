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
    // Pass the ID of a child user
    $user = User::retrieve('user_123...');
    $api_keys = $user->api_keys();

    print_r($api_keys);
} catch (Error $exception) {
    echo $exception;
}
