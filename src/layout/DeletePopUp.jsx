import { IoMdClose } from "react-icons/io";


function DeletePopUp({fileName, performDelete, closePopUp}) {
  return (
    <div className="fixed z-[500] top-0 left-0 flex justify-center items-center bg-black/90
           h-full w-full px-2.5">


        <div className="flex justify-center relative z-[520] p-4 px-8
        mx-3 w-full sm:w-2/5 h-[50%] bg-white rounded-lg">

        <div
        onClick={closePopUp}
        className="absolute z-[5] top-2 right-3  sm:top-5 sm:right-6 cursor-pointer">
          <IoMdClose className="text-black text-3xl" />
        </div>


        <div className="w-full flex flex-col text-black mt-[80px]">
        <p className="font-bold text-xl mb-3">Delete File</p>
            <p className="font-bold mb-[20px]">{fileName} will be deleted.</p>
            <div className="flex justify-end mt-10 font-bold space-x-5">
                <button
                onClick={closePopUp}
                className="bg-gray-200 hover:bg-gray-300 border-gray-300  px-6 py-2 rounded-md border-[1px]">
                Cancel
                </button>
                <button
                onClick={performDelete}
                className="bg-red-500 hover:bg-red-700 border-red-700 text-white px-6 py-2 rounded-md border-[1px]">
                Delete
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DeletePopUp
