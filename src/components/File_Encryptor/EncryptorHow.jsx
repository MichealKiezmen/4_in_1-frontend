import PopUp from "../../layout/PopUp"
import Encrypt from "./encrypt_layout/Encrypt"
import Decrypt from "./decrypt_layout/Decrypt"
import { useState } from "react"
import Teach from "../../layout/Teach"
import { FaUnlock, FaLock } from "react-icons/fa"

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

        <div className="flex flex-col md:flex-row justify-center my-8 mx-3 md:space-x-10">

        <div className="md:w-[30%] ">
        <Teach
        toggleModal={toggleEncryptModal}
        buttonIcon={<FaLock className="text-[100px] sm:text-[150px]" />}
        >
        <p className="font-bold text-xl text-center my-4">Encrypt</p>
           <p className="italic text-center text-lg mb-4">Encrypting Files is Simple and Secure</p>
            <div className="mt-4 space-y-2">
            <p><b>1.</b> Click &quot;Select File&quot;. The app supports pdfs, document files, and images.</p>
            <p><b>2.</b> Select the file type you want you encrypted file back in.</p>
            <p><b>3.</b> Click the &quot;Encrypt&quot; button and watch as your files transform into secure, encrypted versions that only you can access.</p>
            <p><b>4.</b> Download your encrypted files to your device storage. They&apos;re now protected from unauthorized access.</p>
            <p><b>NOTE:</b> A key is generated for you which should be kept safe, unless you won&apos;t be able to decrypt the file.</p>
            </div>
        </Teach>
        </div>

        <div className="md:w-[30%] ">
        <Teach
        toggleModal={toggleDecryptModal}
        buttonIcon={<FaUnlock className="text-[100px] sm:text-[150px]" />}
        >
        <p className="font-bold text-xl text-center my-4">Decrypt</p>
           <p className="italic text-center text-lg mb-4">Access Your Protected Files When You Need Them</p>
            <div className="mt-4 space-y-2">
            <p><b>1.</b> Upload the encrypted file you want to access</p>
            <p><b>2.</b> Provide the key you got during encryption. Without the correct key, the file remains securely locked.</p>
            <p><b>3.</b> Click &quot;Decrypt&quot; and in seconds, your file is restored to its original form, ready for you to use.</p>
            <p><b>NOTE:</b> When you&apos;re done, we recommend re-encrypting sensitive files for continuous protection.</p>
            </div>
        </Teach>
        </div>

        </div>

        {encryptmodalShow && <PopUp closePopUp={toggleEncryptModal}><Encrypt /></PopUp>}
        {decryptmodalShow && <PopUp closePopUp={toggleDecryptModal}><Decrypt /></PopUp>}

    </div>
  )
}

export default EncryptorHow
