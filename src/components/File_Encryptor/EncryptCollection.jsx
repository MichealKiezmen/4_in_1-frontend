import { useEffect, useState } from "react"
import ColMainSection from "./collections/ColMainSection"
import PastActions from "./collections/PastActions"
import { makeGetRequests, SERVER_URL } from "../../reusables/API_requests"
import { useDispatch, useSelector } from "react-redux"
import { getUserData, getTokens, updateToken, logUserOut } from "../../redux/Slices/userSlice"
import { useNavigate } from "react-router-dom"

function EncryptCollection() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState("")
    const [filteredData, setFilteredData] = useState([])

    const loggedInUser = useSelector(getUserData)
    const authTokens = useSelector(getTokens)


    const handleChange = (e) => {
        const {value} = e.target
        setInputValue(value)

        const result = filteredData.filter((item) => {
            if(item?.file_name.toLowerCase().includes(value.toLowerCase())){
                return item
            }

         })
         setFilteredData(result)
    }

    async function fetchData(){
            const response = await makeGetRequests(`${SERVER_URL}/api/encrypt/${loggedInUser?.id}/`,authTokens?.access_token)
            if(response?.message === "Token has expired"){
                const retry = await makeGetRequests(`${SERVER_URL}/api/refresh/`,authTokens?.refresh_token)
                if(retry?.message === "Token has expired"){
                    dispatch(logUserOut())
                }else{
                    await dispatch(updateToken(retry?.data))
                    navigate("/file-encryptor")
                    return
                }

            }else{
                setFilteredData(response?.data || [])
            }

    }




useEffect(() => {
    if(inputValue.length === 0){
        fetchData()
    }

},[inputValue])

  return (
    <div className={`h-screen`}>
    <ColMainSection searchValue={inputValue} handleChange={handleChange}  />
    <PastActions data={filteredData} value={inputValue} />
    </div>
  )
}

export default EncryptCollection
