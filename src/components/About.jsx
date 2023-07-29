import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { yaseen } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Greetings! I'm Yaseen, a full stack developer and a proud graduate of
          PDA College of Engineering, Gulbarga, India. Technology is my true
          calling, and I'm particularly fascinated by the intricate world of
          blockchain. When I'm not immersed in coding, you'll find me engaging
          in a variety of passions. I love the refreshing feeling of swimming,
          the empowering atmosphere of the gym, and the captivating escape that
          books provide. Additionally, exploring new places ignites my sense of
          adventure and allows me to broaden my horizons. Oh, and I must mention
          my affinity for sarcasm—it adds an extra dash of humor to everything I
          do. Join me on this exhilarating journey as we conquer the
          ever-evolving tech landscape with a smile, a touch of mischief, and a
          genuine thirst for innovation!
        </motion.p>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] justify-center items-center flex"
        >
          <img src={yaseen} alt="yaseen" className="w-fit h-fit" />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
