<?php
/**
 * Iterate through shipments one by one and scanform them.
 * Great when you have a troubled batch and don't know where the bad shipments are.
 */
require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';
use Dotenv\Dotenv;
use EasyPost\EasyPost;

// API Key
$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey(getenv('EASYPOST_PROD_API_KEY'));

$batch = \EasyPost\Batch::retrieve('batch_aa159dd9313c4add8bedffde2456865a');

// foreach ($batch["shipments"] as $shipment) {
//     echo $shipment["id"] . " | " . $shipment["tracking_code"] . "\n";
// }

foreach ($batch['shipments'] as $shipment) {
    try {
        $shipments[] = $shipment['id'];
        $scanform = \EasyPost\ScanForm::create(['shipments' => $shipments]);
        echo $scanform."\n";
    } catch (\EasyPost\Error $exception) {
        echo 'Could not scanform '.$shipment['id']."\n";
    }
}
