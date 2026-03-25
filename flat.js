/**
 * 数组扁平化：将嵌套数组展平
 * @param {Array} arr - 待扁平化的数组
 * @param {number} depth - 扁平层级，默认 1；Infinity 表示全部展平
 * @returns {Array} 扁平化后的数组
 */
function flat(arr, depth = 1) {
  if (depth <= 0) return arr.slice();
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flat(item, depth - 1) : item);
  }, []);
}

module.exports = flat;
