import { useGoogleLogin } from '@react-oauth/google'
import { makeGetRequests, makePostRequests, SERVER_URL } from '../../reusables/API_requests'
import EncryptHeader from './EncryptHeader'
import EncryptorHerosection from './EncryptorHerosection'
import EncryptorHow from './EncryptorHow'
import EncryptTips from './EncryptTips'
import { useState } from 'react'
import PopUp from '../../layout/PopUp'
import { FcGoogle } from 'react-icons/fc'


function EncryptHome() {
    const [loginShow,setLoginShow] = useState(false)

    const toggleLoginPopUp = () => {
        setLoginShow(!loginShow)
    }
    async function registerUser(data){
        const url = `${SERVER_URL}/api/login/`
        const result = await makePostRequests(url, null, data)
        console.log(result)
    }

    const login =  useGoogleLogin({
        onSuccess: async (tokenResponse) => {
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
            })
            .catch((err) => {
                console.error("ERROR",err)
            })

        },

        onError: (error) => {
            console.error(error)
        }
      })

  return (
    <div className='bg-themed_teal text-white w-full h-full relative'>
    <div className='p-4 md:h-[85vh]'>
    <EncryptHeader />
    <EncryptorHerosection />
    </div>
    <EncryptorHow />
    <EncryptTips showLoginPopUp={toggleLoginPopUp} />


    {loginShow &&
    <PopUp closePopUp={toggleLoginPopUp}>
    <div className='flex flex-col justify-center h-full items-center text-black space-y-10'>
    <p>Keep track of your encrypted files by signing up with us.</p>
    <button
    onClick={() => login()}
    className='flex justify-center text-themed_blue w-[80%] rounded-lg border-themed_blue hover:opacity-80
     border-2 py-2.5'
    ><FcGoogle className='text-xl mx-1 mt-1' /> Sign up with google</button>
    </div>
    </PopUp>
    }



    </div>
  )
}

export default EncryptHome
