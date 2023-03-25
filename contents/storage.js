const setStorage = (key, value) => localStorage.setItem(key, value);

const getStorage = (key, value) => localStorage.getItem(key, value);

const removeStorage = (key, value) => localStorage.removeItem(key, value);

export {
  setStorage,
  getStorage,
  removeStorage,
} 