<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use EasyPost\EasyPost;
use EasyPost\Error;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable("/Users/jhammond/git/easypost/easypost-tools");
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_TEST_API_KEY']);

try {
    $payment_log_report = \EasyPost\Report::create(array(
        "start_date" => "2021-01-01",
        "end_date" => "2021-01-31",
        "type" => "payment_log"
    ));
    echo $payment_log_report;

    $refund_report = \EasyPost\Report::create(array(
        "start_date" => "2021-01-01",
        "end_date" => "2021-01-31",
        "type" => "refund"
    ));
    echo $refund_report;

    $shipment_report = \EasyPost\Report::create(array(
        "start_date" => "2021-01-01",
        "end_date" => "2021-01-31",
        "type" => "shipment"
    ));
    echo $shipment_report;

    $shipment_invoice_report = \EasyPost\Report::create(array(
        "start_date" => "2021-01-01",
        "end_date" => "2021-01-31",
        "type" => "shipment_invoice"
    ));
    echo $shipment_invoice_report;

    $tracker_report = \EasyPost\Report::create(array(
        "start_date" => "2021-01-01",
        "end_date" => "2021-01-31",
        "type" => "tracker"
    ));
    echo $tracker_report;
} catch (Error $exception) {
    echo $exception;
}
