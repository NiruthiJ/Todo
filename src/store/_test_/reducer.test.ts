import React from "react"
import { ADD_TODO_FAILURE, ADD_TODO_SUCCESS, DELETE_TODO_FAILURE, DELETE_TODO_SUCCESS, FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, TODO_STATUS_CHANGE_SUCCESS } from "../actionTypes"
import reducer from "../reducer"
import { ITodo } from "../type"

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        loading: false,
        todos: [],
        error: "",
        success: "",
      }
    )
  })

  it('should change loading to true when fetch request', () => {
    expect(reducer({loading: false,
        todos: [],
        error: "error",
        success: "success"}, { type: FETCH_TODOS_REQUEST})).toEqual(
      {
        loading: true,
        todos: [],
        error: "error",
        success: "success"
      }
    )
  })

  it('should change loading to false and add todos payload when fetch request', () => {
    const payload:ITodo[]=[{title:"title1"},{title:"title2"}]
    expect(reducer({loading: true,
        todos: [],
        error: "",
        success: ""}, { type: FETCH_TODOS_SUCCESS,payload:payload})).toEqual(
      {
        loading: false,
        todos: payload,
        error: "",
        success: ""
      }
    )
  })

  it('should change loading to false and add  payload to error when fetch request', () => {
    const payload="error payload"
    const todos:ITodo[]=[{title:"title1"},{title:"title2"}]
    expect(reducer({loading: true,
        todos: todos,
        error: "",
        success: ""}, { type: FETCH_TODOS_FAILURE,payload:payload})).toEqual(
      {
        loading: false,
        todos: todos,
        error: payload,
        success: ""
      }
    )
  })

  it('should concat  payload to todos and set success message when add to do success', () => {
    const payload="error payload"
    const todos:ITodo[]=[{title:"title1"},{title:"title2"}]
    const todo:ITodo={title:"title3"}
    const msg="add success"
    //let useEffect:jest.fn();
    const useEffect = jest.spyOn(React, "useEffect");

    const mockUseEffect = () => {
         useEffect.mockImplementationOnce(f => f());
      };
    mockUseEffect(); 

    expect(reducer({loading: false,
        todos: todos,
        error: "",
        success: ""}, { type: ADD_TODO_SUCCESS,payload:todo,message:msg})).toEqual(
      {
        loading: false,
        todos: [{title:"title3"},{title:"title1"},{title:"title2"}],
        error: "",
        success: msg
      }
    )
  })
 
  it('should set error message when add to do failed', () => {
    const error="error payload"
    const todos:ITodo[]=[{title:"title1"},{title:"title2"}]

    expect(reducer({loading: false,
        todos: todos,
        error: "",
        success: ""}, { type: ADD_TODO_FAILURE,message:error})).toEqual(
      {
        loading: false,
        todos: todos,
        error: error,
        success: ""
      }
    )
  })

  it('should remove  payload from todos and set success message when delete to do success', () => {
    const todos:ITodo[]=[{_id:"1",title:"title1"},{_id:"2",title:"title2"},{_id:"3",title:"title3"}]
    const todo:ITodo={_id:"3",title:"title3"}
    const msg="delete success"
    expect(reducer({loading: false,
        todos: todos,
        error: "",
        success: ""}, { type: DELETE_TODO_SUCCESS,payload:todo,message:msg})).toEqual(
      {
        loading: false,
        todos: [{_id:"1",title:"title1"},{_id:"2",title:"title2"}],
        error: "",
        success: msg
      }
    )
  })

  it('should set error message when delete to do failed', () => {
    const todos:ITodo[]=[{_id:"1",title:"title1"},{_id:"2",title:"title2"},{_id:"3",title:"title3"}]
    const msg="delete failed"
    expect(reducer({loading: false,
        todos: todos,
        error: "",
        success: ""}, { type: DELETE_TODO_FAILURE,message:msg})).toEqual(
      {
        loading: false,
        todos: todos,
        error: msg,
        success: ""
      }
    )
  })

})