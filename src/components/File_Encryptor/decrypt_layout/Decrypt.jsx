import { useState } from "react"
import { makePostRequests, SERVER_URL } from "../../../reusables/API_requests"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { getTokens } from "../../../redux/Slices/userSlice"
import { BiSolidFile } from "react-icons/bi";

function Decrypt() {
  const token = useSelector(getTokens)
  const [selectedFile, setSelectedFile] = useState("")
  const [fileName, setFileName] = useState("")
  const [inputKey, setInputKey] = useState("")
  const [serverData, setServerData]  = useState(null)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")


  const handleChange = (e) => {
    setError("")
    setServerData(null)
    const key = e.target.value
    setInputKey(key)
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
    if(!selectedFile || !inputKey) {
      setError("Please select a file.")
      return
    }


    setLoading(true)
    const formData = new FormData();
    formData.append("document", selectedFile)
    formData.append("key", inputKey)

    const response = await makePostRequests(`${SERVER_URL}/api/decrypt/`,token?.access_token, formData,true)
    if(response?.file_url){
      setServerData(response)
    }else{
      setError(response?.error)
    }
    setLoading(false)
  }


  return (
    <div className="p-3 text-themed_teal">
      <h3 className="text-xl sm:text-4xl text-center font-bold my-4 mb-[80px] sm:mb-[10px]">Decryption Mode</h3>

      <form onSubmit={handleEncryption} encType="multipart/form-data">

        <div className="flex justify-center items-center px-2.5 sm:px-4">

          <div className="flex flex-col">
            <label htmlFor="file-type" className="cursor-pointer">
              <div className="flex flex-col items-center">
                <BiSolidFile className="text-themed_teal text-[180px]" />

                <div className="text-center font-bold mb-2">
              {fileName ?
                <p className="">{fileName}</p>
                :
                <p>Select file</p>
              }
              </div>
              </div>
            </label>
            <input type="file" onChange={handleFileChange}
            className="hidden" id="file-type" />
          </div>

        </div>

        <div className="flex justify-center my-4">
            <div className="w-4/5 sm:w-2/4">
            <input type="text" value={inputKey} onChange={handleChange}
            className="w-full px-4 py-2 border-[1.5px] rounded-md text-themed_black
            focus:border-themed_teal outline-themed_teal border-themed_teal"
            placeholder="Input decryption key"
            required
             />
            </div>

        </div>


        <p className="text-center text-red-500">{error}</p>
        <div className="flex justify-center mt-10">
            <button className="py-1 lg:py-2 px-10 text-white bg-themed_teal font-semibold
             rounded-md shadow-md hover:shadow-lg h-[40px]">

              {loading ?
             <div className="flex justify-center w-20">
              <div className="animate-spin h-4 w-4 rounded-full border-t-4 text-white" />
             </div>
             :
             <p className="w-20">Decrypt</p>
             }
            </button>
          </div>
      </form>


      <div className="text-center text-themed_teal mt-4">
      {serverData ?
      <div>
        <p>Your file was successfully decrypted:
         <br />
          Download the file <Link className="text-purple-600 underline italic" to={serverData?.file_url}>here</Link>
        </p>
      </div>
      :
      <p><b>DECRYPTION KEY:</b> The key that was provided after encryption.</p>
      }

      </div>

    </div>
  )
}

export default Decrypt
