import moment from 'moment';

// メディアスケジュール用に用意
const getDateByMedia = (startDate, endDate, media) => {
  const startM = moment(startDate);
  const endM = moment(endDate);
  let ret = '';

  switch (media) {
    case 'TV':
    case 'RADIO':
      ret = startM.locale('ja').format('L HH:mm') + endM.format('〜HH:mm');
      break;

    default:
      ret = startM.locale('ja').format('L');
      break;
  }

  return ret;
};

module.exports = {
  getDateByMedia,
};
