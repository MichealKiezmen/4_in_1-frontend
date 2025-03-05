import { useEffect, useState } from "react"
import ColMainSection from "./collections/ColMainSection"
import PastActions from "./collections/PastActions"
import { makeGetRequests, SERVER_URL } from "../../reusables/API_requests"

function EncryptCollection() {
    const [inputValue, setInputValue] = useState("")
    const [filteredData, setFilteredData] = useState([])


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
            const userID = 1
            const token = "12345"
            const response = await makeGetRequests(`${SERVER_URL}/api/encrypt/${userID}/`,token)
            setFilteredData(response?.data)
    }


useEffect(() => {
    fetchData()
},[])


useEffect(() => {
    if(inputValue.length === 0){
        fetchData()
    }

},[inputValue])

  return (
    <div>
    <ColMainSection searchValue={inputValue} handleChange={handleChange}  />
    <PastActions data={filteredData} />
    </div>
  )
}

export default EncryptCollection
