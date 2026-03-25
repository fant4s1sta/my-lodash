/**
 * 手写 apply：改变 this 指向并立即执行（参数为数组）
 * @param {Function} func - 要执行的函数
 * @param {any} context - this 指向的对象
 * @param {Array} args - 传递给函数的参数数组
 * @returns {any} 函数执行结果
 */
function myApply(func, context, args = []) {
  context = context != null ? Object(context) : globalThis;
  const fn = Symbol('fn');
  context[fn] = func;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}

module.exports = myApply;
