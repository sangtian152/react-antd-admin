import React from "react";
import { connect } from "react-redux";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import { toggleSiderBar } from '@/store/modules/app'
import "./index.scss";
const Hamburger = (props) => {
  const { sidebarCollapsed, dispatch } = props;
  const _toggleSiderBar = () => {
    dispatch(toggleSiderBar())
  }
  return (
    <div className="hamburger-container" onClick={_toggleSiderBar}>
      {sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
  );
};

export default connect((state) => state.app)(Hamburger);
