// https://programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  const ans = [];
  const o = {};
  
  const fn = (order, n, pre = '') => {
    for (let i = 0; i <= order.length + pre.length - n; i++) {
      let combo = pre + order[i];
      if (combo.length === n) {
        o[n][combo] = o[n][combo] ? o[n][combo] + 1 : 1;
      } else {
        fn(order.substring(+i + 1), n, combo);
      }
    }
  };

  for (const i in orders) {
    orders[i] = orders[i].split('').sort().join('');
  }
  for (const n of course) {
    o[n] = {};
    for (const i in orders) {
      fn(orders[i], n);
    }
    const ent = Object.entries(o[n]).sort((a, b) => b[1] - a[1]);
    const most = ent.filter((x) => x[1] > 1 && x[1] === ent[0][1]);
    for (let [combo] of most) {
      ans.push(combo);
    }
  }
  return ans.sort();
}

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])
); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4])); // ["WX", "XY"]
