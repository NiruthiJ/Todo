import axios from "axios";
import * as actionTypes from "./actionTypes";
import { Action, ActionCreator, AnyAction, Dispatch } from "redux";
import { BASE_URL, TODO_URL } from "../Api";
import { ITodo, TodoAction, TodoState } from "./type";
import store from "./store";
import { TODO_ADD_SUCCESS_MESSSAGE, TODO_DELETE_SUCCESS_MESSSAGE, TODO_STATUS_CHANGE_SUCCESS_MESSAGE } from "./MessageConstants";

export const fetchtodos = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchTodosRequest());
    return axios
      .get(BASE_URL + TODO_URL)

      .then((response) => {
        const todos = response.data;
        dispatch(fetchTodosSuccess(todos));
      })
      .catch((error) => {
        dispatch(fetchTodosFailure(error.message));
      });
  };
};

export const addTodo = (todo: ITodo) => {
  return (dispatch: Dispatch) => {

    return axios
      .post(BASE_URL + TODO_URL, todo)

      .then((response) => {
        const todo = response.data;
        dispatch(addTodoSuccess(TODO_ADD_SUCCESS_MESSSAGE, todo));
      })
      .catch((error) => {
        dispatch(addTodoFailure(error.message));
      });
  };
};
export const deleteTodo = (todo: ITodo) => {
  return (dispatch: Dispatch) => {
    return axios
      .delete(BASE_URL + TODO_URL + todo._id)
      .then((response) => {
        dispatch(deleteTodoSuccess(TODO_DELETE_SUCCESS_MESSSAGE, todo));
      })
      .catch((error) => {
        dispatch(deleteTodoFailure(error.message));
      });
  };
};

export const onTodoStatusUpadate = (todo: ITodo) => {
  return (dispatch: Dispatch) => {
    let todoUpdated = { ...todo };
    if (todo.completed) {
      todoUpdated.completed = false;
    } else {
      todoUpdated.completed = true;
    }

   return axios
      .patch(BASE_URL + TODO_URL + todoUpdated._id, todoUpdated)
      .then((response) => {
        dispatch(
          toDoUpdateSuccess(TODO_STATUS_CHANGE_SUCCESS_MESSAGE, todoUpdated)
        );
      })
      .catch((error) => {
        dispatch(toDoUpdateFailure(error.message));
      });
  };
};

export const fetchTodosRequest: ActionCreator<Action> = () => {
  return {
    type: actionTypes.FETCH_TODOS_REQUEST,
  };
};

export const fetchTodosSuccess: ActionCreator<Action> = (todos: TodoState) => {
  return {
    type: actionTypes.FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

export const fetchTodosFailure: ActionCreator<Action> = (error: string) => {
  return {
    type: actionTypes.FETCH_TODOS_FAILURE,
    payload: null,
    message: error,
  };
};

export function addTodoSuccess(message: string, todo: ITodo): TodoAction {
  return {
    type: actionTypes.ADD_TODO_SUCCESS,
    message: message,
    payload: todo,
  };
}

export function addTodoFailure(error: string): TodoAction {
  return {
    type: actionTypes.ADD_TODO_FAILURE,
    payload: null,
    message: error,
  };
}

export function deleteTodoSuccess(messge: string, todo: ITodo): TodoAction {
  return {
    type: actionTypes.DELETE_TODO_SUCCESS,
    payload: todo,
    message: messge,
  };
}
export function deleteTodoFailure(error: string): TodoAction {
  return {
    type: actionTypes.DELETE_TODO_FAILURE,
    payload: null,
    message: error,
  };
}
export function toDoUpdateSuccess(messge: string, todo: ITodo): TodoAction {
  return {
    type: actionTypes.TODO_STATUS_CHANGE_SUCCESS,
    payload: todo,
    message: messge,
  };
}
export function toDoUpdateFailure(messge: string): TodoAction {
  return {
    type: actionTypes.TODO_STATUS_CHANGE_FAILURE,
    payload: null,
    message: messge,
  };
}

export function resetSuccess(messge: string): TodoAction {
  return {
    type: actionTypes.RESET_SUCCESS,
    payload: null,
    message: messge,
  };
}

export function resetError(messge: string): TodoAction {
  return {
    type: actionTypes.RESET_ERROR,
    payload: null,
    message: messge,
  };
}

store.subscribe(() => {});
