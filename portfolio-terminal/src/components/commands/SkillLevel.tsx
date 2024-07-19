import React from "react";

interface SkillLevelProps {
  level: number;
  color: string;
}

const SkillLevel: React.FC<SkillLevelProps> = ({ level, color }) => {
  const width = `${level}%`;
  const backgroundColor = color; // Use color directly in style

  return (
    <div className="relative w-24 h-2 bg-gray-300 rounded">
      <div
        className="absolute top-0 left-0 h-full rounded"
        style={{ width, backgroundColor }}
      />
    </div>
  );
};

export default SkillLevel;
