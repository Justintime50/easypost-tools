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
    $shipment = Shipment::create([
        "to_address" => [
            'name' => 'Dr. Steve Brule',
            'street1' => '179 N Harbor Dr',
            'city' => 'Redondo Beach',
            'state' => 'CA',
            'zip' => '90277',
            'country' => 'US',
            'phone' => '3331114444',
            'email' => 'dr_steve_brule@gmail.com'
        ],
        "from_address" => [
            'name' => 'EasyPost',
            'street1' => '417 Montgomery Street',
            'street2' => '5th Floor',
            'city' => 'San Francisco',
            'state' => 'CA',
            'zip' => '94104',
            'country' => 'US',
            'phone' => '3331114444',
            'email' => 'support@easypost.com'
        ],
        "parcel" => [
            "length" => 20.2,
            "width" => 10.9,
            "height" => 5,
            "weight" => 65.9
        ],
        // customs_info is required for international shipments
        "customs_info" => [
            "eel_pfc" => 'NOEEI 30.37(a)',
            "customs_certify" => true,
            "customs_signer" => 'Steve Brule',
            "contents_type" => 'merchandise',
            "contents_explanation" => '',
            "restriction_type" => 'none',
            "non_delivery_option" => 'return',
            "customs_items" => [
                [
                    "description" => 'Sweet shirts',
                    "quantity" => 2,
                    "weight" => 11,
                    "value" => 23,
                    "hs_tariff_number" => '654321',
                    "origin_country" => 'US'
                ],
            ]
        ],
        "carrier_accounts" => ["ca_123..."]
    ]);

    echo $shipment;
} catch (Error $exception) {
    echo $exception;
}
