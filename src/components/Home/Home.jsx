import { GrDocumentPdf } from "react-icons/gr";
import { GiMonoWheelRobot } from "react-icons/gi";
import { BiLogoUnity } from "react-icons/bi";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-center
     items-center space-y-8 bg-gradient-to-r
      from-indigo-500 via-purple-500 to-pink-500 ">

    <Link to={"/pdf-to-speech"}>
      <div className="cursor-pointer p-3 text-white border-gray-100
                 rounded-md border-2 text-center hover:opacity-75">
        <GrDocumentPdf className="text-white text-5xl sm:text-6xl m-3" />
        <p className="font-bold text">PDF to Text</p>
      </div>
      </Link>


      <Link to={"/bot-automation"}>
      <div className="cursor-pointer p-3 text-white border-gray-100
                 rounded-md border-2 text-center hover:opacity-75">
        <GiMonoWheelRobot className="text-white text-6xl m-3" />
        <p className="font-bold text">Bot <br/> Automation</p>
      </div>
      </Link>

      <Link to={"/pdf-to-speech"}>
      <div className="cursor-pointer p-3 text-white border-gray-100
                 rounded-md border-2 text-center hover:opacity-75">
        <BiLogoUnity className="text-white text-5xl sm:text-6xl m-3" />
        <p className="font-bold text">PDF to Text</p>
      </div>
      </Link>
      </div>
  )
}

export default Home
