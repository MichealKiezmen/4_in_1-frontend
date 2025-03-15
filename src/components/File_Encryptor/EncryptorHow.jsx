import PopUp from "../../layout/PopUp"
import Encrypt from "./encrypt_layout/Encrypt"
import Decrypt from "./decrypt_layout/Decrypt"
import { useState } from "react"
import Teach from "../../layout/Teach"
import { IoMdUnlock } from "react-icons/io";
import { MdLock } from "react-icons/md";


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
    <div className="bg-white text-themed_teal mt-5 p-4 py-10">
        <h3 className="text-3xl font-bold text-center">How it Works</h3>

        <div className="flex flex-col md:flex-row justify-center my-14 mx-3 md:space-x-10">

        <div className="transition hover:scale-110 md:w-[30%] lg:mr-[80px]">
        <Teach
        toggleModal={toggleEncryptModal}
        >
        <div className="flex">
        <MdLock className="bg-gradient-to-b from-[#004B97] to-themed_teal
         text-white text-5xl p-2 rounded-md mr-4 my-2.5"

         />
        <p className="font-bold text-xl text-center my-5">Encrypt</p>
        </div>
           <p className="text-sm italic font-semibold mt-2 mb-4">Encrypting Files is Simple and Secure</p>

            <div className="mt-4 px-3 space-y-2 text-[#828284] font-light">
            <p><b>1.</b> Click &quot;Select File&quot;. The app supports pdfs, document files, and images.</p>
            <p><b>2.</b> Select the file type you want you encrypted file back in.</p>
            <p><b>3.</b> Click the &quot;Encrypt&quot; button and watch as your files transform into secure, encrypted versions that only you can access.</p>
            <p><b>4.</b> Download your encrypted files to your device storage. They&apos;re now protected from unauthorized access.</p>
            <p className="font-semibold text-themed_teal"><b>NOTE:</b> A key is generated for you which should be kept safe, unless you won&apos;t be able to decrypt the file.</p>
            </div>

        </Teach>
        </div>

        <div className="transition hover:scale-110 md:w-[30%] ">
        <Teach
        toggleModal={toggleDecryptModal}
        >
        <div className="flex">
        <IoMdUnlock className="bg-gradient-to-b from-[#7795FA] to-[#5479F7]
         text-white text-5xl p-2 rounded-md mr-4 my-2.5"

         />
        <p className="font-bold text-xl text-center my-5">Decrypt</p>
        </div>

           <p className="text-sm italic font-semibold mt-2 mb-4">Access Your Protected Files When You Need Them</p>
            <div className="my-4 px-3 space-y-2 text-[#828284] font-light">
            <p><b>1.</b> Upload the encrypted file you want to access</p>
            <p><b>2.</b> Provide the key you got during encryption. Without the correct key, the file remains securely locked.</p>
            <p><b>3.</b> Click &quot;Decrypt&quot; and in seconds, your file is restored to its original form, ready for you to use.</p>
            <p className="font-semibold text-themed_teal"><b>NOTE:</b> When you&apos;re done, we recommend re-encrypting sensitive files for continuous protection.</p>
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
