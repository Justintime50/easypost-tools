# frozen_string_literal: true

require 'date'
require 'easypost'
require 'dotenv'
require 'amazing_print'

Dotenv.load('/Users/jhammond/git/easypost/easypost-tools/.env')
EasyPost.api_key = ENV['EASYPOST_TEST_API_KEY']

pickup = EasyPost::Pickup.retrieve('pickup_123...')
pickup.buy(
  carrier: 'FedEx',
  service: 'Same-day Express Pickup'
)

ap pickup
