import { ComponentType, ReactNode } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import { Action, Dispatch } from "@reduxjs/toolkit";

export function connectToRedux(WrappedComponent: any) {

  const mapStateToProps = (state: Application.ReducerType) => ({
    value: state.counter.value,
  });
  
  const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  });
  

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
}