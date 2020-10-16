<?php
require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';
use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\Rate;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey(getenv('EASYPOST_PROD_API_KEY'));

try {
    $rate = Rate::retrieve('rate_675afb1d32054566b6bc2760f9a76902');
    echo $rate;
} catch (Error $exception) {
    echo $exception;
}
