<?php

require_once("/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php");
use \EasyPost\EasyPost;
use \Dotenv\Dotenv;

// API Key
$dotenv = Dotenv::createImmutable("/Users/jhammond/git/easypost/easypost-tools");
$dotenv->load();
EasyPost::setApiKey(getenv("EASYPOST_PROD_API_KEY"));

// Set a random date to use
$year = sprintf('%04d', rand(0001,2020));
$month = sprintf('%02d', rand(01,12));

$payment_log_report = \EasyPost\Report::create(array(
  "start_date" => "$year-$month-01",
  "end_date" => "$year-$month-31",
  "type" => "payment_log"
));
  
$refund_report = \EasyPost\Report::create(array(
  "start_date" => "$year-$month-01",
  "end_date" => "$year-$month-31",
  "type" => "refund"
));

$shipment_report = \EasyPost\Report::create(array(
  "start_date" => "$year-$month-01",
  "end_date" => "$year-$month-31",
  "type" => "shipment"
));

$tracker_report = \EasyPost\Report::create(array(
  "start_date" => "$year-$month-01",
  "end_date" => "$year-$month-31",
  "type" => "tracker"
));

echo "$payment_log_report \n $refund_report \n $shipment_report \n $tracker_report";
