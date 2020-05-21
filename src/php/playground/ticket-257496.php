<?php

require_once("/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php");
use \EasyPost\EasyPost;
use \Dotenv\Dotenv;

// API Key
$dotenv = Dotenv::createImmutable("/Users/jhammond/git/easypost/easypost-tools");
$dotenv->load();
EasyPost::setApiKey(getenv("EASYPOST_TEST_API_KEY"));

// verify address
$weight = round(10*0.035274,2);

try {
    $shipment = \EasyPost\Shipment::create(
        array(
            "to_address"   => array(
                    "verify"  => array("delivery"),
                    "street1" => "5236 S Amherst Hwy",
                    "street2" => "",
                    "city"    => "Madison Heights",
                    "state"   => "VA",
                    "zip"     => "24572",
                    "country" => "US",
                    "company" => "Video Aerial Systems LLC",
                    "phone"   => "9105479717"
            ),
            "from_address" => array(
                    "verify"  => array("delivery"),
                    "street1" => "5236 S Amherst Hwy",
                    "street2" => "",
                    "city"    => "Madison Heights",
                    "state"   => "VA",
                    "zip"     => "24572",
                    "country" => "US",
                    "company" => "Video Aerial Systems LLC",
                    "phone"   => "9105479717"
            ),
            "parcel"         => array(
                "weight"     => $weight
            ),
        )
    );
} catch (\EasyPost\Error $exception) {
    echo $exception;
}

// First class support up to 13 Oz
if ($weight > 13) {
    $service = 'Priority';
} else {
    $service = 'First';
}

try {
    $shipment->buy(array(
        "rate" => $shipment->lowest_rate("USPS", $service)
    ));
} catch (\EasyPost\Error $exception) {
    echo $exception;
}

echo $shipment;
