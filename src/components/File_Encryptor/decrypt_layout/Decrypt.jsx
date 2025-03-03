import { useState } from "react"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { IoDocumentsSharp } from "react-icons/io5"
import { makePostRequests, SERVER_URL } from "../../../reusables/API_requests"
import { Link } from "react-router-dom"

function Decrypt() {

  const [selectedFile, setSelectedFile] = useState("")
  const [fileType, setFileType] = useState("")
  const [fileName, setFileName] = useState("")
  const [inputKey, setInputKey] = useState("")
  const [serverData, setServerData]  = useState(null)

  const handleChange = (e) => {
    const key = e.target.value
    setInputKey(key)
  }

  const handleFileChange = (e) => {
    const fileProcessed = e.target.files[0]
    setSelectedFile(fileProcessed)
    const file_name = fileProcessed?.name
    setFileName(file_name)
    const reversed_extensionType = file_name && file_name.split("").reverse().join("").split(".")[0]
    const extensionType = reversed_extensionType && reversed_extensionType.split("").reverse().join("")
    setFileType(extensionType)
  }

  const handleEncryption = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("document", selectedFile)
    formData.append("key", inputKey)
    const token = "12345"

    const response = await makePostRequests(`${SERVER_URL}/api/decrypt/`,token, formData,true)
    if(response?.file_url){
      setServerData(response)
    }
  }


  return (
    <div className="p-3">
      <h3 className="text-xl sm:text-4xl text-center font-bold my-4">Decryption Mode</h3>

      <form onSubmit={handleEncryption} encType="multipart/form-data">
      <div className="flex justify-center mt-10 mb-2">
            <div className="w-3/5">
            <p className="text-sm font-bold">DECRYPTION KEY</p>
            <input type="text" value={inputKey} onChange={handleChange}
            className="w-full px-3 py-1 border-[1px] rounded-md text-themed_black
            focus:border-themed_blue outline-themed_blue border-themed_blue" />
            </div>
        </div>

        <div className="flex justify-between items-center px-2.5 sm:px-4 mb-5">
        <div className="flex justify-center w-1/4">
            <button className="py-1 px-2.5 lg:py-3 lg:px-8 text-white bg-themed_blue font-semibold
             border-[0.5px] sm:border-2 rounded-2xl shadow-md shadow-themed_blue hover:shadow-lg">
              Decrypt
            </button>
          </div>

          <div className="flex justify-center w-2/4">
            <FaLongArrowAltLeft className="text-4xl lg:text-[100px]" />
          </div>



          <div className="flex flex-col w-1/4">
            <label htmlFor="file-type" className="cursor-pointer">
              <p className="text-sm text-center font-bold mb-2">Select file</p>
              <div className="relative">
                <IoDocumentsSharp className="mx-auto text-6xl lg:text-[180px]" />
                <p className="absolute z-[2] bottom-2 left-[11%] text-white
          font-bold md:text-2xl">{fileType?.toUpperCase()}</p>
              </div>
              <p>{fileName}</p>
            </label>
            <input type="file" onChange={handleFileChange} className="hidden" id="file-type" />
          </div>

        </div>



      </form>


      <div className="text-themed_black pt-10">
      {serverData ?
      <div>
        <p>Your file was successfully decrypted with key:
         <span className="font-bold text-themed_blue m-2">{inputKey}</span>.
         <br />
          Download the file <Link className="text-purple-600 underline italic" to={serverData?.file_url}>here</Link>
        </p>
      </div>
      :
      <p><b>DECRYPTION KEY:</b>The key that was provided after encryption.</p>
      }

      </div>

    </div>
  )
}

export default Decrypt
