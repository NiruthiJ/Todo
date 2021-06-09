import React from "react";

import { List } from "antd";

import { ITodo } from "../../../store/type";
import { TodoItem } from "../../molecule/TodoItem/TodoItem";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

interface ITodoListProps {
  todos: ITodo[];
  onTodoRemoval: (todo: ITodo) => void;
  onTodoStatusChange: (todo: ITodo, e: CheckboxChangeEvent) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({
  todos,
  onTodoRemoval,
  onTodoStatusChange,
}) => (
  <List
    locale={{
      emptyText: "Nothing to be done",
    }}
    dataSource={todos}
    renderItem={(todo) => (
      <TodoItem
        todo={todo}
        onTodoStatusChange={onTodoStatusChange}
        onTodoRemoval={onTodoRemoval}
      />
    )}
    pagination={{
      position: "bottom",
      pageSize: 10,
    }}
  />
);
