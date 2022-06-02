import moment from 'moment-timezone';

moment.locale('ko');

function formatDate(isoDate) {
  const newDate = moment
    .utc(isoDate)
    .tz('Asia/Seoul')
    .format('YYYY/MM/DD a h:mm:ss');
  return newDate;
}

export { formatDate };
