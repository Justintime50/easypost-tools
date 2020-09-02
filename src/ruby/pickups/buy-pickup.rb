require 'date'
require 'easypost'
require 'dotenv'
require 'amazing_print'

Dotenv.load('/Users/jhammond/git/easypost/easypost-tools/.env')
EasyPost.api_key = ENV['EASYPOST_TEST_API_KEY']

pickup = EasyPost::Pickup.retrieve("pickup_b188ced4291f46ee89635e0ee13b581f")
pickup.buy(carrier: "FedEx", service: "Same-day Express Pickup")

ap pickup
