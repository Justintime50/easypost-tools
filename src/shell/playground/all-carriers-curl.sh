# shellcheck disable=SC2148

# APCACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=ApcAccount' \
-d 'carrier_account[description]=APC Account' \
-d 'carrier_account[credentials][shipper_id]=SHIPPER_ID' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][facility]=FACILITY'

# ARAMEXACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=AramexAccount' \
-d 'carrier_account[description]=Aramex Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][account_entity]=ACCOUNT_ENTITY' \
-d 'carrier_account[credentials][account_pin]=ACCOUNT_PIN' \
-d 'carrier_account[credentials][account_country]=ACCOUNT_COUNTRY'

# ARROWXLACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=ArrowxlAccount' \
-d 'carrier_account[description]=ArrowXL Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][ftp_username]=FTP_USERNAME' \
-d 'carrier_account[credentials][ftp_password]=FTP_PASSWORD' \
-d 'carrier_account[credentials][tac]=TAC' \
-d 'carrier_account[credentials][seed_number]=SEED_NUMBER' \
-d 'carrier_account[credentials][barcode_range_size]=BARCODE_RANGE_SIZE'

# ASENDIAACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=AsendiaAccount' \
-d 'carrier_account[description]=Asendia USA Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][company_name]=COMPANY_NAME' \
-d 'carrier_account[credentials][ftp_username]=FTP_USERNAME' \
-d 'carrier_account[credentials][ftp_password]=FTP_PASSWORD' \
-d 'carrier_account[credentials][prioritytracked]=PRIORITYTRACKED' \
-d 'carrier_account[credentials][pmi]=PMI' \
-d 'carrier_account[credentials][epacket]=EPACKET' \
-d 'carrier_account[credentials][internationalexpress]=INTERNATIONALEXPRESS' \
-d 'carrier_account[credentials][ipa]=IPA' \
-d 'carrier_account[credentials][isal]=ISAL' \
-d 'carrier_account[credentials][pmei]=PMEI' \
-d 'carrier_account[credentials][other]=OTHER'

# ASENDIAEUROPEACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=AsendiaEuropeAccount' \
-d 'carrier_account[description]=Asendia Europe Account' \
-d 'carrier_account[credentials][password]=PASSWORD'

# AUSTRALIAPOSTACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=AustraliaPostAccount' \
-d 'carrier_account[description]=Australia Post Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[credentials][api_secret]=API_SECRET' \
-d 'carrier_account[credentials][print_as_you_go]=PRINT_AS_YOU_GO'

# AXLEHIREV3ACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=AxlehireV3Account' \
-d 'carrier_account[description]=AxlehireV3 Account' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[test_credentials][api_key]=API_KEY'

# CANADAPOSTACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=CanadaPostAccount' \
-d 'carrier_account[description]=CanadaPost Account' \
-d 'carrier_account[reference]=Canada Shipping' \
-d 'carrier_account[credentials][api_key]=CANADA_POST_API_KEY' \
-d 'carrier_account[credentials][contract_id]=CONTRACT_ID' \
-d 'carrier_account[credentials][customer_number]=CUSTOMER_NUMBER' \
-d 'carrier_account[credentials][not_platform]=true'

# CANPARACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=CanparAccount' \
-d 'carrier_account[description]=Canpar Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD'

# COLISPRIVEACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=ColisPriveAccount' \
-d 'carrier_account[description]=Colis Prive Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][account_id]=ACCOUNT_ID' \
-d 'carrier_account[credentials][customer_id]=CUSTOMER_ID'

# COLUMBUSLASTMILEACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=ColumbusLastMileAccount' \
-d 'carrier_account[description]=Columbus Last Mile Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][tracking_code_prefix]=TRACKING_CODE_PREFIX' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][tracking_code_prefix]=TRACKING_CODE_PREFIX'

# COURIERSPLEASEACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=CouriersPleaseAccount' \
-d 'carrier_account[description]=CouriersPlease Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD'

# DHLGMIACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DHLGMIAccount' \
-d 'carrier_account[description]=DHL Global Mail International Account' \
-d 'carrier_account[credentials][shipper_id]=SHIPPER_ID' \
-d 'carrier_account[credentials][pickup_id]=PICKUP_ID' \
-d 'carrier_account[credentials][facility]=FACILITY' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][account]=ACCOUNT'

# DAIPOSTACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DaiPostAccount' \
-d 'carrier_account[description]=Dai Post Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][origin_terminal]=ORIGIN_TERMINAL' \
-d 'carrier_account[credentials][account_code]=ACCOUNT_CODE'

# DELIVACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DelivAccount' \
-d 'carrier_account[description]=Deliv Account' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[credentials][facility]=FACILITY' \
-d 'carrier_account[test_credentials][api_key]=API_KEY' \
-d 'carrier_account[test_credentials][facility]=FACILITY'

# DEUTSCHEPOSTACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DeutschePostAccount' \
-d 'carrier_account[description]=Deutsche Post Account' \
-d 'carrier_account[credentials][barcode_prefix]=BARCODE_PREFIX' \
-d 'carrier_account[credentials][barcode_range_start]=BARCODE_RANGE_START' \
-d 'carrier_account[credentials][barcode_range_size]=BARCODE_RANGE_SIZE'

# DEUTSCHEPOSTUKACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DeutschePostUKAccount' \
-d 'carrier_account[description]=Deutsche Post UK Account' \
-d 'carrier_account[credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[credentials][client_secret]=CLIENT_SECRET' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[test_credentials][client_secret]=CLIENT_SECRET' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER'

# DHLECOMMERCEACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DhlEcommerceAccount' \
-d 'carrier_account[description]=DHL eCommerce Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[credentials][pickup_account_id]=PICKUP_ACCOUNT_ID' \
-d 'carrier_account[credentials][billing_ref_one]=BILLING_REF_ONE' \
-d 'carrier_account[credentials][ftp_username]=FTP_USERNAME' \
-d 'carrier_account[credentials][ftp_password]=FTP_PASSWORD' \
-d 'carrier_account[credentials][facility_code]=FACILITY_CODE' \
-d 'carrier_account[credentials][merchant_id]=MERCHANT_ID' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[test_credentials][pickup_account_id]=PICKUP_ACCOUNT_ID' \
-d 'carrier_account[test_credentials][billing_ref_one]=BILLING_REF_ONE' \
-d 'carrier_account[test_credentials][ftp_username]=FTP_USERNAME' \
-d 'carrier_account[test_credentials][ftp_password]=FTP_PASSWORD' \
-d 'carrier_account[test_credentials][facility_code]=FACILITY_CODE' \
-d 'carrier_account[test_credentials][merchant_id]=MERCHANT_ID'

# DHLECOMMERCEASIAACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DhlEcommerceAsiaAccount' \
-d 'carrier_account[description]=DHL Ecommerce Asia Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][barcode_prefix]=BARCODE_PREFIX' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[test_credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][barcode_prefix]=BARCODE_PREFIX'

# DHLEXPRESSACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DhlExpressAccount' \
-d 'carrier_account[description]=DHL Express Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][country]=COUNTRY' \
-d 'carrier_account[credentials][is_reseller]=IS_RESELLER'

# DHLPARCELACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DhlParcelAccount' \
-d 'carrier_account[description]=DHL Parcel Account' \
-d 'carrier_account[credentials][user_id]=USER_ID' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][user_id]=USER_ID' \
-d 'carrier_account[test_credentials][api_key]=API_KEY' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER'

# DICOMACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DicomAccount' \
-d 'carrier_account[description]=Dicom Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][ftp_username]=FTP_USERNAME' \
-d 'carrier_account[credentials][ftp_password]=FTP_PASSWORD' \
-d 'carrier_account[credentials][seed_number]=SEED_NUMBER'

# DIRECTLINKACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DirectLinkAccount' \
-d 'carrier_account[description]=Direct Link Account' \
-d 'carrier_account[credentials][customer_code]=CUSTOMER_CODE' \
-d 'carrier_account[credentials][service_id]=SERVICE_ID'

# DOORMANACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DoormanAccount' \
-d 'carrier_account[description]=Doorman Account' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[test_credentials][api_key]=API_KEY'

# DPDACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DpdAccount' \
-d 'carrier_account[description]=DPD Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][customer_number]=CUSTOMER_NUMBER' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][customer_number]=CUSTOMER_NUMBER'

# DPDUKACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=DpdUkAccount' \
-d 'carrier_account[description]=DPD UK Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD'

# ESTAFETAACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=EstafetaAccount' \
-d 'carrier_account[description]=Estafeta Account' \
-d 'carrier_account[credentials][customer_id]=CUSTOMER_ID' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[credentials][user_id]=USER_ID' \
-d 'carrier_account[credentials][secret_key]=SECRET_KEY' \
-d 'carrier_account[credentials][customer_number]=CUSTOMER_NUMBER' \
-d 'carrier_account[credentials][hub_id]=HUB_ID' \
-d 'carrier_account[test_credentials][customer_id]=CUSTOMER_ID' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[test_credentials][user_id]=USER_ID' \
-d 'carrier_account[test_credentials][secret_key]=SECRET_KEY' \
-d 'carrier_account[test_credentials][customer_number]=CUSTOMER_NUMBER' \
-d 'carrier_account[test_credentials][hub_id]=HUB_ID'

# ESTESACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=EstesAccount' \
-d 'carrier_account[description]=Estes Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD'

# FASTWAYACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=FastwayAccount' \
-d 'carrier_account[description]=Fastway Account' \
-d 'carrier_account[credentials][api_key]=API_KEY'

# FEDEXACCOUNT (CSP)
curl -X POST https://api.easypost.com/v2/carrier_accounts/register \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=FedexAccount' \
-d 'carrier_account[description]=FedEx Account' \
-d 'carrier_account[registration_data][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[registration_data][corporate_first_name]=CORPORATE_FIRST_NAME' \
-d 'carrier_account[registration_data][corporate_last_name]=CORPORATE_LAST_NAME' \
-d 'carrier_account[registration_data][corporate_company_name]=CORPORATE_COMPANY_NAME' \
-d 'carrier_account[registration_data][corporate_phone_number]=CORPORATE_PHONE_NUMBER' \
-d 'carrier_account[registration_data][corporate_email_address]=CORPORATE_EMAIL_ADDRESS' \
-d 'carrier_account[registration_data][corporate_streets]=CORPORATE_STREETS' \
-d 'carrier_account[registration_data][corporate_city]=CORPORATE_CITY' \
-d 'carrier_account[registration_data][corporate_state]=CORPORATE_STATE' \
-d 'carrier_account[registration_data][corporate_postal_code]=CORPORATE_POSTAL_CODE' \
-d 'carrier_account[registration_data][corporate_country_code]=CORPORATE_COUNTRY_CODE' \
-d 'carrier_account[registration_data][corporate_job_title]=CORPORATE_JOB_TITLE' \
-d 'carrier_account[registration_data][shipping_streets]=SHIPPING_STREETS' \
-d 'carrier_account[registration_data][shipping_city]=SHIPPING_CITY' \
-d 'carrier_account[registration_data][shipping_state]=SHIPPING_STATE' \
-d 'carrier_account[registration_data][shipping_postal_code]=SHIPPING_POSTAL_CODE' \
-d 'carrier_account[registration_data][shipping_country_code]=SHIPPING_COUNTRY_CODE'

# FEDEXACCOUNT (non-US/CA)
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=FedexAccount' \
-d 'carrier_account[description]=FedEx Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][meter_number]=METER_NUMBER' \
-d 'carrier_account[credentials][key]=KEY' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][meter_number]=METER_NUMBER' \
-d 'carrier_account[test_credentials][key]=KEY' \
-d 'carrier_account[test_credentials][password]=PASSWORD'

# FEDEXMAILVIEWACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=FedexMailviewAccount' \
-d 'carrier_account[description]=FedEx MailView Account' \
-d 'carrier_account[credentials][customer_id]=CUSTOMER_ID' \
-d 'carrier_account[credentials][service_id]=SERVICE_ID' \
-d 'carrier_account[credentials][fimspremium]=FIMSPREMIUM' \
-d 'carrier_account[credentials][fimsstandard]=FIMSSTANDARD' \
-d 'carrier_account[credentials][mailviewpremium]=MAILVIEWPREMIUM' \
-d 'carrier_account[credentials][mailviewlight]=MAILVIEWLIGHT'

# FEDEXSAMEDAYCITYACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=FedexSamedayCityAccount' \
-d 'carrier_account[description]=FedEx SameDay City Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[credentials][tracking_api_key]=TRACKING_API_KEY'

# FEDEXSMARTPOSTACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=FedexSmartpostAccount' \
-d 'carrier_account[description]=FedEx SmartPost Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][hub_id]=HUB_ID' \
-d 'carrier_account[credentials][meter_number]=METER_NUMBER'

# FEDEXCROSSBORDERACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=FedexCrossBorderAccount' \
-d 'carrier_account[description]=FedEx Cross Border Account' \
-d 'carrier_account[credentials][api_key]=VALUE' \
-d 'carrier_account[credentials][origin_hub]=VALUE'
-d 'carrier_account[test_credentials][api_key]=VALUE' \
-d 'carrier_account[test_credentials][origin_hub]=VALUE'

# FROMPARCELACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=FromParcelAccount' \
-d 'carrier_account[description]=Parcel Account' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[test_credentials][api_key]=API_KEY'

# GLOBEGISTICSACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=GlobegisticsAccount' \
-d 'carrier_account[description]=Globegistics Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][facility]=FACILITY'

# GSOACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=GsoAccount' \
-d 'carrier_account[description]=GSO Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD'

# HERMESACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=HermesAccount' \
-d 'carrier_account[description]=Hermes Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[credentials][client_name]=CLIENT_NAME' \
-d 'carrier_account[credentials][group_id]=GROUP_ID' \
-d 'carrier_account[credentials][client_licence]=CLIENT_LICENCE'

# HONGKONGPOSTACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=HongKongPostAccount' \
-d 'carrier_account[description]=Hong Kong Post Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][integrator_username]=INTEGRATOR_USERNAME' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][integrator_username]=INTEGRATOR_USERNAME' \
-d 'carrier_account[test_credentials][api_key]=API_KEY'

# INTERLINKEXPRESSACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=InterlinkExpressAccount' \
-d 'carrier_account[description]=Interlink Express Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][vat_number]=VAT_NUMBER'

# JANCOFREIGHTACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=JancoFreightAccount' \
-d 'carrier_account[description]=Janco Freight Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD'

# LASERSHIPV2ACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=LasershipV2Account' \
-d 'carrier_account[description]=LaserShipV2 Account' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[credentials][api_id]=API_ID' \
-d 'carrier_account[credentials][facility]=FACILITY' \
-d 'carrier_account[credentials][is_reseller]=1' \
-d 'carrier_account[credentials][cargo_claim_value]=CARGO_CLAIM_VALUE' \
-d 'carrier_account[credentials][injection_location_type]=VALUE' \
-d 'carrier_account[credentials][injection_contact]=VALUE' \
-d 'carrier_account[credentials][injection_organization]=VALUE' \
-d 'carrier_account[credentials][injection_street1]=VALUE' \
-d 'carrier_account[credentials][injection_street2]=VALUE' \
-d 'carrier_account[credentials][injection_zip]=VALUE' \
-d 'carrier_account[credentials][injection_city]=VALUE' \
-d 'carrier_account[credentials][injection_state]=VALUE' \
-d 'carrier_account[credentials][injection_country]=VALUE' \
-d 'carrier_account[credentials][injection_phone]=VALUE' \
-d 'carrier_account[credentials][injection_phone_ext]=VALUE' \
-d 'carrier_account[credentials][injection_email]=VALUE' \
-d 'carrier_account[credentials][injection_instruction]=VALUE' \
-d 'carrier_account[credentials][injection_note]=VALUE'

# LIEFERYACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=LieferyAccount' \
-d 'carrier_account[description]=Liefery Account' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[test_credentials][api_key]=API_KEY'

# LOOMISEXPRESSACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=LoomisExpressAccount' \
-d 'carrier_account[description]=Loomis Express Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD'

# LSOACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=LsoAccount' \
-d 'carrier_account[description]=LSO Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD'

# NETWORK4ACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=Network4Account' \
-d 'carrier_account[description]=Network4 Account' \
-d 'carrier_account[credentials][api_key]=API_KEY'

# NEWGISTICSACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=NewgisticsAccount' \
-d 'carrier_account[description]=Newgistics Account' \
-d 'carrier_account[credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[credentials][client_secret]=CLIENT_SECRET' \
-d 'carrier_account[credentials][client_facility_id]=CLIENT_FACILITY_ID' \
-d 'carrier_account[credentials][fulfiller_facility_id]=FULFILLER_FACILITY_ID' \
-d 'carrier_account[credentials][tracking_api_key]=TRACKING_API_KEY' \
-d 'carrier_account[credentials][merchant_id]=MERCHANT_ID' \
-d 'carrier_account[test_credentials][client_id]=CLIENT_ID' \
-d 'carrier_account[test_credentials][client_secret]=CLIENT_SECRET' \
-d 'carrier_account[test_credentials][client_facility_id]=CLIENT_FACILITY_ID' \
-d 'carrier_account[test_credentials][fulfiller_facility_id]=FULFILLER_FACILITY_ID' \
-d 'carrier_account[test_credentials][tracking_api_key]=TRACKING_API_KEY' \
-d 'carrier_account[test_credentials][merchant_id]=MERCHANT_ID'

# NORCOACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=NorcoAccount' \
-d 'carrier_account[description]=Norco Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER'

# OMNIPARCELACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=OmniParcelAccount' \
-d 'carrier_account[description]=OmniParcel Account' \
-d 'carrier_account[credentials][api_access_key]=API_ACCESS_KEY' \
-d 'carrier_account[test_credentials][api_access_key]=API_ACCESS_KEY'

# ONTRACACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=OntracAccount' \
-d 'carrier_account[description]=OnTrac Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][password]=PASSWORD'

# ONTRACDIRECTPOSTACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=OntracDirectPostAccount' \
-d 'carrier_account[description]=OnTrac DirectPost Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][mailer_id]=MAILER_ID' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][mailer_id]=MAILER_ID'

# ORANGEDSACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=OrangeDSAccount' \
-d 'carrier_account[description]=Orange DS Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][account_id]=ACCOUNT_ID' \
-d 'carrier_account[credentials][ftp_username]=FTP_USERNAME' \
-d 'carrier_account[credentials][ftp_password]=FTP_PASSWORD'

# OSMWORLDWIDEACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=OsmWorldwideAccount' \
-d 'carrier_account[description]=OSM Worldwide Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][mailer_id]=MAILER_ID' \
-d 'carrier_account[credentials][facility_code]=FACILITY_CODE' \
-d 'carrier_account[credentials][company_name]=COMPANY_NAME' \
-d 'carrier_account[credentials][sftp_username]=SFTP_USERNAME' \
-d 'carrier_account[credentials][sftp_password]=SFTP_PASSWORD'

# PARCELFORCEACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=ParcelForceAccount' \
-d 'carrier_account[description]=Parcel Force Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][department_id]=DEPARTMENT_ID' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][department_id]=DEPARTMENT_ID'

# PASSPORTGLOBALACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=PassportGlobalAccount' \
-d 'carrier_account[description]=Passport Global Account' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[credentials][email]=EMAIL' \
-d 'carrier_account[credentials][name]=NAME' \
-d 'carrier_account[credentials][company_name]=COMPANY_NAME' \
-d 'carrier_account[credentials][phone]=PHONE' \
-d 'carrier_account[test_credentials][api_key]=API_KEY' \
-d 'carrier_account[test_credentials][email]=EMAIL' \
-d 'carrier_account[test_credentials][name]=NAME' \
-d 'carrier_account[test_credentials][company_name]=COMPANY_NAME' \
-d 'carrier_account[test_credentials][phone]=PHONE'

# PILOTACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=PilotAccount' \
-d 'carrier_account[description]=Pilot Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD'

# POSTNLACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=PostnlAccount' \
-d 'carrier_account[description]=PostNL Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][customer_code]=CUSTOMER_CODE' \
-d 'carrier_account[credentials][collection_location]=COLLECTION_LOCATION' \
-d 'carrier_account[credentials][global_pack]=GLOBAL_PACK'

# PUROLATORACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=PurolatorAccount' \
-d 'carrier_account[description]=Purolator Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[credentials][password]=PASSWORD'

# RRDONNELLEYACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=RRDonnelleyAccount' \
-d 'carrier_account[description]=RR Donnelley Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER'

# ROYALMAILACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d "carrier_account[type]=RoyalMailAccount" \
-d "carrier_account[description]=RoyalMailAccount" \
-d "carrier_account[reference]=VALUE" \
-d "carrier_account[credentials][account_number]=VALUE" \
-d "carrier_account[credentials][username]=VALUE"

# SEKOACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=SekoAccount' \
-d 'carrier_account[description]=Seko Account' \
-d 'carrier_account[credentials][key]=KEY' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER'

# SINGAPOREPOSTACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=SingaporePostAccount' \
-d 'carrier_account[description]=Singapore Post Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][customer_id]=CUSTOMER_ID' \
-d 'carrier_account[credentials][contract_id]=CONTRACT_ID' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][encryption_key]=ENCRYPTION_KEY' \
-d 'carrier_account[test_credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[test_credentials][customer_id]=CUSTOMER_ID' \
-d 'carrier_account[test_credentials][contract_id]=CONTRACT_ID' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][encryption_key]=ENCRYPTION_KEY'

# SPEEDEEACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=SpeedeeAccount' \
-d 'carrier_account[description]=Spee-Dee Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][ftp_username]=FTP_USERNAME' \
-d 'carrier_account[credentials][ftp_password]=FTP_PASSWORD'

# SPRINTSHIPACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=SprintShipAccount' \
-d 'carrier_account[description]=Sprint Ship Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][account_id]=ACCOUNT_ID' \
-d 'carrier_account[credentials][payment_method_id]=PAYMENT_METHOD_ID' \
-d 'carrier_account[test_credentials][username]=USERNAME' \
-d 'carrier_account[test_credentials][password]=PASSWORD' \
-d 'carrier_account[test_credentials][account_id]=ACCOUNT_ID' \
-d 'carrier_account[test_credentials][payment_method_id]=PAYMENT_METHOD_ID'

# STARTRACKACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=StarTrackAccount' \
-d 'carrier_account[description]=StarTrack Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[credentials][api_secret]=API_SECRET' \
-d 'carrier_account[credentials][print_as_you_go]=PRINT_AS_YOU_GO'

# TFORCEACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=TforceAccount' \
-d 'carrier_account[description]=TForce Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][ftp_username]=FTP_USERNAME' \
-d 'carrier_account[credentials][ftp_password]=FTP_PASSWORD' \
-d 'carrier_account[credentials][ftp_domain]=FTP_DOMAIN'

# UPSACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts/register \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=UpsAccount' \
-d 'carrier_account[description]=UPS Custom Workflow Account' \
-d 'carrier_account[registration_data][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[registration_data][name]=NAME' \
-d 'carrier_account[registration_data][street1]=STREET1' \
-d 'carrier_account[registration_data][city]=CITY' \
-d 'carrier_account[registration_data][state]=STATE' \
-d 'carrier_account[registration_data][postal_code]=POSTAL_CODE' \
-d 'carrier_account[registration_data][country]=COUNTRY' \
-d 'carrier_account[registration_data][email]=EMAIL' \
-d 'carrier_account[registration_data][phone]=PHONE' \
-d 'carrier_account[registration_data][company]=COMPANY' \
-d 'carrier_account[registration_data][website]=WEBSITE' \
-d 'carrier_account[registration_data][title]=TITLE' \
-d 'carrier_account[registration_data][invoice_number]=INVOICE_NUMBER' \
-d 'carrier_account[registration_data][invoice_date]=INVOICE_DATE' \
-d 'carrier_account[registration_data][invoice_amount]=INVOICE_AMOUNT' \
-d 'carrier_account[registration_data][invoice_currency]=INVOICE_CURRENCY' \
-d 'carrier_account[registration_data][invoice_control_id]=INVOICE_CONTROL_ID'

# UPSIPARCELACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=UpsIparcelAccount' \
-d 'carrier_account[description]=UPS i-Parcel Account' \
-d 'carrier_account[credentials][api_key]=API_KEY'

# UPSMAILINNOVATIONSACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=UpsMailInnovationsAccount' \
-d 'carrier_account[description]=UPS Mail Innovations Account' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER' \
-d 'carrier_account[credentials][user_id]=USER_ID' \
-d 'carrier_account[credentials][password]=PASSWORD'

# USPSACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=UspsAccount' \
-d 'carrier_account[description]=USPS Account' \
-d 'carrier_account[credentials][company_name]=COMPANY_NAME' \
-d 'carrier_account[credentials][address_street]=ADDRESS_STREET' \
-d 'carrier_account[credentials][address_city]=ADDRESS_CITY' \
-d 'carrier_account[credentials][address_state]=ADDRESS_STATE' \
-d 'carrier_account[credentials][address_zip]=ADDRESS_ZIP' \
-d 'carrier_account[credentials][phone]=PHONE' \
-d 'carrier_account[credentials][email]=EMAIL' \
-d 'carrier_account[credentials][shipper_id]=SHIPPER_ID'

# VEHOACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=VehoAccount' \
-d 'carrier_account[description]=Veho Account' \
-d 'carrier_account[credentials][api_key]=API_KEY' \
-d 'carrier_account[test_credentials][api_key]=API_KEY'

# YODELACCOUNT
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u <YOUR_PRODUCTION_API_KEY>: \
-d 'carrier_account[type]=YodelAccount' \
-d 'carrier_account[description]=Yodel Account' \
-d 'carrier_account[credentials][username]=USERNAME' \
-d 'carrier_account[credentials][password]=PASSWORD' \
-d 'carrier_account[credentials][account_number]=ACCOUNT_NUMBER'
