
function Teach({toggleModal, buttonIcon, children}) {
  return (
    <div className="mb-5">
    <div className="bg-themed_blue text-white flex justify-center py-5 rounded-t-lg">
               <button onClick={toggleModal} className="hover:opacity-75">
               {buttonIcon}
               </button>
               </div>

               <div className="md:h-[550px] px-3 py-8 border-[1px] rounded-b-lg border-themed_blue">
                {children}
                <button onClick={toggleModal} className="bg-themed_blue text-white py-1
                px-4 rounded-2xl mt-4 border-[1px] sm:border-2 shadow-md shadow-themed_blue hover:shadow-lg">
                Try now</button>
                </div>
    </div>
  )
}

export default Teach
