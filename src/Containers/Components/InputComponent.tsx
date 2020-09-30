import React from "react";

import {
  Button,
  Checkbox,
  Col,
  Input,
  InputNumber,
  Radio,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import { ReloadOutlined } from "@ant-design/icons";
import "./Components.css";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

const InputSizes: ["small", "middle", "large"] = ["small", "middle", "large"];

export interface InputProps {
  size?: typeof InputSizes[number];
  value?: string;
  bordered?: boolean;
  maxLength?: number;
}

export default function InputComponent() {
  const [inputProps, setInputProps] = React.useState<InputProps>({
    size: "middle",
    value: "This is an input",
    bordered: true,
    maxLength: 25,
  });

  function handleReload() {
    setInputProps({
      size: "middle",
      value: "This is an input",
      bordered: true,
      maxLength: 25,
    });
  }

  function handleRadioChange(event: RadioChangeEvent) {
    setInputProps({
      ...inputProps,
      [event.target.name as any]: event.target.value,
    });
  }

  function handleCheck(event: CheckboxChangeEvent) {
    setInputProps({
      ...inputProps,
      [event.target.name as any]: event.target.checked,
    });
  }

  function handleInputNumber(value: number | string | undefined) {
    setInputProps({
      ...inputProps,
      maxLength: value as number,
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputProps({
      ...inputProps,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <Col span={12}>
        <Space>
          <Input name="value" {...inputProps} onChange={handleChange} />
          <Typography.Text>Max Length: {inputProps.maxLength}</Typography.Text>
        </Space>
      </Col>
      <Col span={12}>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Tooltip title="Reload">
              <Button icon={<ReloadOutlined />} onClick={handleReload} />
            </Tooltip>
          </Col>
          <Col span={24}>
            <Typography.Title level={5}>Size</Typography.Title>
            <Radio.Group
              name="size"
              value={inputProps.size}
              onChange={handleRadioChange}
              buttonStyle="solid"
            >
              {InputSizes.map((type) => (
                <Radio.Button key={type} value={type}>
                  {type}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Col>
          <Col span={24}>
            <Typography.Title level={5}>Max Input Length</Typography.Title>
            <InputNumber
              name="maxLength"
              min={0}
              value={inputProps.maxLength}
              onChange={(value) => handleInputNumber(value)}
            />
          </Col>
          <Col span={24}>
            <Typography.Title level={5}>Others</Typography.Title>
            <Checkbox
              name="bordered"
              checked={inputProps.bordered}
              onChange={handleCheck}
            >
              Bordered
            </Checkbox>
          </Col>
        </Row>
      </Col>
    </>
  );
}
