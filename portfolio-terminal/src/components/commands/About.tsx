//import "./Index.css"; // Import the CSS file
interface HelpProps {
  command: string;
}
import { Typewriter } from "react-simple-typewriter";
const About: React.FC<HelpProps> = ({ command }) => {
  const aboutName = `
  ███████╗ ██████╗ ██╗   ██╗██████╗ ██╗  ██╗██╗██╗  ██╗                       
  ██╔════╝██╔═══██╗██║   ██║██╔══██╗██║  ██║██║██║ ██╔╝                       
  ███████╗██║   ██║██║   ██║██████╔╝███████║██║█████╔╝                        
  ╚════██║██║   ██║██║   ██║██╔══██╗██╔══██║██║██╔═██╗                        
  ███████║╚██████╔╝╚██████╔╝██████╔╝██║  ██║██║██║  ██╗                       
  ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝                       
                                                                              
  ███████╗██╗███╗   ██╗ ██████╗ ██╗  ██╗ █████╗                               
  ██╔════╝██║████╗  ██║██╔════╝ ██║  ██║██╔══██╗                              
  ███████╗██║██╔██╗ ██║██║  ███╗███████║███████║                              
  ╚════██║██║██║╚██╗██║██║   ██║██╔══██║██╔══██║                              
  ███████║██║██║ ╚████║╚██████╔╝██║  ██║██║  ██║                              
  ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝                              
                                                                              
  ███╗   ███╗ █████╗ ██╗  ██╗ █████╗ ██████╗  █████╗ ████████╗██████╗  █████╗ 
  ████╗ ████║██╔══██╗██║  ██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗
  ██╔████╔██║███████║███████║███████║██████╔╝███████║   ██║   ██████╔╝███████║
  ██║╚██╔╝██║██╔══██║██╔══██║██╔══██║██╔═══╝ ██╔══██║   ██║   ██╔══██╗██╔══██║
  ██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██║██║     ██║  ██║   ██║   ██║  ██║██║  ██║
  ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
                                                                              `;

  const aboutText = [
    `I am a software developer who is mainly interested in building cool
              and functional real life projects. To know about my skills type
            "skills" command in the terminal. To contact me type "contact" in the
            terminal.`,
  ];

  return (
    <div>
      <div className="w-full flex flex-row">
        <p className="text-lg col-name">Soubhik@portfolio$~:</p>
        <p className="text-blue-800 ml-2 mt-1">{command}</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <pre className="ascii-art">{aboutName}</pre>
        <div className="text-wrap w-1/2 mt-4 ml-2 p-1 text-yellow-500">
          <Typewriter words={aboutText} typeSpeed={1} />
        </div>
      </div>
    </div>
  );
};

export default About;
