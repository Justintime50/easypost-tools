# AmazonMwsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=AmazonMwsAccount' \
    -d 'carrier_account[description]=AmazonMwsAccount' \
    -d 'carrier_account[credentials][access_key_id]=VALUE' \
    -d 'carrier_account[credentials][merchant_id]=VALUE' \
    -d 'carrier_account[credentials][secret_key]=VALUE' |
    json_pp

# ApcAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=ApcAccount' \
    -d 'carrier_account[description]=ApcAccount' \
    -d 'carrier_account[credentials][facility]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][shipper_id]=VALUE' |
    json_pp

# AsendiaAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=AsendiaAccount' \
    -d 'carrier_account[description]=AsendiaAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][company_name]=VALUE' \
    -d 'carrier_account[credentials][epacket]=VALUE' \
    -d 'carrier_account[credentials][ftp_password]=VALUE' \
    -d 'carrier_account[credentials][ftp_username]=VALUE' \
    -d 'carrier_account[credentials][internationalexpress]=VALUE' \
    -d 'carrier_account[credentials][ipa]=VALUE' \
    -d 'carrier_account[credentials][isal]=VALUE' \
    -d 'carrier_account[credentials][other]=VALUE' \
    -d 'carrier_account[credentials][pmei]=VALUE' \
    -d 'carrier_account[credentials][pmi]=VALUE' \
    -d 'carrier_account[credentials][prioritytracked]=VALUE' |
    json_pp

# AustraliaPostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=AustraliaPostAccount' \
    -d 'carrier_account[description]=AustraliaPostAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][api_secret]=VALUE' \
    -d 'carrier_account[credentials][print_as_you_go]=VALUE' |
    json_pp

# AxlehireV3Account
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=AxlehireV3Account' \
    -d 'carrier_account[description]=AxlehireV3Account' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[test_credentials][api_key]=VALUE' |
    json_pp

# BondAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=BondAccount' \
    -d 'carrier_account[description]=BondAccount' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[test_credentials][api_key]=VALUE' |
    json_pp

# CanadaPostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=CanadaPostAccount' \
    -d 'carrier_account[description]=CanadaPostAccount' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][contract_id]=VALUE' \
    -d 'carrier_account[credentials][customer_number]=VALUE' \
    -d 'carrier_account[credentials][has_credit_card]=VALUE' |
    json_pp
## REQUIRES CUSTOM WORKFLOW ##

# CanparAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=CanparAccount' \
    -d 'carrier_account[description]=CanparAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[test_credentials][account_number]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][username]=VALUE' |
    json_pp

# ColisPriveAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=ColisPriveAccount' \
    -d 'carrier_account[description]=ColisPriveAccount' \
    -d 'carrier_account[credentials][account_id]=VALUE' \
    -d 'carrier_account[credentials][customer_id]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' |
    json_pp

# ColumbusLastMileAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=ColumbusLastMileAccount' \
    -d 'carrier_account[description]=ColumbusLastMileAccount' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][tracking_code_prefix]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][tracking_code_prefix]=VALUE' \
    -d 'carrier_account[test_credentials][username]=VALUE' |
    json_pp

# CourierExpressAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=CourierExpressAccount' \
    -d 'carrier_account[description]=CourierExpressAccount' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][shipper_id]=VALUE' \
    -d 'carrier_account[test_credentials][api_key]=VALUE' \
    -d 'carrier_account[test_credentials][shipper_id]=VALUE' |
    json_pp

# CouriersPleaseAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=CouriersPleaseAccount' \
    -d 'carrier_account[description]=CouriersPleaseAccount' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][username]=VALUE' |
    json_pp

# DaiPostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DaiPostAccount' \
    -d 'carrier_account[description]=DaiPostAccount' \
    -d 'carrier_account[credentials][account_code]=VALUE' \
    -d 'carrier_account[credentials][origin_terminal]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' |
    json_pp

# DeutschePostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DeutschePostAccount' \
    -d 'carrier_account[description]=DeutschePostAccount' \
    -d 'carrier_account[credentials][barcode_prefix]=VALUE' \
    -d 'carrier_account[credentials][barcode_range_size]=VALUE' \
    -d 'carrier_account[credentials][barcode_range_start]=VALUE' |
    json_pp

# DeutschePostUKAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DeutschePostUKAccount' \
    -d 'carrier_account[description]=DeutschePostUKAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][client_id]=VALUE' \
    -d 'carrier_account[credentials][client_secret]=VALUE' \
    -d 'carrier_account[test_credentials][account_number]=VALUE' \
    -d 'carrier_account[test_credentials][client_id]=VALUE' \
    -d 'carrier_account[test_credentials][client_secret]=VALUE' |
    json_pp

# DhlEcommerceAsiaAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DhlEcommerceAsiaAccount' \
    -d 'carrier_account[description]=DhlEcommerceAsiaAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][barcode_prefix]=VALUE' \
    -d 'carrier_account[credentials][client_id]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][account_number]=VALUE' \
    -d 'carrier_account[test_credentials][barcode_prefix]=VALUE' \
    -d 'carrier_account[test_credentials][client_id]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' |
    json_pp

# DhlEcsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DhlEcsAccount' \
    -d 'carrier_account[description]=DhlEcsAccount' \
    -d 'carrier_account[credentials][client_id]=VALUE' \
    -d 'carrier_account[credentials][client_secret]=VALUE' \
    -d 'carrier_account[credentials][distribution_center]=VALUE' \
    -d 'carrier_account[credentials][pickup_id]=VALUE' \
    -d 'carrier_account[test_credentials][client_id]=VALUE' \
    -d 'carrier_account[test_credentials][client_secret]=VALUE' \
    -d 'carrier_account[test_credentials][distribution_center]=VALUE' \
    -d 'carrier_account[test_credentials][pickup_id]=VALUE' |
    json_pp

# DhlExpressAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DhlExpressAccount' \
    -d 'carrier_account[description]=DhlExpressAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][country]=VALUE' \
    -d 'carrier_account[credentials][is_reseller]=VALUE' |
    json_pp

# DhlParcelAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DhlParcelAccount' \
    -d 'carrier_account[description]=DhlParcelAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][user_id]=VALUE' \
    -d 'carrier_account[test_credentials][account_number]=VALUE' \
    -d 'carrier_account[test_credentials][api_key]=VALUE' \
    -d 'carrier_account[test_credentials][user_id]=VALUE' |
    json_pp

# DicomAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DicomAccount' \
    -d 'carrier_account[description]=DicomAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][ftp_password]=VALUE' \
    -d 'carrier_account[credentials][ftp_username]=VALUE' \
    -d 'carrier_account[credentials][seed_number]=VALUE' |
    json_pp

# DirectLinkAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DirectLinkAccount' \
    -d 'carrier_account[description]=DirectLinkAccount' \
    -d 'carrier_account[credentials][customer_code]=VALUE' \
    -d 'carrier_account[credentials][service_id]=VALUE' |
    json_pp

# DpdAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DpdAccount' \
    -d 'carrier_account[description]=DpdAccount' \
    -d 'carrier_account[credentials][customer_number]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[test_credentials][customer_number]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][username]=VALUE' |
    json_pp

# DpdUkAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=DpdUkAccount' \
    -d 'carrier_account[description]=DpdUkAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' |
    json_pp

# EstafetaAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=EstafetaAccount' \
    -d 'carrier_account[description]=EstafetaAccount' \
    -d 'carrier_account[credentials][client_id]=VALUE' \
    -d 'carrier_account[credentials][customer_id]=VALUE' \
    -d 'carrier_account[credentials][customer_number]=VALUE' \
    -d 'carrier_account[credentials][hub_id]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][secret_key]=VALUE' \
    -d 'carrier_account[credentials][user_id]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[test_credentials][client_id]=VALUE' \
    -d 'carrier_account[test_credentials][customer_id]=VALUE' \
    -d 'carrier_account[test_credentials][customer_number]=VALUE' \
    -d 'carrier_account[test_credentials][hub_id]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][secret_key]=VALUE' \
    -d 'carrier_account[test_credentials][user_id]=VALUE' \
    -d 'carrier_account[test_credentials][username]=VALUE' |
    json_pp

# FastwayAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=FastwayAccount' \
    -d 'carrier_account[description]=FastwayAccount' \
    -d 'carrier_account[credentials][api_key]=VALUE' |
    json_pp

# FedexAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts/register \
    -u 'API_KEY': \
    -d 'carrier_account[type]=FedexAccount' \
    -d 'carrier_account[description]=FedexAccount' \
    -d 'carrier_account[registration_data][shipping_city]=VALUE' \
    -d 'carrier_account[registration_data][shipping_country_code]=VALUE' \
    -d 'carrier_account[registration_data][shipping_postal_code]=VALUE' \
    -d 'carrier_account[registration_data][shipping_state]=VALUE' \
    -d 'carrier_account[registration_data][shipping_streets]=VALUE' \
    -d 'carrier_account[registration_data][corporate_city]=VALUE' \
    -d 'carrier_account[registration_data][corporate_company_name]=VALUE' \
    -d 'carrier_account[registration_data][corporate_country_code]=VALUE' \
    -d 'carrier_account[registration_data][corporate_email_address]=VALUE' \
    -d 'carrier_account[registration_data][corporate_first_name]=VALUE' \
    -d 'carrier_account[registration_data][corporate_job_title]=VALUE' \
    -d 'carrier_account[registration_data][corporate_last_name]=VALUE' \
    -d 'carrier_account[registration_data][corporate_phone_number]=VALUE' \
    -d 'carrier_account[registration_data][corporate_postal_code]=VALUE' \
    -d 'carrier_account[registration_data][corporate_state]=VALUE' \
    -d 'carrier_account[registration_data][corporate_streets]=VALUE' \
    -d 'carrier_account[registration_data][account_number]=VALUE' |
    json_pp

# FedexCrossBorderAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=FedexCrossBorderAccount' \
    -d 'carrier_account[description]=FedexCrossBorderAccount' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][origin_hub]=VALUE' \
    -d 'carrier_account[test_credentials][api_key]=VALUE' \
    -d 'carrier_account[test_credentials][origin_hub]=VALUE' |
    json_pp

# FedexMailviewAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=FedexMailviewAccount' \
    -d 'carrier_account[description]=FedexMailviewAccount' \
    -d 'carrier_account[credentials][customer_id]=VALUE' \
    -d 'carrier_account[credentials][fimspremium]=VALUE' \
    -d 'carrier_account[credentials][fimsstandard]=VALUE' \
    -d 'carrier_account[credentials][mailviewlight]=VALUE' \
    -d 'carrier_account[credentials][mailviewpremium]=VALUE' \
    -d 'carrier_account[credentials][service_id]=VALUE' |
    json_pp

# FedexSamedayCityAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=FedexSamedayCityAccount' \
    -d 'carrier_account[description]=FedexSamedayCityAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][tracking_api_key]=VALUE' |
    json_pp

# FedexSmartpostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts/register \
    -u 'API_KEY': \
    -d 'carrier_account[type]=FedexSmartpostAccount' \
    -d 'carrier_account[description]=FedexSmartpostAccount' \
    -d 'carrier_account[registration_data][shipping_city]=VALUE' \
    -d 'carrier_account[registration_data][shipping_country_code]=VALUE' \
    -d 'carrier_account[registration_data][shipping_postal_code]=VALUE' \
    -d 'carrier_account[registration_data][shipping_state]=VALUE' \
    -d 'carrier_account[registration_data][shipping_streets]=VALUE' \
    -d 'carrier_account[registration_data][corporate_city]=VALUE' \
    -d 'carrier_account[registration_data][corporate_company_name]=VALUE' \
    -d 'carrier_account[registration_data][corporate_country_code]=VALUE' \
    -d 'carrier_account[registration_data][corporate_email_address]=VALUE' \
    -d 'carrier_account[registration_data][corporate_first_name]=VALUE' \
    -d 'carrier_account[registration_data][corporate_job_title]=VALUE' \
    -d 'carrier_account[registration_data][corporate_last_name]=VALUE' \
    -d 'carrier_account[registration_data][corporate_phone_number]=VALUE' \
    -d 'carrier_account[registration_data][corporate_postal_code]=VALUE' \
    -d 'carrier_account[registration_data][corporate_state]=VALUE' \
    -d 'carrier_account[registration_data][corporate_streets]=VALUE' \
    -d 'carrier_account[registration_data][account_number]=VALUE' \
    -d 'carrier_account[registration_data][hub_id]=VALUE' |
    json_pp

# GlobegisticsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=GlobegisticsAccount' \
    -d 'carrier_account[description]=GlobegisticsAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][facility]=VALUE' |
    json_pp

# GsoAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=GsoAccount' \
    -d 'carrier_account[description]=GsoAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' |
    json_pp

# HermesAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=HermesAccount' \
    -d 'carrier_account[description]=HermesAccount' \
    -d 'carrier_account[credentials][client_id]=VALUE' \
    -d 'carrier_account[credentials][client_licence]=VALUE' \
    -d 'carrier_account[credentials][client_name]=VALUE' \
    -d 'carrier_account[credentials][group_id]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' |
    json_pp

# HongKongPostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=HongKongPostAccount' \
    -d 'carrier_account[description]=HongKongPostAccount' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][integrator_username]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[test_credentials][api_key]=VALUE' \
    -d 'carrier_account[test_credentials][integrator_username]=VALUE' \
    -d 'carrier_account[test_credentials][username]=VALUE' |
    json_pp

# InterlinkExpressAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=InterlinkExpressAccount' \
    -d 'carrier_account[description]=InterlinkExpressAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[credentials][vat_number]=VALUE' |
    json_pp

# JancoFreightAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=JancoFreightAccount' \
    -d 'carrier_account[description]=JancoFreightAccount' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' |
    json_pp

# LasershipV2Account
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=LasershipV2Account' \
    -d 'carrier_account[description]=LasershipV2Account' \
    -d 'carrier_account[credentials][api_id]=VALUE' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][cargo_claim_value]=VALUE' \
    -d 'carrier_account[credentials][facility]=VALUE' \
    -d 'carrier_account[credentials][injection_city]=VALUE' \
    -d 'carrier_account[credentials][injection_contact]=VALUE' \
    -d 'carrier_account[credentials][injection_country]=VALUE' \
    -d 'carrier_account[credentials][injection_email]=VALUE' \
    -d 'carrier_account[credentials][injection_instruction]=VALUE' \
    -d 'carrier_account[credentials][injection_location_type]=VALUE' \
    -d 'carrier_account[credentials][injection_note]=VALUE' \
    -d 'carrier_account[credentials][injection_organization]=VALUE' \
    -d 'carrier_account[credentials][injection_phone]=VALUE' \
    -d 'carrier_account[credentials][injection_phone_ext]=VALUE' \
    -d 'carrier_account[credentials][injection_state]=VALUE' \
    -d 'carrier_account[credentials][injection_street1]=VALUE' \
    -d 'carrier_account[credentials][injection_street2]=VALUE' \
    -d 'carrier_account[credentials][injection_zip]=VALUE' \
    -d 'carrier_account[credentials][is_reseller]=VALUE' |
    json_pp

# LieferyAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=LieferyAccount' \
    -d 'carrier_account[description]=LieferyAccount' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[test_credentials][api_key]=VALUE' |
    json_pp

# LoomisExpressAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=LoomisExpressAccount' \
    -d 'carrier_account[description]=LoomisExpressAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[test_credentials][account_number]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][username]=VALUE' |
    json_pp

# LsoAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=LsoAccount' \
    -d 'carrier_account[description]=LsoAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[test_credentials][account_number]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][username]=VALUE' |
    json_pp

# NewgisticsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=NewgisticsAccount' \
    -d 'carrier_account[description]=NewgisticsAccount' \
    -d 'carrier_account[credentials][client_facility_id]=VALUE' \
    -d 'carrier_account[credentials][client_id]=VALUE' \
    -d 'carrier_account[credentials][client_secret]=VALUE' \
    -d 'carrier_account[credentials][fulfiller_facility_id]=VALUE' \
    -d 'carrier_account[credentials][merchant_id]=VALUE' \
    -d 'carrier_account[credentials][tracking_api_key]=VALUE' \
    -d 'carrier_account[test_credentials][client_facility_id]=VALUE' \
    -d 'carrier_account[test_credentials][client_id]=VALUE' \
    -d 'carrier_account[test_credentials][client_secret]=VALUE' \
    -d 'carrier_account[test_credentials][fulfiller_facility_id]=VALUE' \
    -d 'carrier_account[test_credentials][merchant_id]=VALUE' \
    -d 'carrier_account[test_credentials][tracking_api_key]=VALUE' |
    json_pp

# OmniParcelAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=OmniParcelAccount' \
    -d 'carrier_account[description]=OmniParcelAccount' \
    -d 'carrier_account[credentials][api_access_key]=VALUE' \
    -d 'carrier_account[credentials][return_api_access_key]=VALUE' \
    -d 'carrier_account[test_credentials][api_access_key]=VALUE' \
    -d 'carrier_account[test_credentials][return_api_access_key]=VALUE' |
    json_pp

# OntracAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=OntracAccount' \
    -d 'carrier_account[description]=OntracAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][account_number]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' |
    json_pp

# OsmWorldwideAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=OsmWorldwideAccount' \
    -d 'carrier_account[description]=OsmWorldwideAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][company_name]=VALUE' \
    -d 'carrier_account[credentials][facility_code]=VALUE' \
    -d 'carrier_account[credentials][mailer_id]=VALUE' \
    -d 'carrier_account[credentials][sftp_password]=VALUE' \
    -d 'carrier_account[credentials][sftp_username]=VALUE' |
    json_pp

# ParcelForceAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=ParcelForceAccount' \
    -d 'carrier_account[description]=ParcelForceAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][department_id]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[test_credentials][account_number]=VALUE' \
    -d 'carrier_account[test_credentials][department_id]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][username]=VALUE' |
    json_pp

# PassportGlobalAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=PassportGlobalAccount' \
    -d 'carrier_account[description]=PassportGlobalAccount' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][company_name]=VALUE' \
    -d 'carrier_account[credentials][email]=VALUE' \
    -d 'carrier_account[credentials][name]=VALUE' \
    -d 'carrier_account[credentials][phone]=VALUE' \
    -d 'carrier_account[test_credentials][api_key]=VALUE' \
    -d 'carrier_account[test_credentials][company_name]=VALUE' \
    -d 'carrier_account[test_credentials][email]=VALUE' \
    -d 'carrier_account[test_credentials][name]=VALUE' \
    -d 'carrier_account[test_credentials][phone]=VALUE' |
    json_pp

# PcfFinalMileAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=PcfFinalMileAccount' \
    -d 'carrier_account[description]=PcfFinalMileAccount' \
    -d 'carrier_account[credentials][client_id]=VALUE' \
    -d 'carrier_account[credentials][key]=VALUE' \
    -d 'carrier_account[test_credentials][client_id]=VALUE' \
    -d 'carrier_account[test_credentials][key]=VALUE' |
    json_pp

# PilotAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=PilotAccount' \
    -d 'carrier_account[description]=PilotAccount' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' |
    json_pp

# PostnlAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=PostnlAccount' \
    -d 'carrier_account[description]=PostnlAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][collection_location]=VALUE' \
    -d 'carrier_account[credentials][customer_code]=VALUE' \
    -d 'carrier_account[credentials][global_pack]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' |
    json_pp

# PurolatorAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=PurolatorAccount' \
    -d 'carrier_account[description]=PurolatorAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' |
    json_pp

# RRDonnelleyAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=RRDonnelleyAccount' \
    -d 'carrier_account[description]=RRDonnelleyAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' |
    json_pp

# RoyalMailAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=RoyalMailAccount' \
    -d 'carrier_account[description]=RoyalMailAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][posting_location_number]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' |
    json_pp

# SekoAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=SekoAccount' \
    -d 'carrier_account[description]=SekoAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][key]=VALUE' |
    json_pp

# SingaporePostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=SingaporePostAccount' \
    -d 'carrier_account[description]=SingaporePostAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][contract_id]=VALUE' \
    -d 'carrier_account[credentials][customer_id]=VALUE' \
    -d 'carrier_account[credentials][encryption_key]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][username]=VALUE' \
    -d 'carrier_account[test_credentials][account_number]=VALUE' \
    -d 'carrier_account[test_credentials][contract_id]=VALUE' \
    -d 'carrier_account[test_credentials][customer_id]=VALUE' \
    -d 'carrier_account[test_credentials][encryption_key]=VALUE' \
    -d 'carrier_account[test_credentials][password]=VALUE' \
    -d 'carrier_account[test_credentials][username]=VALUE' |
    json_pp

# SpeedeeAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=SpeedeeAccount' \
    -d 'carrier_account[description]=SpeedeeAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][ftp_password]=VALUE' \
    -d 'carrier_account[credentials][ftp_username]=VALUE' |
    json_pp

# StarTrackAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=StarTrackAccount' \
    -d 'carrier_account[description]=StarTrackAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[credentials][api_secret]=VALUE' \
    -d 'carrier_account[credentials][print_as_you_go]=VALUE' |
    json_pp

# TforceAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=TforceAccount' \
    -d 'carrier_account[description]=TforceAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][ftp_domain]=VALUE' \
    -d 'carrier_account[credentials][ftp_password]=VALUE' \
    -d 'carrier_account[credentials][ftp_username]=VALUE' |
    json_pp

# UdsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=UdsAccount' \
    -d 'carrier_account[description]=UdsAccount' \
    -d 'carrier_account[credentials][ftp_password]=VALUE' \
    -d 'carrier_account[credentials][ftp_username]=VALUE' |
    json_pp

# UpsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=UpsAccount' \
    -d 'carrier_account[description]=UpsAccount'

# UpsIparcelAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=UpsIparcelAccount' \
    -d 'carrier_account[description]=UpsIparcelAccount' \
    -d 'carrier_account[credentials][api_key]=VALUE' |
    json_pp

# UpsMailInnovationsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=UpsMailInnovationsAccount' \
    -d 'carrier_account[description]=UpsMailInnovationsAccount' \
    -d 'carrier_account[credentials][account_number]=VALUE' \
    -d 'carrier_account[credentials][password]=VALUE' \
    -d 'carrier_account[credentials][user_id]=VALUE' |
    json_pp

# UspsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=UspsAccount' \
    -d 'carrier_account[description]=UspsAccount' \
    -d 'carrier_account[credentials][address_city]=VALUE' \
    -d 'carrier_account[credentials][address_state]=VALUE' \
    -d 'carrier_account[credentials][address_street]=VALUE' \
    -d 'carrier_account[credentials][address_zip]=VALUE' \
    -d 'carrier_account[credentials][company_name]=VALUE' \
    -d 'carrier_account[credentials][email]=VALUE' \
    -d 'carrier_account[credentials][phone]=VALUE' \
    -d 'carrier_account[credentials][shipper_id]=VALUE' |
    json_pp

# VehoAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
    -u 'API_KEY': \
    -d 'carrier_account[type]=VehoAccount' \
    -d 'carrier_account[description]=VehoAccount' \
    -d 'carrier_account[credentials][api_key]=VALUE' \
    -d 'carrier_account[test_credentials][api_key]=VALUE' |
    json_pp
