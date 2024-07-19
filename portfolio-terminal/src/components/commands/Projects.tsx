import React from "react";

interface ProjectProps {
  command: string;
}

const Project: React.FC<ProjectProps> = ({ command }) => {
  return (
    <div className="p-4 flex flex-col ">
      <div className="w-full flex flex-row">
        <p className="text-lg col-name">Soubhik@portfolio$~:</p>
        <p className="text-blue-800 ml-2 mt-1">{command}</p>
      </div>
      <div className="mt-6">
        <p className="text-3xl text-red-700 font-bold font-serif ">
          This will be implemented when I stop being a professional
          procrastinator and make some real projects to show. Stay tuned! 😊
        </p>
      </div>
    </div>
  );
};

export default Project;
