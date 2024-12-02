import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "MERN Stack",
    "Data Structures in C/C++",
    "Problem Solving",
    
    "Docker",
    "Python",
    "SQL",
    "Postman",
    "Object Oriented Programming",
    
  ];
  return (
    <div className="flex flex-col gap-8">
      <SectionTitle title="About" />
      
      <div className="flex  sm:gap-3 sm:flex-col myAnim ">
        <div className="flex sm:w-full w-full sm:p-9 sm:justify-center sm:items-center">
          <img
            className="h-[70vh] border-secondary border-r-2 border-b-4 shadow-secondary"
            src="../../../public/about.png "
          ></img>
        </div>
        <div className=" flex flex-col text-tertiary gap-8  sm:w-full ">
          <p>
            I am Saransh Shishodia, a passionate and driven Computer Science
            Engineering student with a strong foundation in full-stack
            development and problem-solving. I thrive on tackling complex
            challenges, crafting innovative solutions, and continuously honing
            my technical skills to stay ahead in the ever-evolving tech
            landscape.
          </p>
          <p>
            With hands-on experience in projects like URL shorteners, anonymous
            chat platforms, and book management systems, I have developed a deep
            understanding of building scalable, efficient, and user-centric
            applications. My expertise lies in the MERN stack, Kafka, and JWT
            Authentication, alongside a solid grasp of data structures,
            object-oriented programming, and cloud technologies.
          </p>
          <p>
            I have further enhanced my knowledge through an internship at
            Salesforce, where I explored CRM systems, cloud architecture, and
            Apex programming, complemented by certifications in Python,
            Networking, and Problem Solving. My portfolio reflects my dedication
            to creating impactful projects with responsive designs, robust
            backends, and seamless user experiences.
          </p>
          
        </div>
      </div>
      <div className="flex flex-col gap-4 py-6">
        <h1 className="text-secondary text-3xl sm:text-2xl myAnim">
          Let's have a look on the technologies I am working with
        </h1>
        <div className="flex flex-wrap gap-5 ">
          {skills.map((skill, index) => (
            <button className="text-secondary border border-secondary p-2 rounded-lg myAnim">
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
