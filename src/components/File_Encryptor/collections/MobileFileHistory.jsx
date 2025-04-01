import { Link } from "react-router-dom"
import { MdDownloadForOffline } from "react-icons/md"
import { IoIosEye, IoIosEyeOff } from "react-icons/io"


function MobileFileHistory({data, iconToDisplay, keyOpen, toggleEye}) {
  return (
    <div>
    <div className="flex justify-between bg-themed_teal text-white py-4 px-2.5">
    <p>Files</p>
    <p>Actions</p>
    </div>

    {data.map((item, idx) => {
        return (
            <>
            <div className="p-3">
            <div className="flex justify-between">
            <p className="flex">{iconToDisplay(item?.file_extension)} {item?.file_name}</p>
            <Link to={item?.file_url} className="flex justify-center">
            <MdDownloadForOffline className="text-2xl" />
            </Link>
            </div>

         
                        {keyOpen[idx] ?
                            <div className="flex justify-between">
                                <p className="bg-[#F3F5FC] overflow-x-scroll w-[250px] rounded-lg px-5 py-1">
                                {item?.encryption_key}
                                </p>
                                <IoIosEye className="cursor-pointer text-2xl mx-2 fon"
                                    onClick={() => {
                                        toggleEye(idx)
                                    }} />
                            </div>
                            :
                            <div className="flex justify-between">
                                <p className="bg-[#F3F5FC] overflow-x-scroll w-[250px] rounded-lg px-3 py-1">{'*'.repeat(item?.encryption_key?.length)}</p>
                                <IoIosEyeOff className="cursor-pointer text-2xl mx-2"
                                    onClick={() => {
                                        toggleEye(idx)
                                    }}
                                />
                            </div>
                        }
            </div>
            </>
        )
    })}


    {/* {data.map((item, idx) => {
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
    })} */}

</div>
  )
}

export default MobileFileHistory
