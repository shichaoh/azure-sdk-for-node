// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/providers/Microsoft.Intune/locations/fef.bmsua01/iosPolicies/7d504c8b-7a5a-4e75-b297-97fc3eff4cc3/groups/125bfe6d-67ac-486b-9bc3-c0427144ed9e?api-version=2015-01-14-privatepreview', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'elapsed-time-milliseconds': '153',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'b887e992-d5f1-4c63-a7f9-6b4d89911084',
  'unique-request-id': 'de0eff87-d4ad-4b46-9037-945026e456f0',
  'x-ms-request-id': 'de0eff87-d4ad-4b46-9037-945026e456f0',
  'related-activity-id': 'de0eff87-d4ad-4b46-9037-945026e456f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-tenant-writes': '1197',
  'x-ms-correlation-request-id': 'dc100d05-01ab-4f47-a20d-9a358de4bf4e',
  'x-ms-routing-request-id': 'WESTUS:20151204T003534Z:dc100d05-01ab-4f47-a20d-9a358de4bf4e',
  date: 'Fri, 04 Dec 2015 00:35:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/providers/Microsoft.Intune/locations/fef.bmsua01/iosPolicies/7d504c8b-7a5a-4e75-b297-97fc3eff4cc3/groups/125bfe6d-67ac-486b-9bc3-c0427144ed9e?api-version=2015-01-14-privatepreview', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'elapsed-time-milliseconds': '153',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'b887e992-d5f1-4c63-a7f9-6b4d89911084',
  'unique-request-id': 'de0eff87-d4ad-4b46-9037-945026e456f0',
  'x-ms-request-id': 'de0eff87-d4ad-4b46-9037-945026e456f0',
  'related-activity-id': 'de0eff87-d4ad-4b46-9037-945026e456f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-tenant-writes': '1197',
  'x-ms-correlation-request-id': 'dc100d05-01ab-4f47-a20d-9a358de4bf4e',
  'x-ms-routing-request-id': 'WESTUS:20151204T003534Z:dc100d05-01ab-4f47-a20d-9a358de4bf4e',
  date: 'Fri, 04 Dec 2015 00:35:34 GMT',
  connection: 'close' });
 return result; }]];