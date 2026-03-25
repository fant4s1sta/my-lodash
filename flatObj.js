const flatObject = (obj, keyPrefix = '') => {
  const result = {};

  if (obj !== null && typeof obj === 'object') {
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        if (keyPrefix) result[keyPrefix] = obj;
      } else {
        for (let i = 0; i < obj.length; i++) {
          const key = keyPrefix ? `${keyPrefix}.${i}` : String(i);
          Object.assign(result, flatObject(obj[i], key));
        }
      }
    } else {
      const entries = Object.entries(obj);
      if (entries.length === 0) {
        if (keyPrefix) result[keyPrefix] = obj;
      } else {
        for (const [k, v] of entries) {
          const key = keyPrefix ? `${keyPrefix}.${k}` : k;
          Object.assign(result, flatObject(v, key));
        }
      }
    }
  } else if (keyPrefix !== '') {
    result[keyPrefix] = obj;
  }

  return result;
};

module.exports = flatObject;