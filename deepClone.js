/**
 * 深拷贝
 * 1. 原始 → 直接返回
 * 2. 已缓存 → 返回缓存（防循环）
 * 3. 数组 → 先缓存空数组，map 递归
 * 4. 对象 → 先缓存空对象，keys 遍历递归
 * 5. 返回 result
 * @param {Object} obj - 需要深拷贝的对象
 * @returns {Object} 深拷贝后的对象
 */
const deepClone = (obj, cache = new WeakMap()) => {
  // 原始类型直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  // 循环引用检测
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  // 数组
  if (Array.isArray(obj)) {
    const arr = [];
    // 缓存
    cache.set(obj, arr);
    // 递归拷贝数组元素
    arr.push(...obj.map((item) => deepClone(item, cache)));
    return arr;
  }
  // 普通对象
  const result = {};
  // 缓存
  cache.set(obj, result);
  // 遍历对象
  Object.keys(obj).forEach((key) => {
    // 递归拷贝对象属性
    result[key] = deepClone(obj[key], cache);
  });
  return result;
};

module.exports = deepClone;
