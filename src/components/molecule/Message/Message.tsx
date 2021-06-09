import { message } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetError, resetSuccess } from "../../../store/actionsCreators";
import { TodoState } from "../../../store/type";

const Message: FC = () => {
  const success: string = useSelector((state: TodoState) => state.success);
  const error: string = useSelector((state: TodoState) => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      message.success(success);
      dispatch(resetSuccess(""));
    }
  }, [dispatch, success]);

  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(resetError(""));
    }
  }, [dispatch, error]);

  return <></>;
};

export default Message;
