import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProjects } from '../store/actions.ts';
import { RootState } from '../store/store';
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
        <div>
          {projects.map((project: { id: any; title: any; }) => (
            <div className="card" key={project.id}>
              <div className="box">
                <div className="content">
                  <h1>
                    {project.id}
                  </h1>
                  <div className="subtitle1">
                    {project.title}
                  </div>
                </div> 
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
  
};

