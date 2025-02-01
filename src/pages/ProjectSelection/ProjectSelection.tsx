import "./Project.css";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProjects } from '../../store/actions.ts';
import { RootState } from '../../store/store.ts';
import { Link } from 'react-router-dom';


export const ProjectSelector = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state:RootState) => state.project.projects);

  useEffect(() => {
    dispatch(loadProjects(projects));
  }, [dispatch]);

  return (
    <div className='project'>
      <h2>Список проектов</h2>
      <Link to="/task" style={{ textDecoration: 'none' }}>
        <div className='container-card-project'>
          {projects.map((project: { id: any; title: any; }) => (
            <div className="card" key={project.id}>
              <div className="box">
                <div className="content">
                  <h1>
                    {project.title}
                  </h1>
                </div> 
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
  
};

