<?php

require_once("/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php");
use \EasyPost\EasyPost;
use \Dotenv\Dotenv;

// API Key
$dotenv = Dotenv::createImmutable("/Users/jhammond/git/easypost/easypost-tools");
$dotenv->load();
EasyPost::setApiKey(getenv("EASYPOST_PROD_API_KEY"));

$rates = \EasyPost\Rate::retrieve('rate_675afb1d32054566b6bc2760f9a76902');

echo $rates;
