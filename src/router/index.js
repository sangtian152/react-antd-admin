import React from "react";
import { useRoutes } from "react-router-dom";
import { Suspense } from 'react'
import { Spin } from 'antd';
import { routes1, routes2 } from "@/config/menuConfig";
//根据路径获取路由
const checkAuth = (routers, path) => {
  for (const data of routers) {
    if (data.path === path) return data;
    if (data.children) {
      const res = checkAuth(data.children, path);
      if (res) return res;
    }
  }
  return null;
};

const genSpin = () => {
  return (
    <div className="app-spin">
      <Spin size="large" />
    </div>
  )
}

// 路由处理方式
const generateRouter = (routers) => {
    return routers.map((item) => {
      if (item.children) {
        item.children = generateRouter(item.children)
      }
      item.element = <Suspense fallback={
        genSpin()
      }>
        {/* 把懒加载的异步路由变成组件装载进去 */}
        <item.component />
      </Suspense>
      return item
    })
  }

const routes = routes1.concat(routes2)
const Router = () => useRoutes(generateRouter(routes))

const checkRouterAuth = (path)=>{
    let auth = null
    auth = checkAuth(routes, path)
    return auth
  }

export { Router, checkRouterAuth };