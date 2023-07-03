import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div
        id="tech"
        style={{ "scroll-margin-top": "8rem" }}
        className="mb-20 "
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          My experience and expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stacks.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
