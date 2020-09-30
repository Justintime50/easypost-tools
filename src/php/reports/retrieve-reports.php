<?php
require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';
use EasyPost\EasyPost;
use EasyPost\Error;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable("/Users/jhammond/git/easypost/easypost-tools");
$dotenv->load();
EasyPost::setApiKey(getenv("EASYPOST_PROD_API_KEY"));

try {
    $payment_log_reports = \EasyPost\Report::all(array(
        "type" => "payment_log",
        "page_size" => 4,
        "start_date" => "2020-04-01"
    ));
    
    $refund_reports = \EasyPost\Report::all(array(
        "type" => "refund",
        "page_size" => 4,
        "start_date" => "2020-04-01"
    ));
    
    $shipment_reports = \EasyPost\Report::all(array(
        "type" => "shipment",
        "page_size" => 4,
        "start_date" => "2020-04-01"
    ));
    
    $tracker_reports = \EasyPost\Report::all(array(
        "type" => "tracker",
        "page_size" => 4,
        "start_date" => "2020-04-01"
    ));
echo "$payment_log_reports \n $refund_reports \n $shipment_reports \n $tracker_reports";
} catch (Error $exception) {
    echo $exception;
  }
