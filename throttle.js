/**
 * 节流函数：在 delay 毫秒内多次调用，只执行最后一次
 * @param {Function} func - 需要节流的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 节流后的函数
 */
const throttle = (func, delay) => {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      func.apply(this, args);
      lastTime = now;
    }
  }
};

const throttle2 = (func, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  }
}

module.exports = throttle;