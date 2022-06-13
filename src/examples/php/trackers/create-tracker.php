<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use Dotenv\Dotenv;
use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\Shipment;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_TEST_API_KEY']);

try {
    $tracker = \EasyPost\Tracker::create([
        "tracking_code" => "EZ1000000001",
    ]);

    echo $tracker;
} catch (Error $exception) {
    echo $exception;
}
