import cookie from "js-cookie";
import settings from "@/defaultSettings";
const { storage } = settings;
/**
 * @description 获取本地存储
 * @param key
 * @returns {string | null}
 */
export const getLocStr = (key) => {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.getItem(key);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.getItem(key);
    } else if ("cookie" === storage) {
      return cookie.get(key);
    } else {
      return localStorage.getItem(key);
    }
  } else {
    return localStorage.getItem(key);
  }
};
/**
 * @description 清楚本地存储
 * @returns {void|*}
 */
export function removeLocStr(key) {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.removeItem(key);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.clear();
    } else if ("cookie" === storage) {
      return cookie.remove(key);
    } else {
      return localStorage.removeItem(key);
    }
  } else {
    return localStorage.removeItem(key);
  }
}
/**
 * @description 本地存储缓存
 * @param key, value
 * @returns {void|*}
 */
export const setLocStr = (key, value) => {
  if (storage) {
    if ("localStorage" === storage) {
      return localStorage.setItem(key, value);
    } else if ("sessionStorage" === storage) {
      return sessionStorage.setItem(key, value);
    } else if ("cookie" === storage) {
      return cookie.set(key, value);
    } else {
      return localStorage.setItem(key, value);
    }
  } else {
    return localStorage.setItem(key, value);
  }
};
/**
 * @description 获取size
 * @returns {string | null}
 */
const sizeKey = "size";
export const getSize = () => {
  return getLocStr(sizeKey);
};
/**
 * @description 保存size
 * @returns {void|*}
 */
export const setSize = (size) => {
  return setLocStr(sizeKey, size);
};
