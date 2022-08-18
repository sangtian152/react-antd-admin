import { Menu } from 'antd'
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Scrollbars } from "react-custom-scrollbars";
import withRouter from '@/router/withRouter';
import menuList from '@/config/menuConfig';
import { getMenuItemInMenuListByProperty } from "@/utils";
import {
  addTag
} from "@/store/modules/tagsView";
import "./index.scss"
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

class LayoutMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuTreeNode: [],
      selectedKeys: [],
      openKeys: []
    }
  }
  rootSubmenuKeys = []
  getMenuNodes(menus, key = '') {
    // 得到当前请求的路由路径
    const path = this.props.location.pathname;
    return menus.map(item => {
      const routeKey = item.path.startsWith('/') ? item.path : `${key}/${item.path}`
      if (item.children && !item.hiddenChild) {
        if (path.includes(routeKey)) {
          this.setState((state) => ({
            openKeys: [...state.openKeys, routeKey],
          }))
        }
        const children = this.getMenuNodes(item.children, routeKey)
        return getItem(item.title, routeKey, item.icon, children)
      } else {
        return getItem(<NavLink to={item.path}>{item.title}</NavLink>, routeKey, item.icon)
      }
    })
  }
  onOpenChange(keys) {
    const { openKeys } = this.state
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({openKeys: keys})
    } else {
      this.setState({openKeys: latestOpenKey ? [latestOpenKey] : []});
    }
  };
  handleMenuSelect = ({ key = "/home" }) => {
    let menuItem = getMenuItemInMenuListByProperty(menuList, "path", key);
    this.props.dispatch(addTag(menuItem));
  };
  componentDidMount() {
    const menuTreeNode = this.getMenuNodes(menuList);
    this.rootSubmenuKeys = menuList.filter(item => item.children).map(item => item.path)
    this.setState({
      menuTreeNode,
    });
    this.handleMenuSelect({});
  }
  render() {
    const path = this.props.location.pathname;
    const openKeys = this.state.openKeys;
    return (
      <div className="sidebar-menu-container">
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
          <Menu
              selectedKeys={[path]}
              openKeys={openKeys}
              onSelect={this.handleMenuSelect}
              onOpenChange={(keys) => this.onOpenChange(keys)}
              mode="inline"
              theme="dark"
              items={this.state.menuTreeNode}
          />
        </Scrollbars>
      </div>
    )
  }
}

export default connect((state) => state.user)(withRouter(LayoutMenu));