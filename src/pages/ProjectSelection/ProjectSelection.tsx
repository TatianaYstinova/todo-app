import "./Project.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects } from "../../store/actions.ts";
import { Link } from "react-router-dom";
import { State } from "../../store/reducers.ts";

export const ProjectSelector = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state: State) => state.projects);

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  return (
    <div className="project">
      <h2>Список проектов</h2>
      <div className="container-card-project">
        {projects.map((project: { id: any; title: any }) => (
          <Link
            to={`/tasks?projectId=${project.id}`}
            style={{ textDecoration: "none" }}
            key={project.id}
          >
            <div className="card">
              <div className="box">
                <div className="content">
                  <h1>{project.title}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
