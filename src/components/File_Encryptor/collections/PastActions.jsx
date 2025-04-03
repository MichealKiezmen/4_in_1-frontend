import { useState } from "react"
import { LuFileJson2 } from "react-icons/lu"
import { FaRegFilePdf } from "react-icons/fa"
import { BsFiletypeCsv } from "react-icons/bs"
import { HiOutlineDocumentText } from "react-icons/hi"
import { CiFileOn } from "react-icons/ci"
import FileHistory from "./FileHistory"
import MobileFileHistory from "./MobileFileHistory"

function PastActions({data, value}) {

    const [keyOpen, setKeyOpen] = useState(Array.from(data, () => false))
    const [copied, setCopied] = useState(Array.from(data, () => false))


    function toggleEye(idx) {
        const keysList = [...keyOpen]
        keysList[idx] = !keysList[idx]
        setKeyOpen(keysList)
    }


    async function copyToClipboard(text, index){
        const x = [...copied]
        x[index] = true
        setCopied(x)

        await navigator.clipboard.writeText(text)

        await new Promise(resolve => setTimeout(resolve, 1000))

        const y = [...copied]
        y[index] = false
        setCopied(y)
    }

    function iconToDisplay(extension){
        if(extension === "json"){
            return <div className="py-4 mr-2 text-yellow-300"><LuFileJson2 className="text-2xl" /></div>
        }else if(extension === "pdf"){
            return <div className="py-4 mr-2 text-red-500"><FaRegFilePdf className="text-2xl" /></div>
        }else if(extension === "csv" || extension === "xls"){
            return <div className="py-4 mr-2 text-green-600"><BsFiletypeCsv className="text-2xl" /></div>
        }else if(extension === "docx" || extension === "doc"){
            return <div className="py-4 mr-2 text-blue-600"><HiOutlineDocumentText className="text-2xl" /></div>
        }else{
            return <div className="py-4 mr-2"><CiFileOn className="text-2xl" /></div>
        }

    }





    return (
        <div className="text-themed_teal bg-white py-20">
        {data.length > 0 ?

            <div className="p-4 lg:px-20 flex flex-col justify-center  overflow-x-scroll lg:overflow-x-hidden">
            <p className="font-bold text-2xl my-5">File History</p>

            <div className="hidden md:block">
                <FileHistory 
                data={data}
                iconToDisplay={iconToDisplay}
                keyOpen={keyOpen}
                toggleEye={toggleEye}
                copyText={copyToClipboard}
                copied={copied}
                />
            </div>

            <div className="md:hidden block">
                <MobileFileHistory 
                data={data}
                iconToDisplay={iconToDisplay}
                keyOpen={keyOpen}
                toggleEye={toggleEye}
                copyText={copyToClipboard}
                copied={copied}
                />
            </div>


        </div>

        :
        <div className="text-center p-3">
        {value.length > 0 && data.length === 0 ?
        <div>
        <h3 className="font-bold text-2xl">No Search Results</h3>
            <p>We couldn&apos;t find any files matching your search.
            Try different keywords or clear your search to see all your encrypted files.</p>
        </div>
        :
        <div>
        <h3 className="font-bold text-2xl">No Files Found</h3>
            <p>You haven&apos;t encrypted any files yet. Get started by returning to the
            encryption page and securing your first file.</p>
        </div>
        }

        </div>
         }
         </div>
    )
}

export default PastActions
