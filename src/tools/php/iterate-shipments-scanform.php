<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\ScanForm;
use EasyPost\Batch;
use Dotenv\Dotenv;

/**
 * Iterate through shipments from a batch one by one and scanform them.
 * Great when you have a troubled batch and don't know where the bad shipments are.
 *
 * This script is SLOW because the calls are made synchronously - you could spend hours
 * waiting for it to complete when batches exceed a few hundred.
 *
 * Usage: BATCH_ID=batch_123... php iterate-shipments-scanform.php
 */

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey(getenv('EASYPOST_TEST_API_KEY'));

$batch = Batch::retrieve(getenv('BATCH_ID'));

foreach ($batch['shipments'] as $shipment) {
    try {
        $shipments[] = $shipment['id'];
        $scanform = ScanForm::create(['shipments' => $shipments]);
        echo "{$scanform['id']} generated successfully for {$shipment['id']}\n";
    } catch (Error $exception) {
        echo "Could not scanform {$shipment['id']}\n";
    }
}
