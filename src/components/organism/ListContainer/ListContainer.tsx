import React, { useEffect } from "react";
import { Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./ListContainer.less";
import { ITodo, TodoState } from "../../../store/type";
import { TodoList } from "../TodoList/TodoList";
import { NewTodoForm } from "../../molecule/NewTodoForm/NewTodoForm";
import {
  addTodo,
  fetchtodos,
  deleteTodo,
  onTodoStatusUpadate,
} from "../../../store/actionsCreators";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

interface ITodoListContainerProps {}

export const ListContainer: React.FunctionComponent<ITodoListContainerProps> =
  () => {
    const todoState: TodoState = useSelector((state: TodoState) => state);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchtodos());
    }, []);

    const onFormSubmit = (todo: ITodo): void => {
      dispatch(addTodo(todo));
    };

    const onRemoveTodo = (todo: ITodo): void => {
      dispatch(deleteTodo(todo));
    };

    const onTodoStatusChange = (todo: ITodo, e: CheckboxChangeEvent): void => {
      dispatch(onTodoStatusUpadate(todo));
      const updated = todoState.todos.find((ele) => ele._id === todo._id);
      if (updated) e.target.checked = updated.completed == true ? true : false;
    };

    return todoState.loading ? (
      <h2>Loading...</h2>
    ) : (
      <Row justify="center" align="middle" gutter={[0, 15]}>
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        ></Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="Create a new todo">
            <NewTodoForm onFormSubmit={onFormSubmit} />
          </Card>
        </Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="Todo List">
            <TodoList
              todos={todoState.todos}
              onTodoRemoval={onRemoveTodo}
              onTodoStatusChange={onTodoStatusChange}
            />
          </Card>
        </Col>
      </Row>
    );
  };

export default ListContainer;
