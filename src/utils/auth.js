import { setLocStr, getLocStr, removeLocStr } from "./locStr"
import settings from "@/defaultSettings";
const { tokenName } = settings;
/**
  * @description 存储token
  * @param token
  * @returns {void|*}
  */
 export const setToken = (token) => {
    return setLocStr(tokenName, token)
  }
  /**
   * @description 获取token
   * @param token
   * @returns {string | null}
   */
  export const getToken = () => {
    return getLocStr(tokenName)
  }
  /**
   * @description 清除token
   * @param token
   * @returns {string | null}
   */
  export const removeToken = () => {
    return removeLocStr(tokenName)
  }