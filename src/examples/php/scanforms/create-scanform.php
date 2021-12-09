<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\Scanform;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_TEST_API_KEY']);

try {
    $shipments = array("shp_123...");

    $scanform = ScanForm::create(array(
        "shipments" => $shipments,
    ));

    echo $scanform;
} catch (Error $exception) {
    echo $exception;
}
