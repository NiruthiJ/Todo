import * as actionTypes from "./actionTypes";
import { AppReducer, ITodo, TodoAction, TodoState } from "./type";

export const initialState: TodoState = {
  loading: false,
  todos: [],
  error: "",
  success: "",
};

const reducer: AppReducer<"todoReducer"> = (
  state: TodoState = initialState,
  action: TodoAction
) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case actionTypes.FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [action.payload].concat(state.todos),
        success: action.message,
      };
    case actionTypes.ADD_TODO_FAILURE:
      return {
        ...state,
        error: action.message,
      };
    case actionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== (action.payload as ITodo)?._id),
        success: action.message,
      };
    case actionTypes.DELETE_TODO_FAILURE:
      return {
        ...state,
        error: action.message,
      };
    case actionTypes.TODO_STATUS_CHANGE_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((ele) => {
          if (action.payload && (action.payload as ITodo)._id === ele._id)
            return action.payload;
          else return ele;
        }),
        success: action.message,
      };
    case actionTypes.TODO_STATUS_CHANGE_FAILURE:
      return {
        ...state,
        error: action.message,
      };
    case actionTypes.RESET_SUCCESS:
      return {
        ...state,
        success: action.message,
      };
    case actionTypes.RESET_ERROR:
      return {
        ...state,
        error: action.message,
      };

    default:
      return state;
  }
};

export default reducer;
