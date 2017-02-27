import { teamConfigforId, groupIds } from '../config/blog';

const getBlogDetailUri = (BlogInfo, flag = null) => {
  const config = teamConfigforId[BlogInfo.com_group_id] || teamConfigforId.default;
  let uri = '';
  switch (BlogInfo.com_group_id) {
    case groupIds.teamA:
    case groupIds.teamK:
    case groupIds.teamB:
    case groupIds.team4:
    case groupIds.akb48rs:
      uri = `/special/blog/member/${config.urlKey}/${BlogInfo.id}`;
      break;

    case groupIds.team8:
      uri = `/special/${config.urlKey}/detail/${BlogInfo.id}`;
      break;

    default:
      uri = `/special/blog/detail/${BlogInfo.id}`;
  }
  return flag ? `${uri}/${flag}` : uri;
};

module.exports = {
  getBlogDetailUri,
};
