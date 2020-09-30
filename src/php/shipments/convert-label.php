<?php
require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';
use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\Shipment;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable("/Users/jhammond/git/easypost/easypost-tools");
$dotenv->load();
EasyPost::setApiKey(getenv("EASYPOST_PROD_API_KEY"));

try {
    $shipment = Shipment::retrieve("shp_81f0c0ec2f864763ab8b9b2555d7dbd3");
    $shipment->label(array(
        'file_format' => 'ZPL'
    ));

    echo $shipment;
} catch (Error $exception) {
    echo $exception;
}
