// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.bmsua01/AndroidPolicies/e08e07ff-4432-45d2-87bb-38b5d0300571/apps?api-version=2015-01-14-privatepreview')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14991',
  'elapsed-time-milliseconds': '83',
  'service-name': 'AdminExperienceService',
  'client-request-id': '0ee1195f-6c4b-4ed9-b728-b5e363df48c7',
  'unique-request-id': '2d1c11b1-76df-48f1-a81b-644d7de99183',
  'x-ms-request-id': '2d1c11b1-76df-48f1-a81b-644d7de99183',
  'related-activity-id': '2d1c11b1-76df-48f1-a81b-644d7de99183',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '6b06d4f5-37d0-498f-976a-c3dc2a47c0b2',
  'x-ms-routing-request-id': 'WESTUS:20151204T003540Z:6b06d4f5-37d0-498f-976a-c3dc2a47c0b2',
  date: 'Fri, 04 Dec 2015 00:35:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.bmsua01/AndroidPolicies/e08e07ff-4432-45d2-87bb-38b5d0300571/apps?api-version=2015-01-14-privatepreview')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14991',
  'elapsed-time-milliseconds': '83',
  'service-name': 'AdminExperienceService',
  'client-request-id': '0ee1195f-6c4b-4ed9-b728-b5e363df48c7',
  'unique-request-id': '2d1c11b1-76df-48f1-a81b-644d7de99183',
  'x-ms-request-id': '2d1c11b1-76df-48f1-a81b-644d7de99183',
  'related-activity-id': '2d1c11b1-76df-48f1-a81b-644d7de99183',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '6b06d4f5-37d0-498f-976a-c3dc2a47c0b2',
  'x-ms-routing-request-id': 'WESTUS:20151204T003540Z:6b06d4f5-37d0-498f-976a-c3dc2a47c0b2',
  date: 'Fri, 04 Dec 2015 00:35:39 GMT',
  connection: 'close' });
 return result; }]];