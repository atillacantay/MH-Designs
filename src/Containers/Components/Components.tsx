import {
  Button,
  Checkbox,
  Col,
  Divider,
  Input,
  Radio,
  Row,
  Typography,
} from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { RadioChangeEvent } from "antd/lib/radio";
import React from "react";
import "./Components.css";

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
  loading?:
    | boolean
    | {
        delay?: number;
      };
  disabled?: boolean;
  icon?: React.ReactNode;
  text?: string;
}

export default function Components() {
  const [buttonProps, setButtonProps] = React.useState<ButtonProps>({
    type: "default",
    text: "Button",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setButtonProps({ ...buttonProps, text: event.target.value });
  }

  function handleRadioChange(event: RadioChangeEvent) {
    // if (buttonProps.shape) setButtonProps({ ...buttonProps, shape: undefined });
    console.log(event.target.name);
    if (event.target.name === "shape")
      setButtonProps({
        ...buttonProps,
        [event.target.name as any]: event.target.value,
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
              <Typography.Title level={5}>Text</Typography.Title>
              <Input
                defaultValue={buttonProps.text}
                onChange={handleInputChange}
              />
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
          </Row>
        </Col>
      </Row>
    </div>
  );
}
