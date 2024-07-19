import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiSolidity, SiRust } from "react-icons/si";
import SkillLevel from "./SkillLevel"; // Ensure you import SkillLevel correctly

interface Props {
  command: string;
}

const Skills: React.FC<Props> = ({ command }) => {
  return (
    <div>
      <div className="w-full flex flex-row">
        <p className="text-lg col-name">Soubhik@portfolio$~:</p>
        <p className="text-blue-800 ml-2 mt-1">{command}</p>
      </div>
      <div className="w-3/4 ml-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-bold border-b-2 border-white">
            Skills
          </h2>
          <div className="flex items-center gap-4 mb-2">
            <FaHtml5 className="w-8 h-8 text-orange-500" />
            <div className="flex-1">
              <span className="text-white mr-2">HTML</span>
              <SkillLevel level={90} color="#f06529" />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FaCss3Alt className="w-8 h-8 text-blue-500" />
            <div className="flex-1">
              <span className="text-white mr-2">CSS</span>
              <SkillLevel level={90} color="#2965f1" />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FaJsSquare className="w-8 h-8 text-yellow-500" />
            <div className="flex-1">
              <span className="text-white mr-2">JavaScript</span>
              <SkillLevel level={80} color="#f7e018" />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <SiTypescript className="w-8 h-8 text-blue-600" />
            <div className="flex-1">
              <span className="text-white mr-2">TypeScript</span>
              <SkillLevel level={75} color="#007acc" />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FaReact className="w-8 h-8 text-cyan-400" />
            <div className="flex-1">
              <span className="text-white mr-2">React</span>
              <SkillLevel level={77} color="#61dafb" />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <SiSolidity className="w-8 h-8 text-blue-500" />
            <div className="flex-1">
              <span className="text-white mr-2">Solidity</span>
              <SkillLevel level={79} color="#1951fa" />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <SiRust className="w-8 h-8 text-orange-500" />
            <div className="flex-1">
              <span className="text-white mr-2">Rust</span>
              <SkillLevel level={60} color="#dea584" />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FaGitAlt className="w-8 h-8 text-red-500" />
            <div className="flex-1">
              <span className="text-white mr-2">Git</span>
              <SkillLevel level={80} color="#f1502f" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
