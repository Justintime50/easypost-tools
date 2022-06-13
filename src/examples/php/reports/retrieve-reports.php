<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use Dotenv\Dotenv;
use EasyPost\EasyPost;
use EasyPost\Error;

$dotenv = Dotenv::createImmutable("/Users/jhammond/git/easypost/easypost-tools");
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_TEST_API_KEY']);

try {
    $report = \EasyPost\Report::all([
        "type" => "payment_log", // swap the type here
        "page_size" => 10, // optional page size
        "start_date" => "2021-01-01"
    ]);
    echo $report;
} catch (Error $exception) {
    echo $exception;
}
