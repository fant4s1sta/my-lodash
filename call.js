/**
 * 手写 call：改变 this 指向并立即执行
 * @param {Function} func - 要执行的函数
 * @param {any} context - this 指向的对象
 * @param {...any} args - 传递给函数的参数
 * @returns {any} 函数执行结果
 */
function myCall(func, context, ...args) {
  context = context != null ? Object(context) : globalThis;
  const fn = Symbol('fn');
  context[fn] = func;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}

module.exports = myCall;
