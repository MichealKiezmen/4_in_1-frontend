import { Link } from "react-router-dom"
import { MdDownloadForOffline } from "react-icons/md"
import { IoIosEye, IoIosEyeOff } from "react-icons/io"
import { IoCopyOutline} from "react-icons/io5"
import { CiCircleCheck } from "react-icons/ci";

function MobileFileHistory({data, iconToDisplay, keyOpen, toggleEye, copyText, copied}) {
  return (
    <div>
    <div className="flex justify-between bg-themed_teal text-white py-4 px-2.5">
    <p>Files</p>
    <p>Actions</p>
    </div>

    {data.map((item, idx) => {
        return (
            <div key={idx}>
            <div className="p-4 pb-6 border-b-[1px] border-b-[#F0F0F0] my-5 shadow-sm">
            <div className="mb-3 flex justify-between">
            <div className="flex">
            {iconToDisplay(item?.file_extension)} 
            <span className="mx-2.5 mt-3">{item?.file_name}</span>
            </div>
            <Link to={item?.file_url} className="my-auto flex justify-center">
            <MdDownloadForOffline className="text-2xl" />
            </Link>
            </div>

         
                        {keyOpen[idx] ?
                            <div className="flex justify-between">

                            {!copied[idx] ?
                                <IoCopyOutline 
                                onClick={() => {
                                 copyText(item?.encryption_key, idx)
                                }}
                                disabled={copied[idx]}
                                className={`cursor-pointer ${copied[idx] && "opacity-25"} text-2xl my-auto mx-2`} 
                                />
                                :
                                <CiCircleCheck 
                                className={`text-2xl my-auto mx-2`} 
                                />
                            }

                                <p 
                                title="Click to copy key"
                                onClick={() => {
                                    copyText(item?.encryption_key, idx)
                                }}
                                className="bg-[#F3F5FC] overflow-x-scroll w-[280px] rounded-lg px-5 py-1">
                                {item?.encryption_key}
                                </p>
                                <IoIosEye className="cursor-pointer text-2xl ml-4 my-auto"
                                    onClick={() => {
                                        toggleEye(idx)
                                    }} />
                            </div>
                            :
                            <div className="flex justify-between">
                                <p 
                                className="bg-[#F3F5FC] overflow-x-scroll w-[280px] rounded-lg px-3 py-1">
                                {'*'.repeat(item?.encryption_key?.length)}
                                </p>
                                <IoIosEyeOff className="cursor-pointer text-2xl ml-4 my-auto"
                                    onClick={() => {
                                        toggleEye(idx)
                                    }}
                                />
                            </div>
                        }
            </div>
            </div>
        )
    })}

</div>
  )
}

export default MobileFileHistory
