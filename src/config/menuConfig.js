/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
 import { lazy } from 'react';

 import {
    ContainerOutlined,
    DesktopOutlined,
  } from '@ant-design/icons';
export const routes2 = [
  {
    title: "登录页面",
    path: "/login",
    component: lazy(() => import('@/views/login')),
  },
  { path: "*", component: lazy(() => import('@/views/404'))}
]
const menuList = [
    {
      title: "首页",
      path: "/",
      redirect: '/home',
      hiddenChild: true,
      icon: <ContainerOutlined />,
      component: lazy(() => import('@/layout')),
      children: [
        {
          title: "首页",
          path: "/home",
          auth: true,
          breadcrumb: false,
          component: lazy(() => import('@/views/home')),
        }
      ]
    },
    {
      title: "demo",
      path: "/demo",
      icon: <DesktopOutlined />,
      component: lazy(() => import('@/layout')),
      children: [
        {
            title: "invoices",
            path: "/demo/invoices",
            auth: true,
            component: lazy(() => import('@/views/invoices')),
        }
      ]
    },
    {
      title: "表格",
      path: "/table",
      icon: <DesktopOutlined />,
      component: lazy(() => import('@/layout')),
      children: [
        {
            title: "基础表格",
            path: "/table/basic",
            auth: true,
            component: lazy(() => import('@/views/table')),
        }
      ]
    },
    {
      title: "图片",
      path: "/image",
      icon: <DesktopOutlined />,
      component: lazy(() => import('@/layout')),
      children: [
        {
            title: "图片加水印",
            path: "/image/watermark",
            auth: true,
            component: lazy(() => import('@/views/watermark')),
        }
      ]
    }
]

export default menuList

export const routes1 = menuList