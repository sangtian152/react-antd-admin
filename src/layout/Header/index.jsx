import { Layout, Menu, Avatar, Modal, Dropdown } from 'antd';
import { CaretDownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import BreadCrumb from "@/components/BreadCrumb";
import FullScreen from "@/components/FullScreen";
import Hamburger from "@/components/Hamburger";
import Settings from "@/components/Settings";
import "./index.scss"
const { Header } = Layout
const LayoutHeader = () => {
    const state = useSelector(state => {
      return {
        ...state.app,
        ...state.user
      }
    })
    const { token, avatar, showSettings, logout, fixedHeader, sidebarCollapsed } = state
    const handleLogout = (token) => {
        Modal.confirm({
          title: "注销",
          content: "确定要退出系统吗?",
          okText: "确定",
          cancelText: "取消",
          onOk: () => {
            logout(token);
          },
        });
      };
      const onClick = ({ key }) => {
        switch (key) {
          case "logout":
            handleLogout(token);
            break;
          default:
            break;
        }
      };
      const menu = (
        <Menu onClick={onClick}>
          <Menu.Item key="dashboard">
            <Link to="/dashboard">首页</Link>
          </Menu.Item>
          <Menu.Item key="project">
            <a
              target="_blank"
              href="https://github.com/NLRX-WJC/react-antd-admin-template"
              rel="noopener noreferrer"
            >
              项目地址
            </a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="logout">注销</Menu.Item>
        </Menu>
      );
    const computedStyle = () => {
        let styles;
        if (fixedHeader) {
          if (sidebarCollapsed) {
            styles = {
              width: "calc(100% - 80px)",
            };
          } else {
            styles = {
              width: "calc(100% - 200px)",
            };
          }
        } else {
          styles = {
            width: "100%",
          };
        }
        return styles;
      };
    return (
        <>
            {fixedHeader ? <Header /> : null}
            <Header
                style={computedStyle()}
                className={fixedHeader ? "fix-header" : ""}
            >
                <Hamburger />
                <BreadCrumb />
                <div className="right-menu">
                    <FullScreen />
                    {showSettings ? <Settings /> : null}
                    <div className="dropdown-wrap">
                        <Dropdown overlay={menu}>
                        <div>
                            <Avatar shape="square" size="medium" src={avatar} />
                            <CaretDownOutlined />
                        </div>
                        </Dropdown>
                    </div>
                </div>
            </Header>
        </>
    )
}
export default LayoutHeader;