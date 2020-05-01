<?php
require_once("../../vendor/autoload.php");
use \EasyPost\EasyPost;
use \Dotenv\Dotenv;

// API Key
$dotenv = Dotenv::createImmutable(__DIR__, "../../.env");
$dotenv->load();
EasyPost::setApiKey(getenv("EASYPOST_PROD_API_KEY"));

$to_address = \EasyPost\Address::create(
    array(
        "street1" => "417 MONTGOMERY ST",
        "street2" => "FL 5",
        "city"    => "San Francisco",
        "state"   => "CA",
        "zip"     => "94104",
        "country" => "US",
        "company" => "EasyPost",
        "phone"   => "415-123-4567"
    )
);

$from_address = \EasyPost\Address::create(
    array(
        "street1" => "417 MONTGOMERY ST",
        "street2" => "FL 5",
        "city"    => "San Francisco",
        "state"   => "CA",
        "zip"     => "94104",
        "country" => "US",
        "company" => "EasyPost",
        "phone"   => "415-123-4567"
    )
);

try {
    $order = \EasyPost\Order::create(array(
        "to_address" => $to_address,
        "from_address" => $from_address,
        "shipments" => array(
            array(
                "parcel" => array(
                    // "predefined_package" => "FedExBox",
                    "weight" => 10.2
                )
            ),
            array(
                "parcel" => array(
                    // "predefined_package" => "FedExBox",
                    "weight" => 17.5
                )
            ),
        ),
        "carrier_accounts" => getenv("FEDEX"),
        "service" => "FEDEX_GROUND",
        "carrier" => "FedEx",
    ));
} catch (\EasyPost\Error $exception) {
    echo $exception;
    exit;
}

echo $order;
