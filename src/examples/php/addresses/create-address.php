<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use Dotenv\Dotenv;
use EasyPost\EasyPost;
use EasyPost\Address;
use EasyPost\Error;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_TEST_API_KEY']);

try {
    // optionally verify the address
    $verifications = ["delivery"];
    // $verifications = "zip4";

    $address = Address::create(
        [
            "verify"  => $verifications,
            "verify_strict" => false,
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

    echo $address;
} catch (Error $exception) {
    echo $exception;
}
