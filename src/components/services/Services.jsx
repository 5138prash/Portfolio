import React from "react";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";
const Services = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "Frontend Development",
      description:
        "Frontend Developer passionate about crafting responsive, user-friendly interfaces with modern web technologies like HTML, CSS, JavaScript, and React. I focus on delivering clean, accessible, and engaging user experiences.",
    },
    {
      id: 2,
      image: Image2,
      title: "Backend Development",
      description:
        "Backend Developer skilled in building robust, scalable server-side applications using Node.js, Express, and MongoDB. I focus on creating efficient APIs, managing databases, and ensuring secure, high-performance backend systems.",
    },
    {
      id: 3,
      image: Image3,
      title: "Full Stack Development",
      description:
        "Full Stack Developer proficient in building complete web applications using the MERN stack (MongoDB, Express, React, Node.js). I focus on creating seamless user experiences, robust backends, and scalable solutions from front to back.",
    },
  ];

  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>
      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} className="services_img" alt={`service-${id}`}/>
              <h3 className="services_title"> {title} </h3>
              <p className="services_description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Services;
