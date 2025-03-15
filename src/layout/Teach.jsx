
function Teach({toggleModal, children}) {
  return (
    <div className="mb-14">
               <div className="relative md:h-[580px] px-3 py-12 border-[1px] rounded-lg shadow-lg">
                {children}
                <button onClick={toggleModal} className="bg-themed_teal text-white py-1
                absolute bottom-3 md:bottom-6 left-4
                px-4 rounded-md sm:border-2 shadow-md hover:shadow-themed_teal">
                Try now</button>
                </div>
    </div>
  )
}

export default Teach
