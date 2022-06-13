<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use Dotenv\Dotenv;
use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\Scanform;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_TEST_API_KEY']);

try {
    $shipments = ["shp_123..."];

    $scanform = ScanForm::create([
        "shipments" => $shipments,
    ]);

    echo $scanform;
} catch (Error $exception) {
    echo $exception;
}
