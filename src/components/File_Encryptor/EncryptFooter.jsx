import { Link, useLocation } from "react-router-dom"
import imglogo from "../../assets/images/logo1.png"
import { useState } from "react"
import { BsSend } from "react-icons/bs";
import { makePostRequests, SERVER_URL } from "../../reusables/API_requests";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getTokens } from "../../redux/Slices/userSlice";


function EncryptFooter() {

    const location = useLocation()
    const url = location?.pathname
    const [value, setValue] = useState("")
    const authTokens = useSelector(getTokens)

    const handleFeedback = async (e) => {
        e.preventDefault()
        const url = `${SERVER_URL}/api/login/`
        const response = await makePostRequests(url, null, {message : value})
        if(response?.success){
            toast.success("Feedback sent.")
            setValue("")
        }else{
            toast.error("Message not sent.")
        }
        
    }


  return (
    <div className="bg-themed_teal text-white flex flex-col sm:flex-row sm:justify-between px-6 py-10">
      <div>
        <img className="h-[50px]" src={imglogo} alt="footer-logo" />
        <div className="my-7">
        <ul className="flex space-x-6">
            <li className={`${url === "/file-encryptor" && "font-bold"}`}><Link to="/file-encryptor">Home</Link></li>
            {authTokens &&
              <li className={`${url === "/file-encryptor/collections" && "font-bold"}`}><Link to="/file-encryptor/collections">Collections</Link></li>
            }
            
        </ul>
      </div>
      </div>

      <div className="sm:w-1/4 mt-5 sm:mt-0">
        <form onSubmit={handleFeedback}>
        <p>Send Feedback</p>
        <div className="relative w-3/4 sm:w-full mt-2">
            <input type="text" placeholder="Enter message"
            value={value} 
            onChange={(e) => {
                setValue(e.target.value)
            }}
            className="w-full rounded-3xl pl-4 pr-12 py-2.5 bg-transparent border-white border-2 "
            required
            />
            <BsSend onClick={handleFeedback} className="hover:opacity-85 cursor-pointer absolute top-4 right-5 z-[2]" />
        </div>
        </form>
      </div>
    </div>
  )
}

export default EncryptFooter
