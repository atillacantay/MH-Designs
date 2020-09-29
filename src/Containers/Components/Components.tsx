import React from "react";

import {
  Button,
  Checkbox,
  Col,
  Divider,
  Input,
  Radio,
  Row,
  Tooltip,
  Typography,
} from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import { ReloadOutlined, FileImageOutlined } from "@ant-design/icons";
import "./Components.css";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

const ButtonTypes: ["default", "primary", "ghost", "dashed", "link", "text"] = [
  "default",
  "primary",
  "ghost",
  "dashed",
  "link",
  "text",
];

const ButtonShapes: ["circle", "round"] = ["circle", "round"];

const ButtonSizes: ["small", "middle", "large"] = ["small", "middle", "large"];

interface ButtonProps {
  type?: typeof ButtonTypes[number];
  shape?: typeof ButtonShapes[number];
  size?: typeof ButtonSizes[number];
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  text?: string;
}

export default function Components() {
  const [buttonProps, setButtonProps] = React.useState<ButtonProps>({
    type: "default",
    text: "Button",
  });

  function handleReload() {
    setButtonProps({ type: "default", text: "Button" });
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setButtonProps({ ...buttonProps, text: event.target.value });
  }

  function handleRadioChange(event: RadioChangeEvent) {
    setButtonProps({
      ...buttonProps,
      [event.target.name as any]: event.target.value,
    });
  }

  function handleCheck(event: CheckboxChangeEvent) {
    if (event.target.name === "icon")
      setButtonProps({
        ...buttonProps,
        icon: event.target.checked && <FileImageOutlined />,
      });
    else
      setButtonProps({
        ...buttonProps,
        [event.target.name as any]: event.target.checked,
      });
  }

  return (
    <div className="components-root">
      <Row align="middle">
        <Divider orientation="left">Button</Divider>
        <Col span={12}>
          <Button {...buttonProps}>{buttonProps.text}</Button>
        </Col>
        <Col span={12}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Tooltip title="Reload">
                <Button icon={<ReloadOutlined />} onClick={handleReload} />
              </Tooltip>
            </Col>
            <Col span={24}>
              <Typography.Title level={5}>Text</Typography.Title>
              <Input value={buttonProps.text} onChange={handleInputChange} />
            </Col>
            <Col span={24}>
              <Typography.Title level={5}>Shape</Typography.Title>
              <Radio.Group
                name="shape"
                value={buttonProps.shape}
                onChange={handleRadioChange}
                buttonStyle="solid"
              >
                {ButtonShapes.map((type) => (
                  <Radio.Button key={type} value={type}>
                    {type}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Col>
            <Col span={24}>
              <Typography.Title level={5}>Type</Typography.Title>
              <Radio.Group
                name="type"
                value={buttonProps.type}
                onChange={handleRadioChange}
                buttonStyle="solid"
              >
                {ButtonTypes.map((type) => (
                  <Radio.Button key={type} value={type}>
                    {type}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Col>
            <Col span={24}>
              <Typography.Title level={5}>Size</Typography.Title>
              <Radio.Group
                name="size"
                value={buttonProps.size}
                onChange={handleRadioChange}
                buttonStyle="solid"
              >
                {ButtonSizes.map((type) => (
                  <Radio.Button key={type} value={type}>
                    {type}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Col>
            <Col span={24}>
              <Typography.Title level={5}>Others</Typography.Title>
              <Checkbox
                name="loading"
                checked={buttonProps.loading}
                onChange={handleCheck}
              >
                Loading
              </Checkbox>
              <Checkbox
                name="disabled"
                checked={buttonProps.disabled}
                onChange={handleCheck}
              >
                Disabled
              </Checkbox>
              <Checkbox
                name="icon"
                checked={!!buttonProps.icon}
                onChange={handleCheck}
              >
                With Icon
              </Checkbox>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
