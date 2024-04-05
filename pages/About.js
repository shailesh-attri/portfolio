import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import wall from "../assets/p1.jpg";
import sign from "../assets/signature.png";
import SocialIcons from "@/components/SocialIcons";
import { client } from "@/app/sanity_client";
import activity_pic from '../assets/about-pic.png'
const About = ({SkillMenu}) => {
  const [skills, setSkills] = useState([]);
  useEffect(() =>{
    if(SkillMenu){
      window.location.hash = 'skills'
    }
  },[SkillMenu])

  useEffect(() => {
    const query4 = '*[_type == "skills"]';
    client.fetch(query4).then((data) => {
      setSkills(data[0].technologies || []);
    }).catch(error => {
      console.error("Error fetching skills data:", error);
    });
  }, []);

  return (
    <div className="overflow-scroll h-[800px] px-4 p-4">
      <div className="flex items-center justify-start gap-2">
        <a href='#skills' className="bg-gray-800 text-brand-fill py-1 px-2 font-bold rounded">Skills</a>
        <a href='#education' className="bg-gray-800 text-brand-fill py-1 px-2 font-bold rounded">Education</a>
      </div>
      <h1 className="text-[2rem] font-bold">Hello friends 👋!!</h1>
      <p className="mb-4 text-gray-300">
        I&apos;m Shailesh <i> pronounced as shail-esh</i>. I&apos;m a web developer that thrives on bringing ideas to life with code!
        <br />
        <br />
        As a MERN stack developer and a passionate creator of YouTube content, I&apos;m deeply invested in transforming ideas into reality through coding. I advocate for unleashing creativity in coding, empowering others to enhance their skills and capabilities.
        <br />
        <br />
        Moreover, I&apos;m pursuing a Master&apos;s in Computer Applications from Galgotias University, further enriching my knowledge and expertise in the field. One of my notable projects includes developing a MERN chat application using Socket.IO, showcasing my dedication to innovative solutions and sharing knowledge with the community.
      </p>

      {wall && (
        <Image
          alt='wall'
          src={activity_pic}
          className="h-[300px] w-full text-center rounded-md mb-1"
        />
      )}
      <span className="w-full flex items-center justify-center text-[0.69rem] text-gray-400 font-100 mb-4">
        My NextJS Portfolio
      </span>
      <p className="mb-4 text-gray-300">
        My journey as a developer allows me to delve into various aspects of MERN stack development, from building robust backends with Node.js to crafting dynamic user interfaces with React.js. I&apos;m eager to contribute to the community and collaborate with like-minded individuals to create impactful projects.
        <br />
        <br />
        I am excited to bring my expertise in MERN stack development, passion for learning, and dedication to excellence to your team. Together, we can create innovative solutions and drive success in your organization.
        <br />
        <br />
        Thank you
      </p>

      <h1 className="font-bold text-[2rem] text-gray-300" id='skills'>Skills</h1>
      <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
        {skills && skills?.map((skill, i) => (
          <span key={i} className="border-2 border-gray-600 px-4 py-2 text-brand-fill rounded-lg">{skill}</span>
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
