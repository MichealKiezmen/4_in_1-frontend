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
  const [copied, setCopied] = useState(false)

  const [error, setError] = useState("")



  async function copyToClipboard(text){
    const  x = true
    setCopied(x)

    await navigator.clipboard.writeText(text)

    await new Promise(resolve => setTimeout(resolve, 1500))

    const y = false
    setCopied(y)
}

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
      <h3 className="text-xl sm:text-4xl text-center font-bold my-4 mb-[100px] sm:mb-[60px]">Encryption Mode</h3>

      <form onSubmit={handleEncryption} encType="multipart/form-data">
        <div className="flex justify-between sm:justify-center  items-center sm:px-4 mt-8 space-x-8">
          <div className="flex flex-col justify-center items-center md:w-[40%]">
            <label htmlFor="file-type" className="cursor-pointer">
              <div className="">
                <BiSolidFile className="text-themed_teal text-[100px]" />

                <div className="text-center text-sm font-bold mb-2">
              {fileName ?
                <p className="w-3/4 ">{fileName}</p>
                :
                <p>Select file</p>
              }
              </div>
              </div>




            </label>
            <input type="file" onChange={handleFileChange}
             className="hidden" id="file-type" />
          </div>

          <div className="hidden sm:block sm:w-[30%]">
            <img src={filebox} alt="fancybox" className="" />
          </div>

          <div className="md:w-[30%]">
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
             rounded-md shadow-md hover:shadow-lg h-[40px]">

              {loading ?
             <div className="flex justify-center w-20">
              <div className="animate-spin h-4 w-4 rounded-full border-t-4 text-white" />
             </div>
             :
             <p className="w-20">Encrypt</p>
             }
            </button>
          </div>
      </form>

      <div className="text-center text-themed_teal mt-5">
      {serverData ?
      <div className="px-2 ">
        <p className="">Your file was successfully encrypted with key:
        <br />
         <p
         title="click to copy"
         onClick={() => {
          copyToClipboard(serverData?.encryption_key)
         }} className="relative cursor-pointer max-w-full break-all whitespace-normal
          font-bold text-themed_blue m-2">
         {serverData?.encryption_key}
         {copied &&
         <span
         className="bg-white text-black font-light
         border-2 px-2 absolute z-[2] top-0 right-[40%]">Text copied</span> }
         </p>
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
