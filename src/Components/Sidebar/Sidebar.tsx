import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./Sidebar.css";

import {
  AppstoreOutlined,
  DesktopOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);

  function handleCollapse() {
    setCollapsed((collapsed) => !collapsed);
  }

  return (
    <Sider
      id="sidebar"
      breakpoint="xs"
      collapsible
      collapsed={collapsed}
      onCollapse={handleCollapse}
    >
      <Link to="/">
        <div className="logo" />
      </Link>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="components" icon={<AppstoreOutlined />}>
          <Link to="components">Components</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
