import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import Logo from "./Logo";
import Menu from "./Menu";
const { Sider } = Layout;

const LayoutSider = (props) => {
  const sidebarLogo = useSelector((state) => {
    return state.app.sidebarLogo
  });
  const sidebarCollapsed = useSelector((state) => {
    return state.app.sidebarCollapsed
  });
  return (
    <Sider
      collapsible
      collapsed={sidebarCollapsed}
      trigger={null}
      style={{ zIndex: "10" }}
    >
      {sidebarLogo ? <Logo /> : null}
      <Menu />
    </Sider>
  );
};

export default LayoutSider;