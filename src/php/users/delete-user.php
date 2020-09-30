<?php
require_once '/Users/jhammond/git/easypost/easypost-tools/vendor/autoload.php';
use EasyPost\EasyPost;
use EasyPost\Error;
use EasyPost\User;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/Users/jhammond/git/easypost/easypost-tools');
$dotenv->load();
EasyPost::setApiKey(getenv('EASYPOST_PROD_API_KEY'));

try {
    $user = User::retrieve('user_2be9757606a849e6bde11bb22bf79a07');
    $user->delete();
    
    echo $user;
} catch (Error $exception) {
    echo $exception;
}
