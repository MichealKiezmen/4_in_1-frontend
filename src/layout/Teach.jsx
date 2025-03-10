
function Teach({toggleModal, buttonIcon, children, img}) {
  return (
    <div className="mb-14">
    <div className="bg-themed_blue text-white flex justify-center rounded-t-lg">
               <button onClick={toggleModal} className="hover:opacity-75">
               <div className="h-[250px] md:h-full w-[250px] md:w-full">
                <img className="h-full w-full rounded-t-lg" src={img} alt="..." />
               </div>
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
