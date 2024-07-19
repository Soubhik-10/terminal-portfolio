import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

interface HelpProps {
  command: string;
}

const Contact: React.FC<HelpProps> = ({ command }) => {
  return (
    <div>
      <div className="w-full flex flex-row">
        <p className="text-lg col-name">Soubhik@portfolio$~:</p>
        <p className="text-blue-800 ml-2 mt-1">{command}</p>
      </div>

      <div className="p-4 flex flex-col">
        <h1 className="text-3xl w-auto font-bold mb-6 text-white">
          Contact Me
        </h1>
        <div className="flex flex-col  gap-4">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-2xl text-blue-500" />
            <a
              href="mailto:soubhiksinghamahapatra@gmail.com"
              className="text-lg text-blue-700 hover:underline"
            >
              soubhiksinghamahapatra@gmail.com
            </a>
          </div>
          {/* <div className="flex items-center gap-2">
            <FaPhone className="text-2xl text-green-500" />
            <a
              href="tel:
              className="text-lg text-red-700 hover:underline"
            >
              +91 
            </a>
          </div> */}
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-2xl text-blue-600" />
            <a
              href="https://www.linkedin.com/in/soubhik-singha-mahapatra-487964255/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-800 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub className="text-2xl text-white" />
            <a
              href="https://github.com/Soubhik-10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
