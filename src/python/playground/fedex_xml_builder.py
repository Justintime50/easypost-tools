import easypost
import math

# Create an XML file for FedEx requests

easypost.api_key = 'PROD OR TEST API KEY'
shipment_id = input("Please enter a shipment id: ")
shipment = easypost.Shipment.retrieve(shipment_id)


def round_up(n, decimals=1):
    multiplier = 10 ** decimals
    return math.ceil(n * multiplier) / multiplier


def oz2lb():
    ounces = shipment.parcel.weight
    pounds = ounces / 16
    return round_up(pounds)


shipment_weight_in_lb = oz2lb()
shipment_length = int(shipment.parcel.length)
shipment_width = int(shipment.parcel.width)
shipment_height = int(shipment.parcel.height)

if(shipment.to_address.residential is True):
    recipient_address_residential = 1
else:
    recipient_address_residential = 0

file_name = str(shipment_id) + '.xml'
file = open(file_name, 'w')

file.write('<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://fedex.com/ws/ship/v19">' + '\n')  # noqa
file.write('\t' + "<SOAP-ENV:Body>" + '\n')
file.write('\t' + '\t' + "<ProcessShipmentRequest>" + '\n')
file.write('\t' + '\t' + '\t' + "<WebAuthenticationDetail>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<UserCredential>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<Key>******</Key>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<Password>******</Password>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "</UserCredential>" + '\n')
file.write('\t' + '\t' + '\t' + "</WebAuthenticationDetail>" + '\n')
file.write('\t' + '\t' + '\t' + "<ClientDetail>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<AccountNumber>*****</AccountNumber>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<MeterNumber>*****</MeterNumber>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<IntegratorId>***</IntegratorId>" + '\n')
file.write('\t' + '\t' + '\t' + "</ClientDetail>" + '\n')
file.write('\t' + '\t' + '\t' + "<TransactionDetail>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<CustomerTransactionId>" + str(shipment_id) + "</CustomerTransactionId>" + '\n')
file.write('\t' + '\t' + '\t' + "</TransactionDetail>" + '\n')
file.write('\t' + '\t' + '\t' + "<Version>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<ServiceId>ship</ServiceId>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<Major>19</Major>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<Intermediate>0</Intermediate>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<Minor>0</Minor>" + '\n')
file.write('\t' + '\t' + '\t' + "</Version>" + '\n')
file.write('\t' + '\t' + '\t' + "<RequestedShipment>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<ShipTimestamp>" + str(shipment.created_at) + "</ShipTimestamp>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<DropoffType>REGULAR_PICKUP</DropoffType>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<ServiceType>" + str(shipment.selected_rate.service) + "</ServiceType>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<PackagingType>YOUR_PACKAGING</PackagingType>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<Shipper>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<AccountNumber>*****</AccountNumber>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<Contact>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PersonName>" +
           str(shipment.from_address.name) + "</PersonName>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<CompanyName>" +
           str(shipment.from_address.company) + "</CompanyName>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PhoneNumber>" +
           str(shipment.from_address.phone) + "</PhoneNumber>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "</Contact>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<Address>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StreetLines>" +
           str(shipment.from_address.street1) + "</StreetLines>" + '\n')
if(shipment.from_address.street2 != ""):
    file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StreetLines>" +
               str(shipment.from_address.street2) + "</StreetLines>" + '\n')
else:
    file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StreetLines/>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<City>" + str(shipment.from_address.city) + "</City>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StateOrProvinceCode>" +
           str(shipment.from_address.state) + "</StateOrProvinceCode>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PostalCode>" +
           str(shipment.from_address.zip) + "</PostalCode>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<CountryCode>" +
           str(shipment.from_address.country) + "</CountryCode>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "</Address>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "</Shipper>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<Recipient>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<Contact>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PersonName>" +
           str(shipment.to_address.name) + "</PersonName>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PhoneNumber>" +
           str(shipment.to_address.phone) + "</PhoneNumber>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "</Contact>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<Address>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StreetLines>" +
           str(shipment.to_address.street1) + "</StreetLines>" + '\n')
