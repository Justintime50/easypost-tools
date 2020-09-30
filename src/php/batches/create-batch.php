<?php
require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';
use Dotenv\Dotenv;
use EasyPost\EasyPost;
use EasyPost\Batch;
use EasyPost\Error;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey(getenv('EASYPOST_PROD_API_KEY'));

try {
    $batch = Batch::create(array(
    'shipments' => array(
            array(
                // 'id' => ''
            )
        )
    ));

    echo $batch;
} catch (Error $exception) {
    echo $exception;
}
