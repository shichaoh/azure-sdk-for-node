// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.bmsua01/apps?api-version=2015-01-14-privatepreview&$filter=platform%20eq%20%27ios%27')
  .reply(200, "{\"value\":[{\"id\":\"/providers/Microsoft.Intune/locations/fef.bmsua01/apps/com.microsoft.skydrive.IOS\",\"name\":\"com.microsoft.skydrive.IOS\",\"type\":\"Microsoft.Intune/locations/apps\",\"properties\":{\"friendlyName\":\"OneDrive\",\"platform\":\"ios\",\"appId\":\"af124e86-4e96-495a-b70a-90f90ab96707\"}},{\"id\":\"/providers/Microsoft.Intune/locations/fef.bmsua01/apps/com.microsoft.office.excel.IOS\",\"name\":\"com.microsoft.office.excel.IOS\",\"type\":\"Microsoft.Intune/locations/apps\",\"properties\":{\"friendlyName\":\"Excel\",\"platform\":\"ios\",\"appId\":\"d3590ed6-52b3-4102-aeff-aad2292ab01c\"}},{\"id\":\"/providers/Microsoft.Intune/locations/fef.bmsua01/apps/com.microsoft.office.powerpoint.IOS\",\"name\":\"com.microsoft.office.powerpoint.IOS\",\"type\":\"Microsoft.Intune/locations/apps\",\"properties\":{\"friendlyName\":\"PowerPoint\",\"platform\":\"ios\",\"appId\":\"d3590ed6-52b3-4102-aeff-aad2292ab01c\"}},{\"id\":\"/providers/Microsoft.Intune/locations/fef.bmsua01/apps/com.microsoft.office.word.IOS\",\"name\":\"com.microsoft.office.word.IOS\",\"type\":\"Microsoft.Intune/locations/apps\",\"properties\":{\"friendlyName\":\"Word\",\"platform\":\"ios\",\"appId\":\"d3590ed6-52b3-4102-aeff-aad2292ab01c\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14991',
  'elapsed-time-milliseconds': '84',
  'service-name': 'AdminExperienceService',
  'client-request-id': '7844450f-c25b-4fdf-aab5-abdf7186aa31',
  'unique-request-id': 'a3b90180-6886-44e9-8f1f-15652465ad9e',
  'x-ms-request-id': 'a3b90180-6886-44e9-8f1f-15652465ad9e',
  'related-activity-id': 'a3b90180-6886-44e9-8f1f-15652465ad9e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '369455d7-96e9-4054-b023-92e7d18da97c',
  'x-ms-routing-request-id': 'WESTUS:20151204T003521Z:369455d7-96e9-4054-b023-92e7d18da97c',
  date: 'Fri, 04 Dec 2015 00:35:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.bmsua01/apps?api-version=2015-01-14-privatepreview&$filter=platform%20eq%20%27ios%27')
  .reply(200, "{\"value\":[{\"id\":\"/providers/Microsoft.Intune/locations/fef.bmsua01/apps/com.microsoft.skydrive.IOS\",\"name\":\"com.microsoft.skydrive.IOS\",\"type\":\"Microsoft.Intune/locations/apps\",\"properties\":{\"friendlyName\":\"OneDrive\",\"platform\":\"ios\",\"appId\":\"af124e86-4e96-495a-b70a-90f90ab96707\"}},{\"id\":\"/providers/Microsoft.Intune/locations/fef.bmsua01/apps/com.microsoft.office.excel.IOS\",\"name\":\"com.microsoft.office.excel.IOS\",\"type\":\"Microsoft.Intune/locations/apps\",\"properties\":{\"friendlyName\":\"Excel\",\"platform\":\"ios\",\"appId\":\"d3590ed6-52b3-4102-aeff-aad2292ab01c\"}},{\"id\":\"/providers/Microsoft.Intune/locations/fef.bmsua01/apps/com.microsoft.office.powerpoint.IOS\",\"name\":\"com.microsoft.office.powerpoint.IOS\",\"type\":\"Microsoft.Intune/locations/apps\",\"properties\":{\"friendlyName\":\"PowerPoint\",\"platform\":\"ios\",\"appId\":\"d3590ed6-52b3-4102-aeff-aad2292ab01c\"}},{\"id\":\"/providers/Microsoft.Intune/locations/fef.bmsua01/apps/com.microsoft.office.word.IOS\",\"name\":\"com.microsoft.office.word.IOS\",\"type\":\"Microsoft.Intune/locations/apps\",\"properties\":{\"friendlyName\":\"Word\",\"platform\":\"ios\",\"appId\":\"d3590ed6-52b3-4102-aeff-aad2292ab01c\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1130',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14991',
  'elapsed-time-milliseconds': '84',
  'service-name': 'AdminExperienceService',
  'client-request-id': '7844450f-c25b-4fdf-aab5-abdf7186aa31',
  'unique-request-id': 'a3b90180-6886-44e9-8f1f-15652465ad9e',
  'x-ms-request-id': 'a3b90180-6886-44e9-8f1f-15652465ad9e',
  'related-activity-id': 'a3b90180-6886-44e9-8f1f-15652465ad9e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '369455d7-96e9-4054-b023-92e7d18da97c',
  'x-ms-routing-request-id': 'WESTUS:20151204T003521Z:369455d7-96e9-4054-b023-92e7d18da97c',
  date: 'Fri, 04 Dec 2015 00:35:20 GMT',
  connection: 'close' });
 return result; }]];