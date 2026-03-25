/**
 * 函数组合：compose(f, g, h)(x) => f(g(h(x)))
 * @param {...Function} fns - 要组合的函数，从右到左执行
 * @returns {Function} 组合后的函数
 */
function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

module.exports = compose;
