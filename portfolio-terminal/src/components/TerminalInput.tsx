import React from "react";

interface TerminalInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  command: string;
  setCommand: (command: string) => void;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
  handleChange,
  handleKeyPress,
  handleSubmit,
  command,
  setCommand,
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update command state and invoke handleChange
    setCommand(event.target.value);
    handleChange(event);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Use onKeyDown to capture arrow key events
    if (event.key === "Enter") {
      handleSubmit();
    } else {
      handleKeyPress(event);
    }
  };

  return (
    <div className="flex flex-row mt-2">
      <p className="text-lg col-name">Soubhik@portfolio$~:</p>
      <input
        id="input"
        name="terminal"
        type="text"
        value={command}
        className="ml-2 w-96 bg-transparent border-none cursor-text focus:border-black text-blue-800 outline-none"
        onChange={onChange}
        onKeyDown={onKeyDown} // Use onKeyDown for arrow key events
      />
    </div>
  );
};
