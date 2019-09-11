import moment from "moment-hijri";
import _ from 'lodash';
const currentHjriYear = moment(moment()).iYear() + 1
const y = Array(70)
  .fill(0)
  .map((e, i) => i + (currentHjriYear - 70));

export default _.reverse(y);
