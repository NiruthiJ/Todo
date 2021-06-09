import React from "react";
import { Tooltip, Tag, List, Button, Popconfirm, Checkbox } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

import "./TodoItem.less";
import { ITodo } from "../../../store/type";
import DaysRemainText from "../../atom/DaysRemainText/DaysRemainText";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

interface ITodoItemProps {
  todo: ITodo;
  onTodoRemoval: (todo: ITodo) => void;
  onTodoStatusChange: (todo: ITodo, e: CheckboxChangeEvent) => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  onTodoRemoval,
  onTodoStatusChange,
}) => {
  return (
    <div>
      <List.Item
        actions={[
          <Tooltip
            title={todo.completed ? "Mark as uncompleted" : "Mark as completed"}
          >
            <Checkbox
              onChange={(e) => onTodoStatusChange(todo, e)}
              defaultChecked={todo.completed}
            ></Checkbox>
          </Tooltip>,
          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={() => {
              onTodoRemoval(todo);
            }}
          >
            <Button className="align-center" type="primary" danger>
              <DeleteOutlined />
            </Button>
          </Popconfirm>,
        ]}
        className="list-item"
        key={todo._id}
      >
        <div className="todo-item">
          <div>
            <Tag color={"#BEBEBE"} className="todo-tag">
              {todo.title}
            </Tag>
            <div className="align-text-bottom text-base text-left bottomInfo block bg-blac">
              <DaysRemainText
                endDate={todo.endDate}
                completed={todo.completed}
              ></DaysRemainText>
            </div>
          </div>
        </div>
      </List.Item>
    </div>
  );
};
