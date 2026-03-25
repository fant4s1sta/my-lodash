/**
 * 手写 instanceof：判断实例是否在原型链上
 * @param {any} instance - 实例对象
 * @param {Function} Constructor - 构造函数
 * @returns {boolean}
 */
function myInstanceof(instance, Constructor) {
  if (instance === null || typeof instance !== 'object') return false;
  let proto = Object.getPrototypeOf(instance);
  const prototype = Constructor.prototype;
  while (proto) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

module.exports = myInstanceof;
