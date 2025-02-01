
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from 'react';
import { TaskComponent } from './pages/TaskBoard.tsx';
import { ProjectSelector } from './pages/ProjectSelection/ProjectSelection.tsx';

export const App = () => {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<ProjectSelector />} />
        <Route path='/task' element={<TaskComponent/>} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
