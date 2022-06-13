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
    $shipment = \EasyPost\Shipment::retrieve("shp_123...");
    $shipment->buy([
        'rate'      => $shipment->lowest_rate(), // alternatively, provide a rate ID here instead
        //   'insurance' => 249.99 // optional insurance
    ]);
    echo $shipment;
} catch (Error $exception) {
    echo $exception;
}
