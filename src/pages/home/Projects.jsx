import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../../resources/experiences";
import { projects } from "../../../resources/projects";

function Projects() {
  const [selectItem, setselectItem] = React.useState(0);
  return (
    <>
      <SectionTitle title="Projects " />
      <div className="flex py-10 gap-20 sm:flex-col myAnim">
        <div className="flex  flex-col gap-10 border-l-2 border-secondary w-full  sm:overflow-scroll sm:w-full sm:flex-row">
          {projects.map((project, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                setselectItem(index);
              }}
            >
              <h1
                className={`text-xl text-secondary px-10 ${
                  selectItem === index
                    ? "border-l-4 border-secondary  bg-[#13aa346c] text-white "
                    : ""
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex gap-7 sm:flex-col">
          <div className="text-tertiary flex items-center justify-center ">
          <img className="shadow-lg border-4 border-secondary shadow-secondary" src={`${projects[selectItem].image}`} />
          </div>
        <div className=" flex flex-col gap-8 sm:items-center">
          <h1 className="text-tertiary text-2xl">
            <b>{projects[selectItem].title}</b>
          </h1>
         
         <div className="text-tertiary ">
            {projects[selectItem].description}
          </div>
         
          <div className="flex gap-8 sm:flex-col sm:gap-5  sm:items-center">
          <div className="myAnim">
            <a href={projects[selectItem].link} className="text-secondary border-r-4 p-2 text-xl border-secondary shadow-lg shadow-secondary " target="blank">
               Demo
              
            </a>
          </div>

          <div className="myAnim">
            <a href={projects[selectItem].github} className="text-secondary border-r-4 p-2 text-xl border-secondary shadow-lg shadow-secondary " target="blank">
               Source Code
              
            </a>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
