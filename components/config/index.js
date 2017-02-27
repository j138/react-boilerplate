const siteTitle = 'CA Track Employee';
exports.title = (s = '') => ((s !== '') ? `${s} - ${siteTitle}` : siteTitle);
