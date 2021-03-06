// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2016-02-01.3.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 01 Apr 2016 05:45:19 GMT',
  etag: '0x8D359F0CF1CF02C',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '441cdf43-c95b-4df8-9f63-ed90e443d11e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1',
  date: 'Fri, 01 Apr 2016 05:45:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2016-02-01.3.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 01 Apr 2016 05:45:19 GMT',
  etag: '0x8D359F0CF1CF02C',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '441cdf43-c95b-4df8-9f63-ed90e443d11e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1',
  date: 'Fri, 01 Apr 2016 05:45:18 GMT',
  connection: 'close' });
 return result; }]];