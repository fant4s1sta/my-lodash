/**
 * 发布订阅（EventEmitter）
 * 手写 on / emit / off / once
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * 订阅事件
   * @param {string} event - 事件名
   * @param {Function} callback - 回调函数
   */
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }

  /**
   * 发布事件
   * @param {string} event - 事件名
   * @param {...any} args - 传递给回调的参数
   */
  emit(event, ...args) {
    const cbs = this.events[event] || [];
    cbs.forEach((cb) => cb(...args));
  }

  /**
   * 取消订阅
   * @param {string} event - 事件名
   * @param {Function} callback - 要移除的回调（不传则移除该事件所有回调）
   */
  off(event, callback) {
    if (!callback) {
      delete this.events[event];
      return;
    }
    const cbs = this.events[event] || [];
    this.events[event] = cbs.filter((cb) => cb !== callback);
  }

  /**
   * 订阅一次，触发后自动取消
   * @param {string} event - 事件名
   * @param {Function} callback - 回调函数
   */
  once(event, callback) {
    const onceWrapper = (...args) => {
      callback(...args);
      this.off(event, onceWrapper);
    };
    this.on(event, onceWrapper);
  }
}

module.exports = EventEmitter;
