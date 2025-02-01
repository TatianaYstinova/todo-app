import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../store/actions.ts";
import { RootState } from "../store/store";
import { TextField } from "@mui/material";
import { TaskField } from "../components/TaskField/TaskField.tsx";

 export const TaskComponent = () => {
    // const dispatch = useDispatch();
    // const tasks = useSelector((state:RootState) => state.task.tasks);
    // // const error = useSelector((state:RootState) => state.error);
  
    // useEffect(() => {
    //   dispatch(loadTasks());
    // }, [dispatch]);

    return (
      <TaskField/>
    );
  };

  
  