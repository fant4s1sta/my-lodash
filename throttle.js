/**
 * 节流函数：在 delay 毫秒内多次调用，只执行最后一次
 * @param {Function} func - 需要节流的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 节流后的函数
 */
const throttle = (func, delay) => {
  let nextTimeToCall = 0;
  let timeout = null;
  return function (...args) {
    const timeToWait = Math.max(0, nextTimeToCall - Date.now());
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      nextTimeToCall = Date.now() + delay;
    }, timeToWait);
  }
};

module.exports = throttle;