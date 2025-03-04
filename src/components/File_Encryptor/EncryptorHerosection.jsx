import { useState } from "react"
import PopUp from "../../layout/PopUp"
import Encrypt from "./encrypt_layout/Encrypt"


function EncryptorHerosection() {

    const [encryptmodalShow, setEncryptModalShow] = useState(false)

    function toggleEncryptModal(){
      setEncryptModalShow(!encryptmodalShow)
    }

  return (
    <div className="my-10 md:my-[100px] flex flex-col md:flex-row sm:px-4">
        <div className="md:w-[60%] order-2 md:order-1">
        <h1 className="text-4xl italic font-bold">Your Files. Your Privacy. Your Control.</h1>

  <p className="my-5 text-xl">Powerful end-to-end encryption that keeps your
  sensitive data protected from prying eyes. </p>

  <p className="mb-4">SecureVault provides military-grade encryption for your most important
  files with a simple, intuitive interface. No technical expertise required.
  <br/>
  Encrypt and decrypt your files with just a few clicks, ensuring your private
    information stays private.</p>


    <div className="py-4">
              <button onClick={toggleEncryptModal}
              className="py-3 lg:py-3 px-8 bg-white text-themed_blue font-semibold
              border-[1px] sm:border-2 rounded-3xl shadow-lg shadow-themed_blue hover:shadow-lg">
                Start Encrypting Now
              </button>
            </div>
        </div>

      <div className="md:w-[40%] order-1 md:order-2">
        {/* Image carousel */}
      </div>

      {encryptmodalShow && <PopUp closePopUp={toggleEncryptModal}><Encrypt /></PopUp>}
    </div>
  )
}

export default EncryptorHerosection
