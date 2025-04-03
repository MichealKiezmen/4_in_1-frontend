import { IoMdClose } from "react-icons/io";

function PopUp({children, closePopUp}) {
  return (
    <div className="fixed z-[500] top-0 left-0 flex justify-center items-center bg-[#000]
      h-full w-full">
        <div className="relative mx-3 w-full sm:w-3/5 h-[85%] bg-white rounded-lg">

        <div
        onClick={closePopUp}
        className="absolute z-[5] top-2 right-3  sm:top-5 sm:right-6 cursor-pointer">
          <IoMdClose className="text-themed_teal text-3xl" />
        </div>


      {/* CIRCLE DESIGN */}
      <div className="border-[#014E9A] absolute -top-5 -right-[100px] sm:-top-10 sm:-right-[150px] opacity-5
      border-[60px] rounded-full  h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]" />

    <div className="border-[#014E9A] absolute -bottom-10 -left-[150px] opacity-5
      border-[60px] rounded-full h-[300px] w-[300px]" />

        {children}
        </div>
    </div>
  )
}

export default PopUp
