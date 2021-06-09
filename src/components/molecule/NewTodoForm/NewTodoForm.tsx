import React from "react";
import { Form, Row, Col, Button, Input, DatePicker } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import "./NewTodoForm.less";
import { ITodo } from "../../../store/type";
import moment from "moment";

interface IAddTodoFormProps {
  onFormSubmit: (todo: ITodo) => void;
}

export const NewTodoForm: React.FC<IAddTodoFormProps> = ({ onFormSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    onFormSubmit({
      title: form.getFieldValue("title"),
      description: form.getFieldValue("description"),
      endDate: form.getFieldValue("endDate"),
    });

    form.resetFields();
  };

  function disabledDate(current: moment.Moment) {
    return current && current.valueOf() < Date.now();
  }
  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="todo-form"
    >
      <Row>
        <Col span={24}>
          <Form.Item
            name={"title"}
            label="Todo title : "
            wrapperCol={{ span: 100 }}
            rules={[{ required: true, message: "name required" }]}
          >
            <Input placeholder="add new todo" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name={"description"} label="Todo description : ">
            <Input placeholder="add description" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name="endDate" label="Closing time : ">
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:00:00"
              className="w-full"
              disabledDate={disabledDate}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="ghost" htmlType="submit" block>
            <PlusCircleFilled />
            Add todo
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
