import { MdOutlineNoEncryptionGmailerrorred } from "react-icons/md"
import PopUp from "../../layout/PopUp"
import Encrypt from "./encrypt_layout/Encrypt"
import Decrypt from "./decrypt_layout/Decrypt"
import { useState } from "react"

function EncryptorHow() {

  const [decryptmodalShow, setDecryptModalShow] = useState(false)
  const [encryptmodalShow, setEncryptModalShow] = useState(false)

  function toggleEncryptModal(){
    setEncryptModalShow(!encryptmodalShow)
  }

  function toggleDecryptModal(){
    setDecryptModalShow(!decryptmodalShow)
  }


  return (
    <div className="bg-white text-themed_blue my-5 p-4">
        <h3 className="text-4xl font-bold text-center">How it Works</h3>

        <div className="my-8">
            <div className="flex justify-center mb-4">
           <button onClick={toggleEncryptModal} className="hover:opacity-75">
           <MdOutlineNoEncryptionGmailerrorred className="text-[200px] sm:text-[250px]" />
           </button>
           </div>
           <p className="font-bold text-xl text-center mb-2">Encrypt</p>
           <p>It was popularised in the 1960s with the release of Letraset sheets
           containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        {/* <PopUp><Encrypt /></PopUp> */}
        {encryptmodalShow && <PopUp closePopUp={toggleEncryptModal}><Encrypt /></PopUp>}
        {decryptmodalShow && <PopUp closePopUp={toggleDecryptModal}><Decrypt /></PopUp>}

    </div>
  )
}

export default EncryptorHow
