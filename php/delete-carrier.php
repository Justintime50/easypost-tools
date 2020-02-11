<?php
require_once("../vendor/autoload.php");
use \EasyPost\EasyPost;
use \EasyPost\CarrierAccount;
use \Dotenv\Dotenv;

// API Key
$dotenv = Dotenv::createImmutable(__DIR__, "../.env");
$dotenv->load();
EasyPost::setApiKey(getenv("EASYPOST_PROD_API_KEY"));

$ca = CarrierAccount::retrieve("ca_...");
$ca->delete();
