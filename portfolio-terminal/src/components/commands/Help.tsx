import React from "react";
import { commandList } from "../../utils/commandList";

interface HelpProps {
  command: string;
  load: boolean;
}

const Help: React.FC<HelpProps> = ({ command, load }) => {
  // Define colors for commands and descriptions
  const commandColors = [
    "text-orange-500",
    "text-purple-800",
    "text-pink-500",
    "text-yellow-600",
    "text-teal-500",
    "text-blue-600",
    "text-red-600",
    "text-green-600",
    "text-cyan-500",
    "text-amber-500",
  ];

  const descriptionColors = [
    "text-green-500",
    "text-red-500",
    "text-blue-500",
    "text-indigo-600",
    "text-white",
    "text-yellow-500",
    "text-pink-600",
    "text-teal-600",
    "text-orange-600",
    "text-purple-600",
  ];

  return (
    <div>
      {load ? null : (
        <p className="text-lg text-bo;d text-blue-500">Use these commands :</p>
      )}
      {load && (
        <div className="w-full flex flex-row">
          <p className="text-lg col-name">Soubhik@portfolio$~:</p>
          <p className="text-blue-800 ml-2 mt-1">{command}</p>
        </div>
      )}
      <div className="w-3/5 help-text flex flex-col gap-2">
        <div className="p-4 flex flex-col gap-2">
          {commandList.map((cmd, index) => (
            <p key={index}>
              <span className={commandColors[index % commandColors.length]}>
                {cmd.command}
              </span>
              :{" "}
              <span
                className={descriptionColors[index % descriptionColors.length]}
              >
                {cmd.description}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