if(shipment.from_address.street2 != ""):
    file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StreetLines>" +
               str(shipment.to_address.street2) + "</StreetLines>" + '\n')
else:
    file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StreetLines/>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<City>" + str(shipment.to_address.city) + "</City>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StateOrProvinceCode>" +
           str(shipment.to_address.state) + "</StateOrProvinceCode>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PostalCode>" +
           str(shipment.to_address.zip) + "</PostalCode>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<CountryCode>" +
           str(shipment.to_address.country) + "</CountryCode>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<Residential>" +
           str(recipient_address_residential) + "</Residential>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "</Address>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "</Recipient>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<ShippingChargesPayment>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<PaymentType>SENDER</PaymentType>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<Payor>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<ResponsibleParty>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<AccountNumber>*****</AccountNumber>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<Contact>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PersonName>" +
           str(shipment.from_address.name) + "</PersonName>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<CompanyName>" +
           str(shipment.from_address.company) + "</CompanyName>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PhoneNumber>" +
           str(shipment.from_address.phone) + "</PhoneNumber>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "</Contact>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "</ResponsibleParty>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "</Payor>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "</ShippingChargesPayment>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<SpecialServicesRequested/>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<LabelSpecification>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<LabelFormatType>COMMON2D</LabelFormatType>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<ImageType>PNG</ImageType>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<LabelStockType>PAPER_4X6</LabelStockType>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' +
           "<LabelPrintingOrientation>TOP_EDGE_OF_TEXT_FIRST</LabelPrintingOrientation>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<PrintedLabelOrigin>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<Contact>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PersonName>" +
           str(shipment.from_address.name) + "</PersonName>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<CompanyName>" +
           str(shipment.from_address.company) + "</CompanyName>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PhoneNumber>" +
           str(shipment.from_address.phone) + "</PhoneNumber>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "</Contact>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<Address>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StreetLines>" +
           str(shipment.from_address.street1) + "</StreetLines>" + '\n')
if(shipment.from_address.street2 != ""):
    file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StreetLines>" +
               str(shipment.from_address.street2) + "</StreetLines>" + '\n')
else:
    file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StreetLines/>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<City>" +
           str(shipment.from_address.city) + "</City>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<StateOrProvinceCode>" +
           str(shipment.from_address.state) + "</StateOrProvinceCode>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<PostalCode>" +
           str(shipment.from_address.zip) + "</PostalCode>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<CountryCode>" +
           str(shipment.from_address.country) + "</CountryCode>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "</Address>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "</PrintedLabelOrigin>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "</LabelSpecification>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<RateRequestTypes>ACCOUNT</RateRequestTypes>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<PackageCount>1</PackageCount>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "<RequestedPackageLineItems>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<SequenceNumber>1</SequenceNumber>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<GroupPackageCount>1</GroupPackageCount>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<Weight>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<Units>LB</Units>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<Value>" + str(shipment_weight_in_lb) + "</Value>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "</Weight>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<Dimensions>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<Length>" + str(shipment_length) + "</Length>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<Width>" + str(shipment_width) + "</Width>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<Height>" + str(shipment_height) + "</Height>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + '\t' + "<Units>IN</Units>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "</Dimensions>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<PhysicalPackaging>BOX</PhysicalPackaging>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<ItemDescription/>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + '\t' + "<ItemDescriptionForClearance/>" + '\n')
file.write('\t' + '\t' + '\t' + '\t' + "</RequestedPackageLineItems>" + '\n')
file.write('\t' + '\t' + '\t' + "</RequestedShipment>" + '\n')
file.write('\t' + '\t' + "</ProcessShipmentRequest>" + '\n')
file.write('\t' + "</SOAP-ENV:Body>" + '\n')
file.write("</SOAP-ENV:Envelope>")
file.close()
