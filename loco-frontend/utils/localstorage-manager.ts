const getLocalStorageItem = (key: string) => localStorage.getItem(key);
const setLocalStorageItem = (key: string, value: string) => localStorage.setItem(key, value);
const removeLocalStorageItem = (key: string) => localStorage.removeItem(key);

export { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem };