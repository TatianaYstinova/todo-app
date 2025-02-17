import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import { TaskComponent } from "./pages/TaskBoard/TaskBoard.tsx";
import { ProjectSelector } from "./pages/ProjectSelection/ProjectSelection.tsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const App = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<ProjectSelector />} />
            <Route path="/tasks" element={<TaskComponent />} />
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </div>
  );
};

export default App;
