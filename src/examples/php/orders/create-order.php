<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use Dotenv\Dotenv;
use EasyPost\Address;
use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\Order;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_TEST_API_KEY']);

$to_address = Address::create(
    [
        "street1" => "417 MONTGOMERY ST",
        "street2" => "FL 5",
        "city"    => "San Francisco",
        "state"   => "CA",
        "zip"     => "94104",
        "country" => "US",
        "company" => "EasyPost",
        "phone"   => "415-123-4567"
    ]
);

$from_address = Address::create(
    [
        "street1" => "417 MONTGOMERY ST",
        "street2" => "FL 5",
        "city"    => "San Francisco",
        "state"   => "CA",
        "zip"     => "94104",
        "country" => "US",
        "company" => "EasyPost",
        "phone"   => "415-123-4567"
    ]
);

try {
    $order = Order::create([
        "to_address" => $to_address,
        "from_address" => $from_address,
        "shipments" => [
            [
                "parcel" => [
                    "predefined_package" => "FedExBox",
                    "weight" => 10.2
                ]
            ],
            [
                "parcel" => [
                    "predefined_package" => "FedExBox",
                    "weight" => 17.5
                ]
            ],
        ],
        "carrier_accounts" => ["ca_123..."],
        "service" => "FEDEX_GROUND",
        "carrier" => "FedEx",
    ]);
    echo $order;
} catch (Error $exception) {
    echo $exception;
}
