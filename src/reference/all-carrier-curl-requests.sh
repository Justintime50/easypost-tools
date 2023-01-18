# AmazonMwsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "AmazonMwsAccount",
  "description": "AmazonMwsAccount",
  "carrier_account": {
    "credentials": {
      "access_key_id": "VALUE",
      "merchant_id": "VALUE",
      "secret_key": "VALUE"
    }
  }
}'

# ApcAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "ApcAccount",
  "description": "ApcAccount",
  "carrier_account": {
    "credentials": {
      "facility": "VALUE",
      "password": "VALUE",
      "shipper_id": "VALUE"
    }
  }
}'

# AsendiaAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "AsendiaAccount",
  "description": "AsendiaAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "company_name": "VALUE",
      "epacket": "VALUE",
      "ftp_password": "VALUE",
      "ftp_username": "VALUE",
      "internationalexpress": "VALUE",
      "ipa": "VALUE",
      "isal": "VALUE",
      "other": "VALUE",
      "pmei": "VALUE",
      "pmi": "VALUE",
      "prioritytracked": "VALUE"
    }
  }
}'

# AsendiaUsaAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "AsendiaUsaAccount",
  "description": "AsendiaUsaAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "api_key": "VALUE",
      "carrier_facility": "VALUE",
      "password": "VALUE",
      "sub_account_number": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "api_key": "VALUE",
      "carrier_facility": "VALUE",
      "password": "VALUE",
      "sub_account_number": "VALUE",
      "username": "VALUE"
    }
  }
}'

# AustraliaPostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "AustraliaPostAccount",
  "description": "AustraliaPostAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "api_key": "VALUE",
      "api_secret": "VALUE",
      "print_as_you_go": "VALUE"
    }
  }
}'

# AxlehireV3Account
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "AxlehireV3Account",
  "description": "AxlehireV3Account",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE"
    },
    "test_credentials": {
      "api_key": "VALUE"
    }
  }
}'

# BetterTrucksAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "BetterTrucksAccount",
  "description": "BetterTrucksAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE"
    },
    "test_credentials": {
      "api_key": "VALUE"
    }
  }
}'

# BondAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "BondAccount",
  "description": "BondAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE"
    },
    "test_credentials": {
      "api_key": "VALUE"
    }
  }
}'

# CanadaPostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "CanadaPostAccount",
  "description": "CanadaPostAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE",
      "contract_id": "VALUE",
      "customer_number": "VALUE",
      "has_credit_card": "VALUE",
      "not_platform": "VALUE"
    },
    "test_credentials": {
      "api_key": "VALUE",
      "contract_id": "VALUE",
      "customer_number": "VALUE",
      "has_credit_card": "VALUE",
      "not_platform": "VALUE"
    }
  }
}'
## REQUIRES CUSTOM WORKFLOW ##

# CanparAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "CanparAccount",
  "description": "CanparAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# ColumbusLastMileAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "ColumbusLastMileAccount",
  "description": "ColumbusLastMileAccount",
  "carrier_account": {
    "credentials": {
      "password": "VALUE",
      "tracking_code_prefix": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "password": "VALUE",
      "tracking_code_prefix": "VALUE",
      "username": "VALUE"
    }
  }
}'

# CourierExpressAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "CourierExpressAccount",
  "description": "CourierExpressAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE",
      "shipper_id": "VALUE"
    },
    "test_credentials": {
      "api_key": "VALUE",
      "shipper_id": "VALUE"
    }
  }
}'

# CouriersPleaseAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "CouriersPleaseAccount",
  "description": "CouriersPleaseAccount",
  "carrier_account": {
    "credentials": {
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# DaiPostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "DaiPostAccount",
  "description": "DaiPostAccount",
  "carrier_account": {
    "credentials": {
      "account_code": "VALUE",
      "origin_terminal": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# DeliverItAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "DeliverItAccount",
  "description": "DeliverItAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# DeutschePostUKAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "DeutschePostUKAccount",
  "description": "DeutschePostUKAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "client_id": "VALUE",
      "client_secret": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "client_id": "VALUE",
      "client_secret": "VALUE"
    }
  }
}'

# DhlEcommerceAsiaAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "DhlEcommerceAsiaAccount",
  "description": "DhlEcommerceAsiaAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "barcode_prefix": "VALUE",
      "client_id": "VALUE",
      "password": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "barcode_prefix": "VALUE",
      "client_id": "VALUE",
      "password": "VALUE"
    }
  }
}'

# DhlEcsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "DhlEcsAccount",
  "description": "DhlEcsAccount",
  "carrier_account": {
    "credentials": {
      "client_id": "VALUE",
      "client_secret": "VALUE",
      "distribution_center": "VALUE",
      "pickup_id": "VALUE"
    },
    "test_credentials": {
      "client_id": "VALUE",
      "client_secret": "VALUE",
      "distribution_center": "VALUE",
      "pickup_id": "VALUE"
    }
  }
}'

# DhlExpressAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "DhlExpressAccount",
  "description": "DhlExpressAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "country": "VALUE",
      "is_reseller": "VALUE",
      "password": "VALUE",
      "site_id": "VALUE"
    }
  }
}'

# DhlPaketAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "DhlPaketAccount",
  "description": "DhlPaketAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "cig_password": "VALUE",
      "cig_username": "VALUE",
      "contract_id": "VALUE",
      "retoure_password": "VALUE",
      "retoure_username": "VALUE",
      "tnt_password": "VALUE",
      "tnt_username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "cig_password": "VALUE",
      "cig_username": "VALUE",
      "contract_id": "VALUE",
      "retoure_password": "VALUE",
      "retoure_username": "VALUE",
      "tnt_password": "VALUE",
      "tnt_username": "VALUE"
    }
  }
}'

# DhlParcelAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "DhlParcelAccount",
  "description": "DhlParcelAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "api_key": "VALUE",
      "user_id": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "api_key": "VALUE",
      "user_id": "VALUE"
    }
  }
}'

# DpdAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "DpdAccount",
  "description": "DpdAccount",
  "carrier_account": {
    "credentials": {
      "customer_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "customer_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# DpdUkAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "DpdUkAccount",
  "description": "DpdUkAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# EstafetaAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "EstafetaAccount",
  "description": "EstafetaAccount",
  "carrier_account": {
    "credentials": {
      "client_id": "VALUE",
      "customer_id": "VALUE",
      "customer_number": "VALUE",
      "hub_id": "VALUE",
      "password": "VALUE",
      "secret_key": "VALUE",
      "user_id": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "client_id": "VALUE",
      "customer_id": "VALUE",
      "customer_number": "VALUE",
      "hub_id": "VALUE",
      "password": "VALUE",
      "secret_key": "VALUE",
      "user_id": "VALUE",
      "username": "VALUE"
    }
  }
}'

# FastwayAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "FastwayAccount",
  "description": "FastwayAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE"
    }
  }
}'

# FedexAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts/register \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "FedexAccount",
  "description": "FedexAccount",
  "registration_data": {
    "shipping_city": "VALUE",
    "shipping_country_code": "VALUE",
    "shipping_postal_code": "VALUE",
    "shipping_state": "VALUE",
    "shipping_streets": "VALUE",
    "corporate_city": "VALUE",
    "corporate_company_name": "VALUE",
    "corporate_country_code": "VALUE",
    "corporate_email_address": "VALUE",
    "corporate_first_name": "VALUE",
    "corporate_job_title": "VALUE",
    "corporate_last_name": "VALUE",
    "corporate_phone_number": "VALUE",
    "corporate_postal_code": "VALUE",
    "corporate_state": "VALUE",
    "corporate_streets": "VALUE",
    "account_number": "VALUE"
  }
}'

# FedexCrossBorderAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "FedexCrossBorderAccount",
  "description": "FedexCrossBorderAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE",
      "origin_hub": "VALUE"
    },
    "test_credentials": {
      "api_key": "VALUE",
      "origin_hub": "VALUE"
    }
  }
}'

# FedexMailviewAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "FedexMailviewAccount",
  "description": "FedexMailviewAccount",
  "carrier_account": {
    "credentials": {
      "customer_id": "VALUE",
      "fimspremium": "VALUE",
      "fimsstandard": "VALUE",
      "mailviewlight": "VALUE",
      "mailviewpremium": "VALUE",
      "service_id": "VALUE"
    }
  }
}'

# FedexSamedayCityAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "FedexSamedayCityAccount",
  "description": "FedexSamedayCityAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "api_key": "VALUE",
      "tracking_api_key": "VALUE"
    }
  }
}'

# FedexSmartpostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts/register \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "FedexSmartpostAccount",
  "description": "FedexSmartpostAccount",
  "registration_data": {
    "shipping_city": "VALUE",
    "shipping_country_code": "VALUE",
    "shipping_postal_code": "VALUE",
    "shipping_state": "VALUE",
    "shipping_streets": "VALUE",
    "corporate_city": "VALUE",
    "corporate_company_name": "VALUE",
    "corporate_country_code": "VALUE",
    "corporate_email_address": "VALUE",
    "corporate_first_name": "VALUE",
    "corporate_job_title": "VALUE",
    "corporate_last_name": "VALUE",
    "corporate_phone_number": "VALUE",
    "corporate_postal_code": "VALUE",
    "corporate_state": "VALUE",
    "corporate_streets": "VALUE",
    "account_number": "VALUE",
    "hub_id": "VALUE"
  }
}'

# FirstMileConciseAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "FirstMileConciseAccount",
  "description": "FirstMileConciseAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# GlobegisticsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "GlobegisticsAccount",
  "description": "GlobegisticsAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "facility": "VALUE"
    }
  }
}'

# GsoAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "GsoAccount",
  "description": "GsoAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# HermesAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "HermesAccount",
  "description": "HermesAccount",
  "carrier_account": {
    "credentials": {
      "client_id": "VALUE",
      "client_licence": "VALUE",
      "client_name": "VALUE",
      "group_id": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# InterlinkExpressAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "InterlinkExpressAccount",
  "description": "InterlinkExpressAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE",
      "vat_number": "VALUE"
    }
  }
}'

# LasershipV2Account
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "LasershipV2Account",
  "description": "LasershipV2Account",
  "carrier_account": {
    "credentials": {
      "api_id": "VALUE",
      "api_key": "VALUE",
      "cargo_claim_value": "VALUE",
      "facility": "VALUE",
      "injection_city": "VALUE",
      "injection_contact": "VALUE",
      "injection_country": "VALUE",
      "injection_email": "VALUE",
      "injection_instruction": "VALUE",
      "injection_location_type": "VALUE",
      "injection_note": "VALUE",
      "injection_organization": "VALUE",
      "injection_phone": "VALUE",
      "injection_phone_ext": "VALUE",
      "injection_state": "VALUE",
      "injection_street1": "VALUE",
      "injection_street2": "VALUE",
      "injection_zip": "VALUE",
      "is_reseller": "VALUE"
    }
  }
}'

# LoomisExpressAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "LoomisExpressAccount",
  "description": "LoomisExpressAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# LsoAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "LsoAccount",
  "description": "LsoAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# NewgisticsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "NewgisticsAccount",
  "description": "NewgisticsAccount",
  "carrier_account": {
    "credentials": {
      "client_facility_id": "VALUE",
      "client_id": "VALUE",
      "client_secret": "VALUE",
      "fulfiller_facility_id": "VALUE",
      "merchant_id": "VALUE",
      "tracking_api_key": "VALUE"
    },
    "test_credentials": {
      "client_facility_id": "VALUE",
      "client_id": "VALUE",
      "client_secret": "VALUE",
      "fulfiller_facility_id": "VALUE",
      "merchant_id": "VALUE",
      "tracking_api_key": "VALUE"
    }
  }
}'

# OmniParcelAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "OmniParcelAccount",
  "description": "OmniParcelAccount",
  "carrier_account": {
    "credentials": {
      "api_access_key": "VALUE",
      "return_api_access_key": "VALUE"
    },
    "test_credentials": {
      "api_access_key": "VALUE",
      "return_api_access_key": "VALUE"
    }
  }
}'

# OntracAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "OntracAccount",
  "description": "OntracAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "password": "VALUE"
    }
  }
}'

# OptimaAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "OptimaAccount",
  "description": "OptimaAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# OsmWorldwideAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "OsmWorldwideAccount",
  "description": "OsmWorldwideAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "aws_sftp_username": "VALUE",
      "company_name": "VALUE",
      "facility_code": "VALUE",
      "mailer_id": "VALUE"
    }
  }
}'

# ParcelForceAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "ParcelForceAccount",
  "description": "ParcelForceAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "department_id": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "department_id": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# ParcllAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "ParcllAccount",
  "description": "ParcllAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE",
      "origin_hub": "VALUE",
      "user_id": "VALUE"
    },
    "test_credentials": {
      "api_key": "VALUE",
      "origin_hub": "VALUE",
      "user_id": "VALUE"
    }
  }
}'

# PassportGlobalAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "PassportGlobalAccount",
  "description": "PassportGlobalAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE",
      "company_name": "VALUE",
      "email": "VALUE",
      "name": "VALUE",
      "phone": "VALUE"
    },
    "test_credentials": {
      "api_key": "VALUE",
      "company_name": "VALUE",
      "email": "VALUE",
      "name": "VALUE",
      "phone": "VALUE"
    }
  }
}'

# PurolatorAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "PurolatorAccount",
  "description": "PurolatorAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "api_key": "VALUE",
      "password": "VALUE"
    }
  }
}'

# RRDonnelleyAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "RRDonnelleyAccount",
  "description": "RRDonnelleyAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE"
    }
  }
}'

# RoyalMailAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "RoyalMailAccount",
  "description": "RoyalMailAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "posting_location_number": "VALUE",
      "username": "VALUE"
    }
  }
}'

# SendleAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "SendleAccount",
  "description": "SendleAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE",
      "user_id": "VALUE"
    },
    "test_credentials": {
      "api_key": "VALUE",
      "user_id": "VALUE"
    }
  }
}'

# SfExpressAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "SfExpressAccount",
  "description": "SfExpressAccount",
  "carrier_account": {
    "credentials": {
      "checkword": "VALUE",
      "customer_code": "VALUE",
      "customer_id": "VALUE"
    },
    "test_credentials": {
      "checkword": "VALUE",
      "customer_code": "VALUE",
      "customer_id": "VALUE"
    }
  }
}'

# SmartKargoAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "SmartKargoAccount",
  "description": "SmartKargoAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE"
    }
  }
}'

# SonicAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "SonicAccount",
  "description": "SonicAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# SpeedeeAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "SpeedeeAccount",
  "description": "SpeedeeAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "ftp_password": "VALUE",
      "ftp_username": "VALUE"
    }
  }
}'

# StarTrackAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "StarTrackAccount",
  "description": "StarTrackAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "api_key": "VALUE",
      "api_secret": "VALUE",
      "print_as_you_go": "VALUE"
    }
  }
}'

# SwyftAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "SwyftAccount",
  "description": "SwyftAccount",
  "carrier_account": {
    "credentials": {
      "password": "VALUE"
    },
    "test_credentials": {
      "password": "VALUE"
    }
  }
}'

# TforceConciseAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "TforceConciseAccount",
  "description": "TforceConciseAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

# UdsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "UdsAccount",
  "description": "UdsAccount",
  "carrier_account": {
    "credentials": {
      "ftp_password": "VALUE",
      "ftp_username": "VALUE"
    }
  }
}'

# UpsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \

# UpsIparcelAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "UpsIparcelAccount",
  "description": "UpsIparcelAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE"
    }
  }
}'

# UpsMailInnovationsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "UpsMailInnovationsAccount",
  "description": "UpsMailInnovationsAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "customer_guid": "VALUE",
      "customer_id": "VALUE",
      "password": "VALUE",
      "user_id": "VALUE"
    }
  }
}'

# UpsSurepostAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "UpsSurepostAccount",
  "description": "UpsSurepostAccount",
  "carrier_account": {
    "credentials": {
      "account_number": "VALUE",
      "password": "VALUE",
      "user_id": "VALUE"
    }
  }
}'

# UspsAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "UspsAccount",
  "description": "UspsAccount",
  "carrier_account": {
    "credentials": {
      "address_city": "VALUE",
      "address_state": "VALUE",
      "address_street": "VALUE",
      "address_zip": "VALUE",
      "company_name": "VALUE",
      "email": "VALUE",
      "phone": "VALUE",
      "shipper_id": "VALUE"
    }
  }
}'

# VehoAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "VehoAccount",
  "description": "VehoAccount",
  "carrier_account": {
    "credentials": {
      "api_key": "VALUE"
    },
    "test_credentials": {
      "api_key": "VALUE"
    }
  }
}'

# XDeliveryAccount
curl -X POST https://api.easypost.com/v2/carrier_accounts \
-u "$EASYPOST_API_KEY": \
-H 'Content-Type: application/json' \
-d '{
  "type": "XDeliveryAccount",
  "description": "XDeliveryAccount",
  "carrier_account": {
    "credentials": {
      "password": "VALUE",
      "username": "VALUE"
    },
    "test_credentials": {
      "password": "VALUE",
      "username": "VALUE"
    }
  }
}'

