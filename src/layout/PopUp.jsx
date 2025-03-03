import { IoMdClose } from "react-icons/io";

function PopUp({children, closePopUp}) {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center bg-[#000]
      h-full w-full">
        <div className="relative mx-3 w-full sm:w-2/4 h-[85%] bg-white rounded-lg">
        <div
        onClick={closePopUp}
        className="absolute top-2 right-2 cursor-pointer">
          <IoMdClose className="text-themed_blue text-3xl" />
        </div>
        {children}
        </div>
    </div>
  )
}

export default PopUp
