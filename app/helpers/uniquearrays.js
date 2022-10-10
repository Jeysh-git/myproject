import { helper } from '@ember/component/helper';

export function uniquearrays([teamval]) {

  let arr = [];
  arr.push(teamval);
// console.log(arr)
  return arr.uniq();
}

export default helper(uniquearrays);
