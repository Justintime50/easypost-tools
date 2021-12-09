<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\Rate;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_TEST_API_KEY']);

try {
    $rate = Rate::retrieve('rate_123...');
    echo $rate;
} catch (Error $exception) {
    echo $exception;
}
