
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ProjectSelector} from './pages/ProjectSelection.tsx'
import React from 'react';
import { TaskComponent } from './pages/TaskBoard.tsx';

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
