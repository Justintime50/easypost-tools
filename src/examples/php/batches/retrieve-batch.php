<?php

require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';

use Dotenv\Dotenv;
use EasyPost\EasyPost;
use EasyPost\Batch;
use EasyPost\Error;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey($_ENV['EASYPOST_TEST_API_KEY']);

try {
    $batch = Batch::retrieve('batch_123...');
    echo $batch;
} catch (Error $exception) {
    echo $exception;
}
