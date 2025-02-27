import { useState } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
import { IoDocumentsSharp } from "react-icons/io5"
import { makePostRequests, SERVER_URL } from "../../../reusables/API_requests"
import { Link } from "react-router-dom"

function Encrypt() {
  const userID = 1
  const [selectedFile, setSelectedFile] = useState("")
  const [fileExtension, setFileExtension] = useState("")
  const [fileType, setFileType] = useState("")
  const [fileName, setFileName] = useState("")
  const [serverData, setServerData]  = useState(null)

  const handleChange = (e) => {
    const { value } = e.target
    setFileExtension(value)
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
    formData.append("file_extension", fileExtension)

    const token = "12345"

    const response = await makePostRequests(`${SERVER_URL}/api/encrypt/${userID}/`,token, formData,true)
    if(response?.file_url){
      setServerData(response)
    }
  }


  return (
    <div className="p-3">
      <h3 className="text-4xl text-center font-bold my-4">Encrypt Mode</h3>

      <form onSubmit={handleEncryption} encType="multipart/form-data">
        <div className="flex justify-between items-center px-4 my-10">
          <div>
            <label htmlFor="file-type" className="cursor-pointer">
              <p className="text-sm text-center font-bold mb-2">Select file</p>
              <div className="relative">
                <IoDocumentsSharp className="text-[180px]" />
                <p className="absolute z-[2] bottom-2 left-[11%] text-white
          font-bold text-2xl">{fileType?.toUpperCase()}</p>
              </div>
              <p>{fileName}</p>
            </label>
            <input type="file" onChange={handleFileChange} className="hidden" id="file-type" />
          </div>

          <div>
            <div className="flex flex-col items-center">
              <label htmlFor="file-extension" className="text-sm text-center font-bold mb-2 cursor-pointer">
                Select Mode</label>
              <select className="cursor-pointer py-2 px-5 text-white bg-themed_blue font-semibold
        border-2 rounded-xl shadow-md"
                onChange={handleChange} value={fileExtension}
                name="file-extension" id="file-extension">
                <option value="pdf">.pdf</option>
                <option value="txt">.txt</option>
                <option value="json">.json</option>
                <option value="doc">.doc</option>
              </select>
            </div>
            <FaLongArrowAltRight className="text-[100px]" />
          </div>

          <div className="flex justify-center">
            <button className="py-3 px-8 text-white bg-themed_blue font-semibold
        border-2 rounded-2xl shadow-md shadow-themed_blue hover:shadow-lg">
              Encrypt
            </button>
          </div>

        </div>
      </form>

      <div className="text-themed_black">
      {serverData ?
      <div>
        <p>Your file was successfully encrypted with key:
         <span className="font-bold text-themed_blue m-2">{serverData?.encryption_key}</span>.
         <br />
          Download the file <Link className="text-purple-600 underline italic" to={serverData?.file_url}>here</Link>
        </p>
      </div>
      :
      <p><b>MODE:</b>Which means in what file format do you want your encrypted file.</p>
      }

      </div>

    </div>
  )
}

export default Encrypt
