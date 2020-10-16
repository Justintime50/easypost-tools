# frozen_string_literal: true

require 'date'
require 'easypost'
require 'dotenv'
require 'amazing_print'

Dotenv.load('/Users/jhammond/git/easypost/easypost-tools/.env')
EasyPost.api_key = ENV['EASYPOST_TEST_API_KEY']

carrier_accounts = [ENV['FEDEX']]

shipment = 'shp_269ac374aa8a4e8893bb1904715577ea'

address = EasyPost::Address.create(
  name: 'EasyPost',
  street1: '417 Montgomery Street',
  street2: '5th Floor',
  city: 'San Francisco',
  state: 'CA',
  zip: '94104',
  country: 'US',
  phone: '4155559999',
  email: 'support@easypost.com'
)

pickup = EasyPost::Pickup.create(
  address: address,
  shipment: shipment,
  reference: 'my-first-pickup',
  min_datetime: DateTime.now,
  max_datetime: DateTime.now + 14_400,
  is_account_address: false,
  instructions: 'Special pickup instructions',
  carrier_accounts: carrier_accounts
)

ap pickup
