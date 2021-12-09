# frozen_string_literal: true

require 'easypost'
require 'dotenv'
require 'amazing_print'

Dotenv.load('/Users/jhammond/git/easypost/easypost-tools/.env')
EasyPost.api_key = ENV['EASYPOST_TEST_API_KEY']

shipment = EasyPost::Shipment.retrieve('shp_123...')
shipment.buy(
  rate: shipment.lowest_rate
)

ap shipment
