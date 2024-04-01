import React from "react";
import Image from "next/image";
import wall from "../assets/p1.jpg";
import sign from "../assets/signature.png";
import SocialIcons from "@/components/SocialIcons";
const About = () => {
  const skills = ['html5', 'css', 'JavaScript','ReactJs', 'NextJs', 'ExpressJS', 'NodeJS', 'Sanity']
  return (
    <div className="overflow-scroll h-[800px] px-4 p-4">
      <div className="flex items-center justify-start gap-2">
        <a href='#skills' className="bg-gray-800 text-brand-fill py-1 px-2 font-bold rounded">Skills</a>
        <a href='#education' className="bg-gray-800 text-brand-fill py-1 px-2 font-bold rounded">Education</a>
      </div>
      <h1 className="text-[2rem] font-bold">Hello friends 👋!!</h1>
      <p className="mb-4 text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
        mollitia.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
        molestias. Accusamus omnis natus quia molestias?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit
        debitis molestias beatae incidunt velit doloremque, temporibus sapiente
        distinctio ut, minus tenetur iste, voluptatibus asperiores.
      </p>

      {wall && (
        <Image
          src={wall}
          className="h-[300px] w-full text-center rounded-md mb-1"
        />
      )}
      <span className="w-full flex items-center justify-center text-[0.69rem] text-gray-400 font-100 mb-4">
        Shailesh is doing something
      </span>
      <p className="mb-4 text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
        mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Totam, impedit!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit
        debitis molestias beatae incidunt velit doloremque, temporibus sapiente
        distinctio ut, minus tenetur iste, voluptatibus asperiores. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Esse distinctio totam
        minima exercitationem odio reprehenderit ut voluptate aut quos dolorum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quisquam,
        voluptates consectetur doloremque nobis corporis saepe eos. Placeat,
        quam consequatur.
      </p>

      <h1 className="font-bold text-[2rem] text-gray-300" id='skills'>Skills</h1>
      <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
      {skills && skills?.map((skill, i) =>(
        <span className="border-2 border-gray-600 px-4 py-2 text-brand-fill rounded-lg">{skill}</span>
      ))}
      </div>
      <h1 className="font-bold text-[2rem] text-gray-300" id='education'>Education</h1>
      <div className="education">
        <h1 className="font-bold text-brand-stroke">Masters in Computer Application</h1>
        <p className="text-[0.80rem] text-gray-300 mb-4">Galgotias university • 2022 - 2024</p>

        <h1 className="font-bold text-brand-stroke">Bachelors in Science</h1>
        <p className="text-[0.80rem] text-gray-300 mb-4">SWSU university Meerut • 2018 - 2022</p>

        <h1 className="font-bold text-brand-stroke">Senior secondary School - 12th Grade </h1>
        <p className="text-[0.80rem] text-gray-300 mb-4">Pragyan public school • 2018</p>

        <h1 className="font-bold text-brand-stroke">High School - 10th Grade</h1>
        <p className="text-[0.80rem] text-gray-300 mb-4">Babuji convent school • 2016</p>

      </div>
      <div className="sign flex flex-col items-start justify-start">
      <h1 className="font-bold text-[1rem]">Stay awesome!</h1>
        <Image
          src={sign}
          className="h-[200px] text-start rounded-md mb-4"
        />
      </div>
      <SocialIcons></SocialIcons>
    </div>
  );
};

export default About;
