<?php

require_once("/Users/jhammond/git/easypost/easypost-php/lib/easypost.php");
use \EasyPost\EasyPost;

// API Key
EasyPost::setApiKey(getenv("EASYPOST_PROD_API_KEY"));

$user = \EasyPost\User::retrieve('user_2be9757606a849e6bde11bb22bf79a07');
$user->delete();
  
echo $user;
