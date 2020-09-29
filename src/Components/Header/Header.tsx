import React from "react";

import "./Header.css";
import { Button, Layout } from "antd";
import { LoginOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <Layout.Header>
      <div className="header-root">
        <Button shape="round" icon={<LoginOutlined />}>
          Login
        </Button>
      </div>
    </Layout.Header>
  );
}
