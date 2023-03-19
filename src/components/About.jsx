import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am constantly pursuing the latest and greatest languages 
       and frameworks in this ever-changing field. I will always remain dedicated to learning 
       additional technologies and coding languages. Seeking an entry-level position at a great 
       company to be a hard-working asset to any team, and to learn, grow and develop long-term.
       I began this new field late in life, I had spent years of my life developing customer
       service skills to become one of the highest-paid waiters in the City of San Antonio. 
       The excitement, eagerness, fear, and the unknown are what fuel my inner fire nowadays.
       At my age, I thought life was going to move on to the next generation and my time to 
       join the many nameless faces in the service industry was beginning. As it turns out
       mother nature still had a few more tricks up her sleeve for me. While I may not be as
       experienced as others in the IT industry. I want to offer a breath of fresh air and 
       a willingness to think outside the box and try new ideas. I have yet to be molded
       into an unbreakable frame of mind. I am ready to dive in head first, learn for the
       best and begin this new chapter in my life. Thank you for your time and consideration. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
