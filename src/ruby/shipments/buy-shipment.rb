#!/usr/local/opt/ruby/bin/ruby
require 'easypost'
require 'dotenv'
require 'awesome_print'

Dotenv.load('/Users/jhammond/git/easypost/easypost-tools/.env')
EasyPost.api_key = ENV['EASYPOST_TEST_API_KEY']

# Inspiration: https://github.com/EasyPost/easypost-ruby/issues/46#issuecomment-257023812

rate = {id: 'rate_ab6ac836689f4db6bebe703fe4b594e6'}

shipment = EasyPost::Shipment.retrieve('shp_241b299d81304bc7aa7f85360648a791')
shipment_buy = shipment.buy(rate: rate)

ap shipment_buy # awesome_print the shipment
