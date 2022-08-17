const settings = {
  /**
   * @type {boolean} true | false
   * @description 是否显示设置面板
   */
  showSettings: true,
  // 如果只想在开发环境下显示系统设置面板，生产环境下不显示，那么请打开下面这行代码
  // showSettings: process.env.NODE_ENV === "development",

  /**
   * @type {boolean} true | false
   * @description 是否在侧边栏显示logo
   */
  sidebarLogo: true,

  /**
   * @type {boolean} true | false
   * @description 是否固定header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description 是否需要tagsView
   */
  tagsView: true,

  /**
   * @type {string}
   * @description token
   */
  tokenName: "accessToken",
  /**
   * @type {string}
   * @description token存储位置localStorage sessionStorage cookie
   */
  storage: "sessionStorage",
};
export default settings;
