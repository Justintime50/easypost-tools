<?php
require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';
use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\Scanform;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey(getenv("EASYPOST_PROD_API_KEY"));

try {
    $shipments = array("shp_1a6bc7699a0d44119d9bc50b558e7621");

    $scanform = ScanForm::create(array(
        "shipments" => $shipments
    ));

    echo $scanform;
} catch (Error $exception) {
    echo $exception;
}
