import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div 
          options = {{
            max: 45,
            scale: 1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py -5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title}
            className="w-16 h-16 object-contain"/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            
            </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        As an individual deeply passionate about technology and its transformative potential, I have cultivated a diverse skill set encompassing C, C++, Python, HTML/CSS, and JavaScript, alongside my ongoing journey in learning React. These technologies form the backbone of modern web development and software engineering, enabling me to contribute meaningfully to innovative projects and initiatives.

        Driven by a desire to make a tangible impact on the world, I am constantly seeking opportunities to leverage my technical expertise for the greater good. Whether it's developing applications that streamline processes, designing solutions that address societal challenges, or crafting user-friendly interfaces that enhance accessibility, I am committed to harnessing technology as a force for positive change.

        With a solid foundation in programming languages and a burgeoning interest in cutting-edge frameworks like React, I am poised to explore and innovate at the intersection of technology and social impact. By staying abreast of emerging trends and continuously honing my skills, I aspire to play a pivotal role in shaping a more connected, inclusive, and technologically empowered future for individuals and communities worldwide.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services}/>
        ))}

      </div>
    </>
  );
};

export default SectionWrapper(About, "about")