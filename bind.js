/**
 * 手写 bind：改变 this 指向，返回新函数（支持 new）
 * @param {Function} func - 要绑定的函数
 * @param {any} context - this 指向的对象
 * @param {...any} presetArgs - 预设参数（柯里化）
 * @returns {Function} 绑定后的新函数
 */
function myBind(func, context, ...presetArgs) {
  const bound = function (...args) {
    const isNew = this instanceof bound;
    return func.apply(isNew ? this : context, [...presetArgs, ...args]);
  };
  bound.prototype = Object.create(func.prototype);
  return bound;
}

module.exports = myBind;
