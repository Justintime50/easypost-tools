<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\CarrierAccount;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_PROD_API_KEY']);

try {
    $ca = CarrierAccount::retrieve("ca_123...");
    $ca->delete();
} catch (Error $exception) {
    echo $exception;
}
