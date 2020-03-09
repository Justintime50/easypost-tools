<?php

require_once("lib/easypost.php");
\EasyPost\EasyPost::setApiKey('EZAKf6f0be77c66748fa9fe8baec53481711agJQPmxRm7EiqawM6ARoug');

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
