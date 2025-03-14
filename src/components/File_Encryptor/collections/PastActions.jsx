import { Link } from "react-router-dom"
import { MdDownloadForOffline } from "react-icons/md"
import { IoIosEye, IoIosEyeOff } from "react-icons/io"
import { useState } from "react"
import { LuFileJson2 } from "react-icons/lu"
import { FaRegFilePdf } from "react-icons/fa"
import { BsFiletypeTxt } from "react-icons/bs"
import { HiOutlineDocumentText } from "react-icons/hi"
import { CiFileOn } from "react-icons/ci"

function PastActions({data, value}) {

    const [keyOpen, setKeyOpen] = useState(Array.from(data, () => false))

    function toggleEye(idx) {
        const keysList = [...keyOpen]
        keysList[idx] = !keysList[idx]
        setKeyOpen(keysList)
    }

    function iconToDisplay(extension){

        if(extension === "json"){
            return <div className="py-4 mr-2 text-yellow-300"><LuFileJson2 className="text-2xl" /></div>
        }else if(extension === "pdf"){
            return <div className="py-4 mr-2 text-red-500"><FaRegFilePdf className="text-2xl" /></div>
        }else if(extension === "txt"){
            return <div className="py-4 mr-2 text-green-600"><BsFiletypeTxt className="text-2xl" /></div>
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
            <table>
                <tr className="bg-themed_teal text-white">
                    <th className="py-3">FILES</th>
                    <th>ENCRYPTION KEY</th>
                    <th className="pr-3">DOWNLOAD</th>
                </tr>

                {data.map((item, idx) => {
                    return (
                        <tr key={idx} className="">

                            <td className="py-3">
                            <div className="flex">
                            {iconToDisplay(item?.file_extension)}
                            <div className="mx-2 font-semibold">
                            <p>{item?.file_name}</p>
                            <p className="text-sm">{item?.file_extension}</p>
                            </div>
                            </div>

                            </td>

                            <td className="py-3">
                                <div className="flex mx-12">
                                    {keyOpen[idx] ?
                                        <>
                                            <p className="bg-[#F3F5FC] rounded-lg px-3 py-1">{item?.encryption_key}</p>
                                            <IoIosEye className="cursor-pointer text-3xl mx-2"
                                                onClick={() => {
                                                    toggleEye(idx)
                                                }} />
                                        </>
                                        :
                                        <>
                                            <p className="w-[400px] bg-[#F3F5FC] rounded-lg px-3 py-1">{'*'.repeat(item?.encryption_key?.length)}</p>
                                            <IoIosEyeOff className="cursor-pointer text-3xl mx-2"
                                                onClick={() => {
                                                    toggleEye(idx)
                                                }}
                                            />
                                        </>
                                    }
                                </div>
                            </td>

                            <td className="py-3">
                                <Link to={item?.file_url} className="flex justify-center">
                                    <MdDownloadForOffline className="text-4xl" />
                                </Link>
                            </td>

                        </tr>
                    )
                })}

            </table>



        </div>

        :
        <div className="text-center">
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
