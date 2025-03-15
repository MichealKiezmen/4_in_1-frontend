import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md"
import { Link, Outlet, useNavigate } from "react-router-dom"
import PopUp from '../../layout/PopUp'
import { FcGoogle } from 'react-icons/fc'
import { useGoogleLogin } from '@react-oauth/google'
import { googleLogout } from '@react-oauth/google';
import { makeGetRequests, makePostRequests, SERVER_URL } from '../../reusables/API_requests'
import { useDispatch, useSelector } from 'react-redux'
import { getTokens, logUserOut, updateToken, updateUser } from '../../redux/Slices/userSlice'

import logo from "../../assets/images/logo1.png"

function EncryptHeader() {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const authTokens = useSelector(getTokens)

    const [showMenu, setShowMenu] = useState(false)
    const [loginShow,setLoginShow] = useState(false)
    const [loading, setLoading] = useState(false)

    function toggleMenu(){
        setShowMenu(!showMenu)
    }


    const toggleLoginPopUp = () => {
        toggleMenu()
        setLoginShow(!loginShow)
    }

    const logOut = async () => {
            toggleMenu()
            await googleLogout()
            await dispatch(logUserOut())
    }

    async function registerUser(data){
        const url = `${SERVER_URL}/api/login/`
        const result = await makePostRequests(url, null, data)
        const {payload} = await dispatch(updateToken(result?.data))
        const token = payload?.access_token
        const url2 = `${SERVER_URL}/api/me/`
        const userDate = await makeGetRequests(url2, token)
        const result2 = await dispatch(updateUser(userDate?.data))
        if(result2?.payload?.username){
            toggleLoginPopUp()
            navigate("/file-encryptor/collections")
        }
    }

    const login =  useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            setLoading(true)
            const response = await tokenResponse
            const token = await response?.access_token
            const url = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`

            await makeGetRequests(url, token)
            .then(({picture, name, email, id}) => {
                const body = {
                    email,
                    verifierId : id,
                    username: name,
                    profile_picture: picture
                }
                registerUser(body)
                setLoading(false)
            })
            .catch((err) => {
                console.error("ERROR",err)
                setLoading(false)
            })

        },

        onError: (error) => {
            setLoading(true)
            console.error(error)
            setLoading(false)
        }
      })


useEffect(() => {

},[authTokens])



  return (
    <div className='bg-themed_teal text-white w-full h-full relative '>
    <div className="flex justify-between flex-wrap p-4">
        <div className="ml-3 md:ml-[80px] py-4">
            <Link to="/file-encryptor">
                <img src={logo} className="h-10" alt="logo" />
            </Link>
        </div>

        <div>
            <button onClick={toggleMenu} className="md:hidden text-white text-3xl my-4"><MdMenu /></button>
        </div>

        <div className={`${showMenu ? "block" : "hidden" } sm:block fixed left-0 top-0 bg-themed_blue sm:bg-transparent z-[10] sm:relative
         w-[75%] sm:w-auto h-full sm:h-auto py-4 sm:px-2.5`}>
            <ul className="flex flex-col mr-5 md:mr-[90px] lg:mr-[120px] px-4 sm:py-0
            sm:flex-row sm:text-sm space-x-3 sm:space-x-0 space-y-8 sm:space-y-0">

            {authTokens ?
             <>
             <li onClick={toggleMenu}><Link to="/file-encryptor/collections" className="px-4 py-2">Collections</Link></li>
             <li onClick={logOut}><Link to="" className="text-themed_black bg-white px-4 py-2 rounded-md">Log out</Link></li>
             </>
            :
            <li onClick={toggleLoginPopUp}><Link to="" className="bg-themed_black text-white px-4 py-2 rounded-md">Log in</Link></li>
            }


            </ul>
        </div>

    </div>
    <Outlet />

        {loginShow &&
        <PopUp closePopUp={toggleLoginPopUp}>
        <div className='flex flex-col justify-center h-full items-center text-black space-y-10 p-4'>
        <p>Keep track of your encrypted files by signing up with us.</p>
        <button
        onClick={() => login()}
        className='flex justify-center text-themed_blue w-[80%] rounded-lg border-themed_blue hover:opacity-80
         border-2 py-2.5'
        >
        {loading ?
        <div className="flex justify-center">
            <p>Processing...</p>
            <div className="animate-bounce rounded-full h-5 w-5 bg-themed_blue" />
        </div>
        :
        <><FcGoogle className='text-xl mx-1 mt-1' /> Sign up with google</>
        }
        </button>
        </div>
        </PopUp>
        }

    </div>
  )
}

export default EncryptHeader
