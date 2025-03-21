import { useState } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
import { IoDocumentsSharp } from "react-icons/io5"
import { makePostRequests, SERVER_URL } from "../../../reusables/API_requests"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { getTokens, getUserData } from "../../../redux/Slices/userSlice"

function Encrypt() {
  const userID = useSelector(getUserData)
  const token = useSelector(getTokens)
  const [selectedFile, setSelectedFile] = useState("")
  const [fileExtension, setFileExtension] = useState("pdf")
  const [fileType, setFileType] = useState("")
  const [fileName, setFileName] = useState("")
  const [serverData, setServerData]  = useState(null)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")



  const handleChange = (e) => {
    setError("")
    const { value } = e.target
    setFileExtension(value)
  }

  const handleFileChange = (e) => {
    setError("")
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
    if(!selectedFile || !fileExtension) {
      setError("Please select a file.")
      return
    }

    setLoading(true)
    const formData = new FormData();
    formData.append("document", selectedFile)
    formData.append("file_extension", fileExtension)

    const response = await makePostRequests(`${SERVER_URL}/api/encrypt/${userID?.id}/`,token?.access_token, formData,true)
    if(response?.file_url){
      setServerData(response)
    }
    setLoading(false)
  }


  return (
    <div className="p-3 text-themed_blue ">
      <h3 className="text-xl sm:text-4xl text-center font-bold my-4">Encryption Mode</h3>

      <form onSubmit={handleEncryption} encType="multipart/form-data">
        <div className="flex justify-between items-center px-2.5 sm:px-4 my-10">
          <div>
            <label htmlFor="file-type" className="cursor-pointer">
              <p className="text-sm text-center font-bold mb-2">Select file</p>
              <div className="relative">
                <IoDocumentsSharp className="text-6xl sm:text-8xl lg:text-[180px]" />
                <p className="absolute z-[2] bottom-2 left-[11%] text-white
          font-bold md:text-2xl">{fileType?.toUpperCase()}</p>
              </div>
              <p>{fileName}</p>
            </label>
            <input type="file" onChange={handleFileChange}
             className="hidden" id="file-type" />
          </div>

          <div>
            <div className="flex flex-col items-center justify-center">
              <label htmlFor="file-extension" className="text-sm text-center font-bold sm:mb-2 cursor-pointer">
                Select Mode</label>
              <select className="cursor-pointer p-1 sm:px-5 text-white bg-themed_blue font-semibold
        border-2 rounded-xl shadow-md"
                onChange={handleChange} value={fileExtension}
                name="file-extension" id="file-extension">
                <option value="pdf">.pdf</option>
                <option value="txt">.txt</option>
                <option value="json">.json</option>
                <option value="doc">.doc</option>
              </select>
            </div>
            <FaLongArrowAltRight className="mx-auto text-4xl lg:text-[100px]" />
          </div>

          <div className="flex justify-center">
            <button className="py-1 px-2.5 sm:py-2 lg:py-3 sm:px-4 lg:px-8 text-white bg-themed_blue font-semibold
             border-[0.5px] sm:border-2 rounded-2xl shadow-md shadow-themed_blue hover:shadow-lg">

              {loading ?
             <div className="flex justify-center w-20">
              <div className="animate-spin h-4 w-4 rounded-full border-t-4 text-white" />
             </div>
             :
             "Encrypt"
             }
            </button>
          </div>

        </div>

        <p className="text-center text-red-500">{error}</p>
      </form>

      <div className="text-themed_black pt-10">
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
