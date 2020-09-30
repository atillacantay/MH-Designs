import React from "react";

import { Col, Divider, Row } from "antd";

import "./Components.css";

import ButtonComponent from "./ButtonComponent";
import MenuComponent from "./MenuComponent";
import InputComponent from "./InputComponent";

export default function Components() {
  return (
    <div className="components-root">
      <Row >
        <Col span={24}>
          <Divider orientation="left">Button</Divider>
          <Row align="middle" gutter={16}>
            <ButtonComponent />
          </Row>
        </Col>
        <Col span={24}>
          <Divider orientation="left">Menu</Divider>
          <Row align="middle" gutter={16}>
            <MenuComponent />
          </Row>
        </Col>
        <Col span={24}>
          <Divider orientation="left">Input</Divider>
          <Row align="middle" gutter={16}>
            <InputComponent />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
