import React, { useState, useEffect } from "react";
import "./style/sectionLine.css";
import { motion } from "framer-motion";

const GeneralGuidelines = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const fadeAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 6.4 } },
  };

  // Function to check whether conditions for enabling the button are met
  const areConditionsMet = () => {
    // Replace with your actual date and time for enabling the button
    const enableDate = new Date("February 18, 2024 10:00:00 GMT+0530");
    const currentDate = new Date();
    return currentDate >= enableDate;
  };

  // useEffect to check conditions when the component mounts
  useEffect(() => {
    setButtonDisabled(!areConditionsMet());
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="text-white py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white section_header md:text-md">
        <hr />
        <span>General Guidelines</span>
        <hr />
      </h2>
      <motion.div initial="hidden" animate="visible" variants={fadeAnimation}>
        <div className="px-12 mt-10 md:px-12">
          <ul className="text-left list-disc mb-10 px-4 py-4 md:py-4 md:px-1 leading-relaxed bg-gradient-to-b from-purple-800 to-black rounded-lg">
            <li className="mb-4 text-base md:text-lg ml-8">
              All participants are requested to get their identities verified
              beforehand at the Registration desks.
            </li>
            <li className="mb-4 text-base md:text-lg ml-8">
              Problem Statements will be released on the day of hackathon i.e on 23rd March.
            </li>
            <li className="mb-4 text-base md:text-lg ml-8">
              Each team should comprise a minimum of 1 and a maximum of 4
              members, including the team leader. Team members can be from
              different colleges.
            </li>
            <li className="mb-4 text-base md:text-lg ml-8">
              Participant should be enrolled in a full-time undergraduate degree.
            </li>
            <li className="mb-4 text-base md:text-lg ml-8">
              Teams will be shortlisted based on first come first serve basis.
            </li>
            <li className="mb-4 text-base md:text-lg ml-8">
              The hackathon format includes 24 hours of coding. After that,
              teams may present their solutions to the judges.
            </li>
            <li className="mb-4 text-base md:text-lg ml-8">
              Results of this round will be announced after all presentations
              are reviewed by the judges.
            </li>
            <li className="mb-4 text-base md:text-lg ml-8">
              The participating teams must select any one problem statement to
              work on and should develop a viable software solution for the
              same.
            </li>
            <li className="mb-4 text-base md:text-lg ml-8">
              Teams can freely use available servers or their own servers for
              developing and presenting their product.
            </li>
          </ul>
        </div>

        {/* <button
          onClick={() => alert("Redirect to submission form")} // Replace with actual submission form URL or logic
          className={`bg-yellow-500 hover:bg-yellow-400 text-purple-800 font-bold py-2 px-4 rounded-full ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isButtonDisabled}
        >
          Submit Your Project
        </button> */}
      </motion.div>

      {/* Add more content as needed */}
    </div>
  );
};

export default GeneralGuidelines;
