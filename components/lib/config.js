let apiHost = '';
switch (NODE_ENV) {
  case 'staging':
    apiHost = 'http://api.memory.local.qw.to';
    break;

  case 'production':
    // FIXME: 向き先確認
    apiHost = 'http://private-5fcd91-front1.apiary-mock.com';
    break;

  default:
    apiHost = 'http://private-5fcd91-front1.apiary-mock.com';
    break;
}
exports.apiHost = apiHost;
