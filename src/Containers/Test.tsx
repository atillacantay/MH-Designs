import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons";

export default function Test() {
  return (
    <div style={{ padding: 16 }}>
      <Link to="/">
        <Button type="primary" icon={<LeftSquareOutlined />}>
          Return to main page
        </Button>
      </Link>
    </div>
  );
}
