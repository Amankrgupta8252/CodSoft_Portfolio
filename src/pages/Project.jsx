import React from "react";
import "../App.css"; // Make sure to add any necessary styles

function Project() {
  // Project data array
  const projects = [
    
    {
      imgSrc:
        "https://th.bing.com/th/id/OIP.dtRnB7JBjyTlSCuO8PKdLgHaEK?rs=1&pid=ImgDetMain",
      title: "Project One",
      description: "This is the first project description.",
    },
    {
      imgSrc:
        "https://th.bing.com/th/id/OIP.b84xVQt90llMhLA-lho6AwHaD4?w=1500&h=785&rs=1&pid=ImgDetMain",
      title: "Project Two",
      description: "This is the second project description.",
    },
    {
      imgSrc:
        "https://cdn.dribbble.com/users/13000657/screenshots/19999580/food_app_4x.png",
      title: "Project Three",
      description: "This is the third project description.",
    },
    {
      imgSrc:
        "https://s3-alpha.figma.com/hub/file/2900897751/b5ccf2b2-3e9a-490b-ac55-a94a768f767a-cover.png",
      title: "Project Four",
      description: "This is the fourth project description.",
    },
    {
      imgSrc:
        "https://th.bing.com/th/id/OIP.dtRnB7JBjyTlSCuO8PKdLgHaEK?rs=1&pid=ImgDetMain",
      title: "Project One",
      description: "This is the first project description.",
    },
    {
      imgSrc:
        "https://th.bing.com/th/id/OIP.b84xVQt90llMhLA-lho6AwHaD4?w=1500&h=785&rs=1&pid=ImgDetMain",
      title: "Project Two",
      description: "This is the second project description.",
    },
    {
      imgSrc:
        "https://cdn.dribbble.com/users/13000657/screenshots/19999580/food_app_4x.png",
      title: "Project Three",
      description: "This is the third project description.",
    },
    {
      imgSrc:
        "https://s3-alpha.figma.com/hub/file/2900897751/b5ccf2b2-3e9a-490b-ac55-a94a768f767a-cover.png",
      title: "Project Four",
      description: "This is the fourth project description.",
    },
    {
      imgSrc:
        "https://th.bing.com/th/id/OIP.dtRnB7JBjyTlSCuO8PKdLgHaEK?rs=1&pid=ImgDetMain",
      title: "Project One",
      description: "This is the first project description.",
    },
    {
      imgSrc:
        "https://th.bing.com/th/id/OIP.b84xVQt90llMhLA-lho6AwHaD4?w=1500&h=785&rs=1&pid=ImgDetMain",
      title: "Project Two",
      description: "This is the second project description.",
    },
    {
      imgSrc:
        "https://cdn.dribbble.com/users/13000657/screenshots/19999580/food_app_4x.png",
      title: "Project Three",
      description: "This is the third project description.",
    },
    {
      imgSrc:
        "https://s3-alpha.figma.com/hub/file/2900897751/b5ccf2b2-3e9a-490b-ac55-a94a768f767a-cover.png",
      title: "Project Four",
      description: "This is the fourth project description.",
    },
  ];

  return (
    <div id="project" className="container my-5">
      <h2 className="text-center text-white mb-4">My Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
        {projects.map((project, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <div className="card h-100 shadow-lg" style={{ width: "18rem" }}>
              <img
                src={project.imgSrc}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
