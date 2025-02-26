import { BsFillEnvelopeSlashFill } from "react-icons/bs"
import { MdMenu } from "react-icons/md"
import { Link } from "react-router-dom"

function EncryptHeader() {
  return (
    <div className="flex justify-between flex-wrap">
        <div>
            <Link to="/file-encryptor">
                <BsFillEnvelopeSlashFill className="text-white text-5xl" />
            </Link>
        </div>

        <div>
            <button className="md:hidden text-white text-3xl my-2.5"><MdMenu /></button>
        </div>

        {/* <div className="fixed left-0 top-0 bg-themed_blue sm:bg-transparent z-[10] sm:relative
         w-[75%] sm:w-auto h-full sm:h-auto py-2.5 sm:px-2.5">
            <ul className="flex flex-col sm:flex-row space-x-3 sm:space-x-0 space-y-8 sm:space-y-0">
            <li><Link className="px-4 py-2">Collections</Link></li>
            <li><Link className="bg-themed_black text-white px-4 py-2 rounded-2xl">Log in</Link></li>
            <li><Link className="text-themed_black bg-white px-4 py-2 rounded-2xl">Log out</Link></li>
            </ul>
        </div> */}

    </div>
  )
}

export default EncryptHeader
