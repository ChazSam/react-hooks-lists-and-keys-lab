import React from "react";

function ProjectItem({ name, about, technologies }) {
 // console.log(about);
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
       { technologies.map(obj => <span key={obj}> {obj} </span>)}
      </div>
    </div>
  );
}

export default ProjectItem;
