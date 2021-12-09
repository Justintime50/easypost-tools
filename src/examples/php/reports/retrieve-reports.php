<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use EasyPost\EasyPost;
use EasyPost\Error;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable("/Users/jhammond/git/easypost/easypost-tools");
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_TEST_API_KEY']);

try {
    $report = \EasyPost\Report::all(array(
        "type" => "payment_log", // swap the type here
        "page_size" => 10, // optional page size
        "start_date" => "2021-01-01"
    ));
    echo $report;
} catch (Error $exception) {
    echo $exception;
}
