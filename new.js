/**
 * 手写 new 操作符
 * 1. 创建空对象，原型指向构造函数 prototype
 * 2. 执行构造函数，this 指向新对象
 * 3. 若构造函数返回对象则返回该对象，否则返回新对象
 * @param {Function} Constructor - 构造函数
 * @param {...any} args - 构造函数参数
 * @returns {Object} 实例对象
 */
function myNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, args);
  return (result !== null && typeof result === 'object') ? result : obj;
}

module.exports = myNew;
