import { MdOutlineNoEncryptionGmailerrorred } from "react-icons/md"
import PopUp from "../../layout/PopUp"
import Encrypt from "./encrypt_layout/Encrypt"

function EncryptorHow() {
  return (
    <div className="bg-white text-themed_blue my-5 p-4">
        <h3 className="text-4xl font-bold text-center">How it Works</h3>

        <div className="my-8">
            <div className="flex justify-center mb-4">
           <button className="hover:opacity-75">
           <MdOutlineNoEncryptionGmailerrorred className="text-[200px] sm:text-[250px]" />
           </button>
           </div>
           <p className="font-bold text-xl text-center mb-2">Encrypt</p>
           <p>It was popularised in the 1960s with the release of Letraset sheets
           containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <PopUp><Encrypt /></PopUp>
    </div>
  )
}

export default EncryptorHow
