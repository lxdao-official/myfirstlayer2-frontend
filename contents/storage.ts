// 添加类型注解
const setStorage = (key: string, value: string): void => localStorage.setItem(key, value)

const getStorage = (key: string): string | null => localStorage.getItem(key)

const removeStorage = (key: string) => localStorage.removeItem(key)

export { setStorage, getStorage, removeStorage }

