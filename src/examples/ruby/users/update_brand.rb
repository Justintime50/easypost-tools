# frozen_string_literal: true

require 'easypost'
require 'dotenv'
require 'amazing_print'

Dotenv.load('/Users/jhammond/git/easypost/easypost-tools/.env')
EasyPost.api_key = ENV['EASYPOST_PROD_API_KEY']

user = EasyPost::User.retrieve_me

brand = user.update_brand(
  color: "#303F9F",
  # logo: "data:image/png;base64,iVBOR...",
  logo_href: "https://www.easypost.com",
  name: "My Account Name",
  ad: nil,
  ad_href: nil,
  background_color: "#ffffff",
  theme: "theme1"
)

ap brand
