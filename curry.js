/**
 * 柯里化函数
 * @param {Function} func - 需要柯里化的函数
 * @returns {Function} 柯里化后的函数
 */
const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};

// 支持无限链式调用的 add，空调用 () 或 转数字时得到结果
const add = (...args) => {
  const sum = (...nextArgs) =>
    nextArgs.length === 0
      ? args.reduce((a, b) => a + b, 0)
      : add(...args, ...nextArgs);
  sum.valueOf = () => args.reduce((a, b) => a + b, 0);
  return sum;
}

module.exports = curry;