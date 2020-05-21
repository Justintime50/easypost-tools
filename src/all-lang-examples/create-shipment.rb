#!/usr/local/opt/ruby/bin/ruby
require 'easypost'
require 'dotenv'
require 'awesome_print'

Dotenv.load('/Users/jhammond/git/easypost/easypost-tools/.env')
EasyPost.api_key = ENV['EASYPOST_PROD_API_KEY']

starting = Process.clock_gettime(Process::CLOCK_MONOTONIC)

=begin
to_address = EasyPost::Address.create(...)
from_address = EasyPost::Address.create(...)
parcel = EasyPost::Parcel.create(...)
customs_info = EasyPost::CustomsInfo.create(...)

EasyPost::Shipment.create(
  to_address: to_address,
  from_address: from_address,
  parcel: parcel,
  customs_info: customs_info
)
=end

# OR in one call

carrier_accounts = ["ca_3bd616120603457fbed9deb1e425bbdc"]

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
  carrier_accounts: carrier_accounts
  # customs_info: customs_info
=begin
  options: {
    payment: {
      type: "THIRD_PARTY",
      account: "ca_3bd616120603457fbed9deb1e425bbdc",
      country: "US",
      postal_code: "84057"
    }
  }
=end
)

ap shipment # awesome_print the shipment
ending = Process.clock_gettime(Process::CLOCK_MONOTONIC)
elapsed = ending - starting
puts "Execution time: #{elapsed}" 
