import { useState } from "react"
import { BiSolidFile } from "react-icons/bi";
import { makePostRequests, SERVER_URL } from "../../../reusables/API_requests"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { getTokens, getUserData } from "../../../redux/Slices/userSlice"
import filebox from "../../../assets/images/fancy-file.png"

function Encrypt() {
  const userID = useSelector(getUserData)
  const token = useSelector(getTokens)
  const [selectedFile, setSelectedFile] = useState("")
  const [fileExtension, setFileExtension] = useState("pdf")
  const [fileName, setFileName] = useState("")
  const [serverData, setServerData]  = useState(null)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")



  const handleChange = (e) => {
    setError("")
    setServerData(null)
    const { value } = e.target
    setFileExtension(value)
  }

  const handleFileChange = (e) => {
    setError("")
    setServerData(null)
    const fileProcessed = e.target.files[0]
    setSelectedFile(fileProcessed)
    const file_name = fileProcessed?.name
    setFileName(file_name)
  }

  const handleEncryption = async (e) => {
    e.preventDefault()
    setError("")

    if(!selectedFile || !fileExtension) {
      setError("Please select a file.")
      return
    }

    setLoading(true)
    const formData = new FormData();
    formData.append("document", selectedFile)
    formData.append("file_extension", fileExtension)

    const response = await makePostRequests(`${SERVER_URL}/api/encrypt/${userID?.id || 0}/`,token?.access_token, formData,true)

    if(response?.file_url){
      setServerData(response)
    }else{
      setError(response?.error)
    }
    setLoading(false)
  }


  return (
    <div className="p-3 text-themed_teal">
      <h3 className="text-xl sm:text-4xl text-center font-bold my-4">Encryption Mode</h3>

      <form onSubmit={handleEncryption} encType="multipart/form-data">
        <div className="flex justify-center items-center sm:px-4 mt-8 space-x-8">
          <div>
            <label htmlFor="file-type" className="cursor-pointer">
              <div className="">
                <BiSolidFile className="text-themed_teal text-8xl lg:text-[180px]" />
              </div>

              <div className="text-sm text-center font-bold mb-2">
              {fileName ?
                <p>{fileName}</p>
                :
                <p>Select file</p>
              }
              </div>


            </label>
            <input type="file" onChange={handleFileChange}
             className="hidden" id="file-type" />
          </div>

          <div>
            <img src={filebox} alt="fancybox" className="" />
          </div>

          <div>
            <div className="flex flex-col items-center justify-center">
              <label htmlFor="file-extension" className="text-sm text-center font-bold sm:mb-2 cursor-pointer">
                Select Mode</label>
              <select className="cursor-pointer p-1 px-5 lg:px-8 text-black border-themed_teal font-semibold
        border-[0.5px] rounded-sm shadow-md"
                onChange={handleChange} value={fileExtension}
                name="file-extension" id="file-extension">
                <option value="pdf">.pdf</option>
                <option value="txt">.txt</option>
                <option value="json">.json</option>
                <option value="doc">.doc</option>
              </select>
            </div>
          </div>

      </div>

        <p className="text-center text-red-500">{error}</p>
        <div className="flex justify-center mt-5">
            <button className="py-1 lg:py-2 px-10 text-white bg-themed_teal font-semibold
             rounded-md shadow-md hover:shadow-lg">

              {loading ?
             <div className="flex justify-center w-20">
              <div className="animate-spin h-4 w-4 rounded-full border-t-4 text-white" />
             </div>
             :
             "Encrypt"
             }
            </button>
          </div>
      </form>

      <div className="text-center text-themed_teal mt-5">
      {serverData ?
      <div className="px-2 ">
        <p className="">Your file was successfully encrypted with key:
        <br />
         <span className="max-w-full break-all whitespace-normal
          font-bold text-themed_blue m-2">
         {serverData?.encryption_key}
         </span>.
         <br />
          Download the file <Link className="text-purple-600 underline italic" to={serverData?.file_url}>here</Link>
        </p>
      </div>
      :
      <p><b>MODE:</b> Which means in what file format do you want your encrypted file.</p>
      }

      </div>

    </div>
  )
}

export default Encrypt
