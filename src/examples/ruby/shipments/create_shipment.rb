# frozen_string_literal: true

require 'easypost'
require 'dotenv'
require 'amazing_print'

Dotenv.load('/Users/jhammond/git/easypost/easypost-tools/.env')
EasyPost.api_key = ENV['EASYPOST_TEST_API_KEY']

shipment = EasyPost::Shipment.create(
  to_address: {
    name: 'Dr. Steve Brule',
    street1: '179 N Harbor Dr',
    city: 'Redondo Beach',
    state: 'CA',
    zip: '90277',
    country: 'US',
    phone: '4155559999',
    email: 'dr_steve_brule@gmail.com'
  },
  from_address: {
    name: 'EasyPost',
    street1: '417 Montgomery Street',
    street2: '5th Floor',
    city: 'San Francisco',
    state: 'CA',
    zip: '94104',
    country: 'US',
    phone: '4155559999',
    email: 'support@easypost.com'
  },
  parcel: {
    length: 20.2,
    width: 10.9,
    height: 5,
    weight: 65.9
  },
  carrier_accounts: ['ca_123...']
)

ap shipment