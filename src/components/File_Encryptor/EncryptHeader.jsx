import { useState } from "react"
import { BsFillEnvelopeSlashFill } from "react-icons/bs"
import { MdMenu } from "react-icons/md"
import { Link, Outlet } from "react-router-dom"

function EncryptHeader() {

    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu(){
        setShowMenu(!showMenu)
    }


  return (
    <div className='bg-themed_teal text-white w-full h-full relative '>
    <div className="flex justify-between flex-wrap p-4">
        <div>
            <Link to="/file-encryptor">
                <BsFillEnvelopeSlashFill className="text-white text-5xl" />
            </Link>
        </div>

        <div>
            <button onClick={toggleMenu} className="md:hidden text-white text-3xl my-2.5"><MdMenu /></button>
        </div>

        <div className={`${showMenu ? "block" : "hidden" } sm:block fixed left-0 top-0 bg-themed_blue sm:bg-transparent z-[10] sm:relative
         w-[75%] sm:w-auto h-full sm:h-auto py-2.5 sm:px-2.5`}>
            <ul className="flex flex-col sm:flex-row space-x-3 sm:space-x-0 space-y-8 sm:space-y-0">
            <li onClick={toggleMenu}><Link to="/file-encryptor/collections" className="px-4 py-2">Collections</Link></li>
            <li onClick={toggleMenu}><Link className="bg-themed_black text-white px-4 py-2 rounded-2xl">Log in</Link></li>
            <li onClick={toggleMenu}><Link className="text-themed_black bg-white px-4 py-2 rounded-2xl">Log out</Link></li>
            </ul>
        </div>

    </div>
    <Outlet />
    </div>
  )
}

export default EncryptHeader
