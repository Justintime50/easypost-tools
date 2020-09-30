<?php
require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';
use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\Shipment;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey(getenv('EASYPOST_PROD_API_KEY'));

try {
    $shipment = Shipment::create(array(
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
} catch (Error $exception) {
    echo $exception;
}
