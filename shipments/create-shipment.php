<?php

require_once("../../libraries/easypost-php/lib/easypost.php");
\EasyPost\EasyPost::setApiKey(""); # TODO: Change to environment variable

/*
$to_address = \EasyPost\Address::create(...);
$from_address = \EasyPost\Address::create(...);
$parcel = \EasyPost\Parcel::create(...);
$customs_info = \EasyPost\CustomsInfo::create(...);

$shipment = \EasyPost\Shipment::create(array(
  "to_address" => $to_address,
  "from_address" => $from_address,
  "parcel" => $parcel,
  "customs_info" => $customs_info
));
*/

// OR in one call

$shipment = \EasyPost\Shipment::create(array(
  "to_address" => array(
    'name' => 'Dr. Steve Brule',
    'street1' => '179 N Harbor Dr',
    'city' => 'Redondo Beach',
    'state' => 'CA',
    'zip' => '90277',
    'country' => 'US',
    'phone' => '3331114444',
    'email' => 'dr_steve_brule@gmail.com'
  ),
  "from_address" => array(
    'name' => 'EasyPost',
    'street1' => '417 Montgomery Street',
    'street2' => '5th Floor',
    'city' => 'San Francisco',
    'state' => 'CA',
    'zip' => '94104',
    'country' => 'US',
    'phone' => '3331114444',
    'email' => 'support@easypost.com'
  ),
  "parcel" => array(
    "length" => 20.2,
    "width" => 10.9,
    "height" => 5,
    "weight" => 65.9
  )
));

echo $shipment;

# Log the execution time and print it
$executionTime = microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"];
echo "\nResponse time: " . $executionTime . "\n";
