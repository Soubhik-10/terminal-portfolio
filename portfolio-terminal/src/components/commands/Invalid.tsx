import { Typewriter } from "react-simple-typewriter";

interface Props {
  command: string;
}

const Invalid: React.FC<Props> = ({ command }) => {
  const InvalidText = [
    `Invalid Command!! \n
          Please enter a valid command.To get the list of commands available
          enter "help" in the terminal.`,
  ];
  return (
    <div>
      <div className="w-full flex flex-row">
        <p className="text-lg col-name">Soubhik@portfolio$~:</p>
        <p className="text-red-600 ml-2 mt-1">{command}</p>
      </div>
      <div className="text-red-600 ml-2 mt-1 font-semibold">
        <Typewriter words={InvalidText} typeSpeed={1} />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Invalid;
