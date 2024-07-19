import React, { useState, useRef, useEffect } from "react";
import { TerminalInput } from "./TerminalInput";
import About from "./commands/About";
import Skills from "./commands/Skills";
import Help from "./commands/Help";
import Invalid from "./commands/Invalid";
import Contact from "./commands/Contact";
import Projects from "./commands/Projects";
import { v4 as uuid } from "uuid";

interface Command {
  id: string;
  text: string | JSX.Element;
}

export const Terminal = () => {
  const [command, setCommand] = useState("");
  const [commands, setCommands] = useState<Command[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const commandsEndRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    } else if (event.key === "ArrowUp") {
      // Show previous command from history
      if (commandHistory.length > 0) {
        setHistoryIndex((prevIndex) =>
          prevIndex === null || prevIndex <= 0 ? 0 : prevIndex - 1
        );
      }
    } else if (event.key === "ArrowDown") {
      // Show next command from history
      if (commandHistory.length > 0) {
        setHistoryIndex((prevIndex) =>
          prevIndex === null || prevIndex >= commandHistory.length - 1
            ? commandHistory.length
            : prevIndex + 1
        );
      }
    }
  };

  const handleSubmit = () => {
    const newCommand: Command = { id: uuid(), text: command };
    const updatedCommands = [...commands, newCommand];

    // Handle specific commands
    if (command.toLowerCase() === "about") {
      const aboutCommand: Command = {
        id: uuid(),
        text: <About command={command} />,
      };
      setCommands([...updatedCommands, aboutCommand]);
    } else if (command.toLowerCase() === "help") {
      const helpCommand: Command = {
        id: uuid(),
        text: <Help command={command} load={true} />,
      };
      setCommands([...updatedCommands, helpCommand]);
    } else if (command.toLowerCase() === "clear") {
      setCommands([]);
    } else if (command.toLowerCase() === "skills") {
      const skillsCommand: Command = {
        id: uuid(),
        text: <Skills command={command} />,
      };
      setCommands([...updatedCommands, skillsCommand]);
    } else if (command.toLowerCase() === "projects") {
      const projectsCommand: Command = {
        id: uuid(),
        text: <Projects command={command} />,
      };
      setCommands([...updatedCommands, projectsCommand]);
    } else if (command.toLowerCase() === "contact") {
      const contactCommand: Command = {
        id: uuid(),
        text: <Contact command={command} />,
      };
      setCommands([...updatedCommands, contactCommand]);
    } else if (command.toLowerCase() === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/soubhik-singha-mahapatra-487964255/",
        "_blank"
      );
    } else if (command.toLowerCase() === "github") {
      window.open("https://github.com/Soubhik-10", "_blank");
    } else {
      const invalidCommand: Command = {
        id: uuid(),
        text: <Invalid command={command} />,
      };
      setCommands([...updatedCommands, invalidCommand]);
      const invalidCommand1: Command = {
        id: uuid(),
        text: <Help command={"Help"} load={false} />,
      };
      setCommands([...updatedCommands, invalidCommand1]);
    }

    // Update command history and clear the input
    if (command.trim()) {
      setCommandHistory((prevHistory) => {
        const updatedHistory = [...prevHistory, command];
        setHistoryIndex(updatedHistory.length);
        return updatedHistory;
      });
    }
    setCommand("");
  };

  useEffect(() => {
    if (
      historyIndex !== null &&
      historyIndex >= 0 &&
      historyIndex < commandHistory.length
    ) {
      setCommand(commandHistory[historyIndex]);
    } else if (historyIndex === commandHistory.length) {
      setCommand("");
    }
  }, [historyIndex, commandHistory]);

  useEffect(() => {
    if (commandsEndRef.current) {
      commandsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [commands]);

  return (
    <div className="w-full bg-transparent flex flex-col font-mono px-4 mt-4 example">
      <div className="w-full bg-transparent col-text mb-4 example">
        Welcome to the portfolio of Soubhik Singha Mahapatra. <br />
        For the list of commands type "help" in the terminal. Enjoy :)
      </div>
      <div
        className="flex flex-col overflow-auto example"
        style={{ maxHeight: "400px" }}
      >
        {commands.map((cmd) => (
          <div key={cmd.id} className="flex flex-col mb-2">
            {typeof cmd.text === "string" ? null : cmd.text}
          </div>
        ))}
        <div ref={commandsEndRef} />
      </div>
      <TerminalInput
        command={command}
        setCommand={setCommand}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
