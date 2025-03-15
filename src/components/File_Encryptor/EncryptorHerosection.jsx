import { useEffect, useState } from "react"
import PopUp from "../../layout/PopUp"
import Encrypt from "./encrypt_layout/Encrypt"
import { motion } from "motion/react"

import img2 from "../../assets/images/img2.webp"
import img3 from "../../assets/images/img3.webp"
import img4 from "../../assets/images/img4.webp"
import img5 from "../../assets/images/img5.webp"
import img6 from "../../assets/images/img6.webp"
import img7 from "../../assets/images/img7.webp"
import img8 from "../../assets/images/img8.webp"
import img10 from "../../assets/images/img10.webp"

const images = [img6, img2, img3, img4, img5, img7, img8, img10]

function EncryptorHerosection() {
    const textContent = "Your Files. Your Privacy. Your Control."
    const [encryptmodalShow, setEncryptModalShow] = useState(false)
    const [heading, setHeading] = useState("")
    const [currentHeadingIdx, setCurrentHeadingIdx] = useState(0)
    const [imageIndex, setImageIndex] = useState(0)

    function toggleEncryptModal(){
      setEncryptModalShow(!encryptmodalShow)
    }


    useEffect(() => {

      const restartText = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000))
        if(currentHeadingIdx === textContent.length){
          setCurrentHeadingIdx(0)
          setHeading("")
        }
      }

      if (currentHeadingIdx < textContent.length) {
        const timer = setTimeout(() => {
          setHeading(prev => prev + textContent[currentHeadingIdx]);
          setCurrentHeadingIdx(prev => prev + 1);
        }, 200);
        return () => clearTimeout(timer);
      }

      restartText()
    }, [currentHeadingIdx]);

    useEffect(() => {

      const restartCarousel = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000))
        if(imageIndex === (images.length - 1)){
          setImageIndex(0)
        }
      }

      if(imageIndex < (images.length - 1)){
        const interval = setInterval(() => {
          setImageIndex(prev => prev + 1)
        }, 3000)

        return () => clearInterval(interval)
      }

      restartCarousel()

    },[imageIndex])

  return (
    <div className="my-10 md:my-[50px] flex flex-col md:flex-row sm:px-4">
        <div className="md:w-[50%] order-2 md:order-1">

        <motion.h3
        className="text-3xl italic font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        >
        {heading}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block ml-1 w-2 h-5 bg-themed_black"
        />
        </motion.h3>

  <p className="my-5 text-xl">Powerful end-to-end encryption that keeps your
  sensitive data protected from prying eyes. </p>

  <p className="mb-4">Safe Encrypt provides military-grade encryption for your most important
  files with a simple, intuitive interface. No technical expertise required.
  <br/>
  Encrypt and decrypt your files with just a few clicks, ensuring your private
    information stays private.</p>


    <div className="py-4">
              <button onClick={toggleEncryptModal}
              className="transition duration-500 hover:translate-x-4 py-3 lg:py-3 px-8 bg-white text-themed_teal font-semibold
              border-[1px] sm:border-2 rounded-md shadow-lg shadow-themed_teal hover:shadow-lg">
                Start Encrypting Now
              </button>
            </div>
        </div>

      <div className="flex justify-center items-center mb-10 md:w-[50%] order-1 md:order-2">
        {/* Image carousel */}

    <div className="">
        <div className="h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] p-1 bg-white rounded-full">
            <img src={images[imageIndex]}
            className="transition duration-500 hover:scale-110 h-full w-full rounded-full"
            alt="..." />
        </div>
    </div>

      </div>

      {encryptmodalShow && <PopUp closePopUp={toggleEncryptModal}><Encrypt /></PopUp>}
    </div>
  )
}

export default EncryptorHerosection
