<?php

require ('../../vendor/autoload.php');

$apiKey = getenv('EASYPOST_API_KEY');

if(!$apiKey) {
    throw new \Exception('Please set the EASYPOST_API_KEY environment variable');
}

EasyPost\EasyPost::setApiKey($apiKey);

$shipment = EasyPost\Shipment::retrieve('shp_38b4723d33864d759bcad7cd241e1a8e');

$rate = $shipment->lowest_rate('DHLeCommerce');

$shipment->buy(['rate' => $rate]);
