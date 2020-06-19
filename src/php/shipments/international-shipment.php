<?php
require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';
use Dotenv\Dotenv;
use EasyPost\EasyPost;
use EasyPost\Shipment;

// API Key
$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey(getenv('EASYPOST_PROD_API_KEY'));

$shipment = Shipment::create(array(
  "to_address" => array(
    'company' => 'EasyPost',
    'name' => 'TAKASHI KOVACS',
    'street1' => 'Columbusweg 33A',
    // 'street2' => 'SUITE 325',
    'city' => 'Venlo',
    'state' => 'Limburg',
    'zip' => '5928',
    'country' => 'Netherlands',
    'phone' => '3331114444',
    'email' => 'email@email.com'
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
  ),
  "customs_info" => array(
    "eel_pfc" => 'NOEEI 30.37(a)',
    "customs_certify" => true,
    "customs_signer" => 'Steve Brule',
    "contents_type" => 'merchandise',
    "contents_explanation" => '',
    "restriction_type" => 'none',
    "non_delivery_option" => 'return',
    "customs_items" => array(
      array(
        "description" => 'Sweet shirts',
        "quantity" => 2,
        "weight" => 11,
        "value" => 23,
        "hs_tariff_number" => '654321',
        "origin_country" => 'US'
      ),
    )
  ),
  // "options" => array(
  //   "alcohol" => true,
  // )
  "carrier_accounts" => [getenv('FEDEX')]
));

echo $shipment;
