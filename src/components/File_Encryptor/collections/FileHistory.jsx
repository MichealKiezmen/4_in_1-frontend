import { Link } from "react-router-dom"
import { MdDownloadForOffline, MdDelete } from "react-icons/md"
import { IoIosEye, IoIosEyeOff} from "react-icons/io"
import { IoCopyOutline} from "react-icons/io5"
import { CiCircleCheck } from "react-icons/ci";


function FileHistory({data, iconToDisplay, keyOpen, toggleEye, copyText, copied, handleDelete}) {


  return (
    <table className="w-full">
    <thead>
    <tr className="bg-themed_teal text-white">
        <th className="py-3">FILES</th>
        <th>ENCRYPTION KEY</th>
        <th className="pr-3">DOWNLOAD</th>
    </tr>
    </thead>

    {data.map((item, idx) => {
        return (
            <tbody key={idx}>
            <tr  className="">

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
                            className="bg-[#F3F5FC] cursor-pointer w-[400px] overflow-x-scroll rounded-lg px-3 py-1">
                            {item?.encryption_key}
                            </p>
                            <IoIosEye className="cursor-pointer text-2xl my-auto mx-2"
                                onClick={() => {
                                    toggleEye(idx)
                                }} />
                        </>
                        :
                        <>
                            <p className="w-[400px] bg-[#F3F5FC] rounded-lg px-3 py-1">{'*'.repeat(item?.encryption_key?.length)}</p>
                            <IoIosEyeOff className="cursor-pointer text-2xl my-auto  mx-2"
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

            <td>
                <button
                disabled={copied[idx]}
                className={`${copied[idx] && "opacity-25"} my-auto`}
                onClick={() => {
                    handleDelete(item?.file_id, idx)
                }}>
                <MdDelete
                className="text-2xl" />
                </button>
            </td>

            </tr>

            </tbody>
        )
    })}

</table>
  )
}

export default FileHistory
