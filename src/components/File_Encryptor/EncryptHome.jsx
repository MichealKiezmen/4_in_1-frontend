import { useGoogleLogin } from '@react-oauth/google'
import { makeGetRequests, makePostRequests, SERVER_URL } from '../../reusables/API_requests'
import EncryptHeader from './EncryptHeader'
import EncryptorHerosection from './EncryptorHerosection'
import EncryptorHow from './EncryptorHow'


function EncryptHome() {

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
    <div className='p-4'>
    <EncryptHeader />
    <EncryptorHerosection />
    </div>
    <EncryptorHow />

        <button onClick={() => login()}>Sign up with google</button>
    </div>
  )
}

export default EncryptHome
