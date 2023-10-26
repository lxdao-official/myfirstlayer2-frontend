const setStorage = (key, value) => localStorage.setItem(key, value)

const getStorage = (key) => localStorage.getItem(key)

const removeStorage = (key) => localStorage.removeItem(key)

export { setStorage, getStorage, removeStorage }
