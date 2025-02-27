function PopUp({children}) {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center bg-[#000]
      h-full w-full">
        <div className="relative mx-3 w-full sm:w-2/4 h-[85%] bg-white rounded-lg">
        {children}
        </div>
    </div>
  )
}

export default PopUp
