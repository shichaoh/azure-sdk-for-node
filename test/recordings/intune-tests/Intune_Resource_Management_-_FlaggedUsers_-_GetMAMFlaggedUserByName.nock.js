// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.bmsua01/flaggedUsers/f4058390-f6d0-459b-9c36-3cf9d88e87f5?api-version=2015-01-14-privatepreview')
  .reply(200, "{\"id\":\"/providers/Microsoft.Intune/locations/fef.bmsua01/flaggedUsers/f4058390-f6d0-459b-9c36-3cf9d88e87f5\",\"name\":\"f4058390-f6d0-459b-9c36-3cf9d88e87f5\",\"type\":\"Microsoft.Intune/locations/flaggedUsers\",\"properties\":{\"friendlyName\":\"(株)パソナ　パソナキャリアカンパニー 鹿島建設株式会社\",\"errorCount\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '329',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 19 Nov 2015 01:00:14 GMT',
  'x-ms-ratelimit-remaining-tenant-reads': '14990',
  'elapsed-time-milliseconds': '55',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'dde4a4ac-ec18-42b9-b086-f773f4a679ea',
  'unique-request-id': 'b8a2aa69-6817-42d1-9e1a-7fd7a0696f87',
  'x-ms-request-id': 'b8a2aa69-6817-42d1-9e1a-7fd7a0696f87',
  'related-activity-id': 'b8a2aa69-6817-42d1-9e1a-7fd7a0696f87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'f71f199c-e253-4aca-b8a8-4675de68b8e4',
  'x-ms-routing-request-id': 'WESTUS:20151204T003524Z:f71f199c-e253-4aca-b8a8-4675de68b8e4',
  date: 'Fri, 04 Dec 2015 00:35:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.bmsua01/flaggedUsers/f4058390-f6d0-459b-9c36-3cf9d88e87f5?api-version=2015-01-14-privatepreview')
  .reply(200, "{\"id\":\"/providers/Microsoft.Intune/locations/fef.bmsua01/flaggedUsers/f4058390-f6d0-459b-9c36-3cf9d88e87f5\",\"name\":\"f4058390-f6d0-459b-9c36-3cf9d88e87f5\",\"type\":\"Microsoft.Intune/locations/flaggedUsers\",\"properties\":{\"friendlyName\":\"(株)パソナ　パソナキャリアカンパニー 鹿島建設株式会社\",\"errorCount\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '329',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 19 Nov 2015 01:00:14 GMT',
  'x-ms-ratelimit-remaining-tenant-reads': '14990',
  'elapsed-time-milliseconds': '55',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'dde4a4ac-ec18-42b9-b086-f773f4a679ea',
  'unique-request-id': 'b8a2aa69-6817-42d1-9e1a-7fd7a0696f87',
  'x-ms-request-id': 'b8a2aa69-6817-42d1-9e1a-7fd7a0696f87',
  'related-activity-id': 'b8a2aa69-6817-42d1-9e1a-7fd7a0696f87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'f71f199c-e253-4aca-b8a8-4675de68b8e4',
  'x-ms-routing-request-id': 'WESTUS:20151204T003524Z:f71f199c-e253-4aca-b8a8-4675de68b8e4',
  date: 'Fri, 04 Dec 2015 00:35:24 GMT',
  connection: 'close' });
 return result; }]];