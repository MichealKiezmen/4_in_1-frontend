import { useGoogleLogin } from '@react-oauth/google'
import { makeGetRequests, makePostRequests, SERVER_URL } from '../../reusables/API_requests'
import EncryptorHerosection from './EncryptorHerosection'
import EncryptorHow from './EncryptorHow'
import EncryptTips from './EncryptTips'
import { useState } from 'react'
import PopUp from '../../layout/PopUp'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { updateToken, updateUser } from '../../redux/Slices/userSlice'
import { useNavigate } from 'react-router-dom'



function EncryptHome() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginShow,setLoginShow] = useState(false)
    const [loading, setLoading] = useState(false)


    const toggleLoginPopUp = () => {
        setLoginShow(!loginShow)
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





  return (
    <div className='bg-themed_teal text-white w-full h-full relative font-dmsans'>
    <div className='ml-5 md:ml-[80px] py-4 md:h-[75vh] lg:h-[60vh]'>
    <EncryptorHerosection />
    </div>
    <EncryptorHow />
    <EncryptTips showLoginPopUp={toggleLoginPopUp} />


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

export default EncryptHome
