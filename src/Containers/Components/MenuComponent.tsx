import React from "react";

import {
  Menu,
  Button,
  Col,
  Radio,
  Row,
  Tooltip,
  Typography,
  Switch,
  Space,
} from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import {
  ReloadOutlined,
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import "./Components.css";

const MenuModes: ["vertical", "horizontal", "inline"] = [
  "vertical",
  "horizontal",
  "inline",
];

export interface MenuProps {
  mode?: typeof MenuModes[number];
  theme?: "light" | "dark";
  inlineCollapsed?: boolean;
  selectable?: boolean;
}

export default function MenuComponent() {
  const [menuProps, setMenuProps] = React.useState<MenuProps>({
    mode: "inline",
    theme: "light",
    selectable: true,
  });

  function handleReload() {
    setMenuProps({ mode: "inline", theme: "light", selectable: true });
  }

  function handleRadioChange(event: RadioChangeEvent) {
    setMenuProps({
      ...menuProps,
      [event.target.name as any]: event.target.value,
    });
  }

  function handleSwitch(key: string, checked: boolean) {
    switch (key) {
      case "theme":
        setMenuProps({ ...menuProps, theme: checked ? "dark" : "light" });
        break;
      case "collapse":
        setMenuProps({
          ...menuProps,
          inlineCollapsed: !menuProps.inlineCollapsed,
        });
        break;
      case "selectable":
        setMenuProps({
          ...menuProps,
          selectable: checked,
        });
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Col span={menuProps.mode === "horizontal" ? 24 : 12}>
        <Menu {...menuProps}>
          <Menu.Item key="1" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            Navigation Two
          </Menu.Item>
          <Menu.SubMenu
            key="sub1"
            icon={<AppstoreOutlined />}
            title="Navigation Three"
          >
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub2"
            icon={<SettingOutlined />}
            title="Navigation Four"
          >
            <Menu.Item key="5">Option 5</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="link" icon={<LinkOutlined />}>
            <a
              href="https://mondayhero.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monday Hero
            </a>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={menuProps.mode === "horizontal" ? 24 : 12}>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Tooltip title="Reload">
              <Button icon={<ReloadOutlined />} onClick={handleReload} />
            </Tooltip>
          </Col>
          <Col span={24}>
            <Typography.Title level={5}>Mode</Typography.Title>
            <Radio.Group
              name="mode"
              value={menuProps.mode}
              onChange={handleRadioChange}
              buttonStyle="solid"
            >
              {MenuModes.map((type) => (
                <Radio.Button key={type} value={type}>
                  {type}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Col>
          <Col span={24}>
            <Space>
              <Switch onChange={(checked) => handleSwitch("theme", checked)} />
              Change Theme
              <Switch
                onChange={(checked) => handleSwitch("collapse", checked)}
              />
              Collapse
              <Switch
                checked={menuProps.selectable}
                onChange={(checked) => handleSwitch("selectable", checked)}
              />
              Selectable
            </Space>
          </Col>
        </Row>
      </Col>
    </>
  );
}
