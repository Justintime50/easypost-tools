<?php

require_once("/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php");
use \EasyPost\EasyPost;
use \Dotenv\Dotenv;

// API Key
$dotenv = Dotenv::createImmutable("/Users/jhammond/git/easypost/easypost-tools");
$dotenv->load();
EasyPost::setApiKey(getenv("EASYPOST_PROD_API_KEY"));

$shipment = \EasyPost\Shipment::retrieve("shp_81f0c0ec2f864763ab8b9b2555d7dbd3");
$shipment->label(array(
  'file_format' => 'ZPL'
));

echo $shipment;
