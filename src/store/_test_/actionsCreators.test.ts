import * as actionsCreators from "../actionsCreators"
import * as actionTypes from "../actionTypes"
import { ITodo, TodoAction, TodoState } from "../type"
import configureMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import * as types from '../actionTypes'
import fetchMock from 'fetch-mock'
import expect from 'expect' 
import axios from 'axios';
import * as MessageConstants from "../MessageConstants"

type DispatchExts = ThunkDispatch<TodoState, undefined, TodoAction>;

const middlewares = [thunk];
const mockStore = configureMockStore<TodoState, DispatchExts>(middlewares);


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('actions',()=>{
    it('should create action to request fetch todos',()=>{
        const expectedAction = {
          type: actionTypes.FETCH_TODOS_REQUEST,
        }
        expect(actionsCreators.fetchTodosRequest()).toEqual(expectedAction)
    })
    it('should create action for fetch todo success',()=>{
        const payload:ITodo[]=[{title:"title1"},{title:"title2"}]
        const expectedAction = {
          type: actionTypes.FETCH_TODOS_SUCCESS,
          payload:payload
        }
        expect(actionsCreators.fetchTodosSuccess(payload)).toEqual(expectedAction)
    })
    it('should create action for fetch todo failure',()=>{
        const message="error"
        const expectedAction = {
            type: actionTypes.FETCH_TODOS_FAILURE,
            payload: null,
            message: message,
        }
        expect(actionsCreators.fetchTodosFailure(message)).toEqual(expectedAction)
    })
    it('should create action for add todo success',()=>{
        const todo:ITodo={title:"title1"}
        const message="add success"
        const expectedAction = {
            type: actionTypes.ADD_TODO_SUCCESS,
            message:message ,
            payload: todo,
        }
        expect(actionsCreators.addTodoSuccess(message,todo)).toEqual(expectedAction)
    })
    it('should create action for add todo failure',()=>{
        const message="error"
        const expectedAction = {
            type: actionTypes.ADD_TODO_FAILURE,
            payload: null,
            message:message ,
        }
        expect(actionsCreators.addTodoFailure(message)).toEqual(expectedAction)
    })
    it('should create action for delete todo success',()=>{
        const todo:ITodo={title:"title1"}
        const message="delete success"
        const expectedAction = {
            type: actionTypes.DELETE_TODO_SUCCESS,
             payload: todo,
            message: message,
        }
        expect(actionsCreators.deleteTodoSuccess(message,todo)).toEqual(expectedAction)
    })
    it('should create action for delete todo failure',()=>{
        const message="error"
        const expectedAction = {
            type: actionTypes.DELETE_TODO_FAILURE,
            payload: null,
            message: message,
        }
        expect(actionsCreators.deleteTodoFailure(message)).toEqual(expectedAction)
    })
    it('should create action for todo update success',()=>{
        const todo:ITodo={title:"title1"}
        const message="update success"
        const expectedAction = {
            type: actionTypes.TODO_STATUS_CHANGE_SUCCESS,
            payload: todo,
            message: message,
        }
        expect(actionsCreators.toDoUpdateSuccess(message,todo)).toEqual(expectedAction)
    })
    it('should create action for todo update failure',()=>{
        const message="error"
        const expectedAction = {
            type: actionTypes.TODO_STATUS_CHANGE_FAILURE,
            payload: null,
            message: message,
        }
        expect(actionsCreators.toDoUpdateFailure(message)).toEqual(expectedAction)
    })
    it('should create action for reset success',()=>{
        const message=""
        const expectedAction = {
            type: actionTypes.RESET_SUCCESS,
            payload: null,
            message: message,
        }
        expect(actionsCreators.resetSuccess(message)).toEqual(expectedAction)
    })
    it('should create action for reset error',()=>{
        const message=""
        const expectedAction = {
            type: actionTypes.RESET_ERROR,
            payload: null,
            message: message,
        }
        expect(actionsCreators.resetError(message)).toEqual(expectedAction)
    })
})



describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
      const todos:ITodo[]=[{title:"title1"},{title:"title2"}]
      mockedAxios.get.mockResolvedValue({ data: todos});
      const expectedActions = [

        { type: types.FETCH_TODOS_REQUEST },
        { type: types.FETCH_TODOS_SUCCESS, payload: todos }
      ]
      const store = mockStore();

    return store.dispatch(actionsCreators.fetchtodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })


  
  })

  it('creates FETCH_TODOS_FAILURE when fetching todos has been done', () => {
    const error={message:'Network error: Something went wrong'}
    mockedAxios.get.mockRejectedValue(error);
    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_FAILURE, payload: null, message:error.message }
    ]
    const store = mockStore();

  return store.dispatch(actionsCreators.fetchtodos()).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})


it('creates ADD_TODO_SUCCESS when adding todo has been done', () => {
    const todo:ITodo={title:"title1"};
    mockedAxios.post.mockResolvedValue({ data: todo});
    const expectedActions = [
      { type: types.ADD_TODO_SUCCESS, payload:{title:"title1"}, message:MessageConstants.TODO_ADD_SUCCESS_MESSSAGE }
    ]
    const store = mockStore();

  return store.dispatch(actionsCreators.addTodo(todo)).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })



})

it('creates ADD_TODO_FAILURE when adding todo has been done', () => {
const todo:ITodo={title:"title1"};
  const error={message:'Network error: Something went wrong'}
  mockedAxios.post.mockRejectedValue(error);
  const expectedActions = [
    { type: types.ADD_TODO_FAILURE, payload: null, message:error.message }
  ]
  const store = mockStore();

return store.dispatch(actionsCreators.addTodo(todo)).then(() => {
  expect(store.getActions()).toEqual(expectedActions)
})
})

it('creates DELETE_TODO_SUCCESS when deleting todo has been done', () => {
    const todo:ITodo={title:"title1"};
    mockedAxios.delete.mockResolvedValue({ data: todo});
    const expectedActions = [
      { type: types.DELETE_TODO_SUCCESS, payload:{title:"title1"}, message:MessageConstants.TODO_DELETE_SUCCESS_MESSSAGE }
    ]
    const store = mockStore();

  return store.dispatch(actionsCreators.deleteTodo(todo)).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })



})

it('creates DELETE_TODO_FAILURE when deleting todo has been done', () => {
const todo:ITodo={title:"title1"};
  const error={message:'Network error: Something went wrong'}
  mockedAxios.delete.mockRejectedValue(error);
  const expectedActions = [
    { type: types.DELETE_TODO_FAILURE, payload: null, message:error.message }
  ]
  const store = mockStore();

return store.dispatch(actionsCreators.deleteTodo(todo)).then(() => {
  expect(store.getActions()).toEqual(expectedActions)
})
})

it('create TODO_STATUS_CHANGE_SUCCESS when updating todo status has been done', () => {
    const todo:ITodo={title:"title1"};
    mockedAxios.patch.mockResolvedValue({ data: todo});
    const expectedActions = [
      { type: types.TODO_STATUS_CHANGE_SUCCESS, payload:{title:"title1",completed:true}, message:MessageConstants.TODO_STATUS_CHANGE_SUCCESS_MESSAGE }
    ]
    const store = mockStore();

  return store.dispatch(actionsCreators.onTodoStatusUpadate(todo)).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })



})

it('creates TODO_STATUS_CHANGE_FAILURE when updating todo status has been done', () => {
const todo:ITodo={title:"title1"};
  const error={message:'Network error: Something went wrong'}
  mockedAxios.patch.mockRejectedValue(error);
  const expectedActions = [
    { type: types.TODO_STATUS_CHANGE_FAILURE, payload: null, message:error.message }
  ]
  const store = mockStore();

return store.dispatch(actionsCreators.onTodoStatusUpadate(todo)).then(() => {
  expect(store.getActions()).toEqual(expectedActions)
})
})
})