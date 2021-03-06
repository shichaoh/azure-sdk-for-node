// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba21578.azuredatalakeanalytics.net\",\"accountId\":\"eaed3b37-5cbb-4202-8dc5-3aaf88f4ca19\",\"creationTime\":\"2016-04-28T01:05:22.1135919Z\",\"lastModifiedTime\":\"2016-04-28T01:05:22.1135919Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18242/providers/Microsoft.DataLakeAnalytics/accounts/testaba21578\",\"name\":\"testaba21578\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2696.azuredatalakeanalytics.net\",\"accountId\":\"52a04f96-2887-41d2-8035-e636a7b0ca63\",\"creationTime\":\"2016-05-18T00:43:22.3801777Z\",\"lastModifiedTime\":\"2016-05-18T00:43:22.3801777Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2696\",\"name\":\"xplattestadla2696\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3890.azuredatalakeanalytics.net\",\"accountId\":\"bc286e0b-a44f-4631-92ae-1699c1ad2d92\",\"creationTime\":\"2016-05-18T00:45:57.7190736Z\",\"lastModifiedTime\":\"2016-05-18T00:45:57.7190736Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3890\",\"name\":\"xplattestadla3890\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1638',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a26f5f44-de95-481f-b709-fc755f5881de',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ec545c5c-28ee-4ce9-a6bf-2d6e1814467c',
  'x-ms-routing-request-id': 'WESTUS:20160518T004631Z:ec545c5c-28ee-4ce9-a6bf-2d6e1814467c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:46:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba21578.azuredatalakeanalytics.net\",\"accountId\":\"eaed3b37-5cbb-4202-8dc5-3aaf88f4ca19\",\"creationTime\":\"2016-04-28T01:05:22.1135919Z\",\"lastModifiedTime\":\"2016-04-28T01:05:22.1135919Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18242/providers/Microsoft.DataLakeAnalytics/accounts/testaba21578\",\"name\":\"testaba21578\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2696.azuredatalakeanalytics.net\",\"accountId\":\"52a04f96-2887-41d2-8035-e636a7b0ca63\",\"creationTime\":\"2016-05-18T00:43:22.3801777Z\",\"lastModifiedTime\":\"2016-05-18T00:43:22.3801777Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2696\",\"name\":\"xplattestadla2696\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3890.azuredatalakeanalytics.net\",\"accountId\":\"bc286e0b-a44f-4631-92ae-1699c1ad2d92\",\"creationTime\":\"2016-05-18T00:45:57.7190736Z\",\"lastModifiedTime\":\"2016-05-18T00:45:57.7190736Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3890\",\"name\":\"xplattestadla3890\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1638',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a26f5f44-de95-481f-b709-fc755f5881de',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ec545c5c-28ee-4ce9-a6bf-2d6e1814467c',
  'x-ms-routing-request-id': 'WESTUS:20160518T004631Z:ec545c5c-28ee-4ce9-a6bf-2d6e1814467c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:46:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2696.azuredatalakeanalytics.net\",\"accountId\":\"52a04f96-2887-41d2-8035-e636a7b0ca63\",\"creationTime\":\"2016-05-18T00:43:22.3801777Z\",\"lastModifiedTime\":\"2016-05-18T00:43:22.3801777Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2696\",\"name\":\"xplattestadla2696\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3890.azuredatalakeanalytics.net\",\"accountId\":\"bc286e0b-a44f-4631-92ae-1699c1ad2d92\",\"creationTime\":\"2016-05-18T00:45:57.7190736Z\",\"lastModifiedTime\":\"2016-05-18T00:45:57.7190736Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3890\",\"name\":\"xplattestadla3890\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0e15b05d-85fc-4c8f-b80f-977f56d65f00',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '4738a757-6fc2-4912-9bd3-2c8f70c10a2a',
  'x-ms-routing-request-id': 'WESTUS:20160518T004633Z:4738a757-6fc2-4912-9bd3-2c8f70c10a2a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:46:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2696.azuredatalakeanalytics.net\",\"accountId\":\"52a04f96-2887-41d2-8035-e636a7b0ca63\",\"creationTime\":\"2016-05-18T00:43:22.3801777Z\",\"lastModifiedTime\":\"2016-05-18T00:43:22.3801777Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2696\",\"name\":\"xplattestadla2696\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3890.azuredatalakeanalytics.net\",\"accountId\":\"bc286e0b-a44f-4631-92ae-1699c1ad2d92\",\"creationTime\":\"2016-05-18T00:45:57.7190736Z\",\"lastModifiedTime\":\"2016-05-18T00:45:57.7190736Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3890\",\"name\":\"xplattestadla3890\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0e15b05d-85fc-4c8f-b80f-977f56d65f00',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '4738a757-6fc2-4912-9bd3-2c8f70c10a2a',
  'x-ms-routing-request-id': 'WESTUS:20160518T004633Z:4738a757-6fc2-4912-9bd3-2c8f70c10a2a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:46:33 GMT',
  connection: 'close' });
 return result; }]];