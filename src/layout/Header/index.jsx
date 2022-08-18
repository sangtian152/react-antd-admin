import { Layout, Menu, Avatar, Modal, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "@/store/modules/user";
import BreadCrumb from "@/components/BreadCrumb";
import FullScreen from "@/components/FullScreen";
import Hamburger from "@/components/Hamburger";
import Settings from "@/components/Settings";
import defaultAvatar from "@/assets/avatar.gif"
import "./index.scss";
const { Header } = Layout;
const LayoutHeader = () => {
  const state = useSelector((state) => {
    return {
      ...state.app,
      ...state.user,
    };
  });
  const dispatch = useDispatch();
  const { token, avatar, showSettings, fixedHeader, sidebarCollapsed } = state;
  const doLogout = (token) => {
    Modal.confirm({
      title: "注销",
      content: "确定要退出系统吗?",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        dispatch(logout(token));
      },
    });
  };
  const onClick = ({ key }) => {
    switch (key) {
      case "logout":
        doLogout(token);
        break;
      default:
        break;
    }
  };
  const items = [
    { label: <Link to="/">首页</Link>, key: "dashboard" },
    {
      label: (
        <a
          target="_blank"
          href="https://gitee.com/sangtian152/react-antd-admin"
          rel="noopener noreferrer"
        >
          项目地址
        </a>
      ),
      key: "project",
    },
    { type: 'divider' },
    { label: "注销", key: "logout" },
  ];
  const menu = <Menu onClick={onClick} items={items} />;
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
                <Avatar shape="square" size="medium" src={avatar || defaultAvatar} />
                <CaretDownOutlined />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    </>
  );
};
export default LayoutHeader;
