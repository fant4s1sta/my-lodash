/**
 * 睡眠函数：睡眠指定毫秒
 * @param {number} ms - 睡眠时间（毫秒）
 * @returns {Promise} 睡眠后的 Promise
 */
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports = sleep;