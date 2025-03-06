
function ColMainSection({searchValue, handleChange}) {
  return (
    <div>
        <div className="px-5 my-8">
            <h3 className="text-4xl mt-10"> Encryption History</h3>

            <p className="my-5">Track, manage, and access all your encrypted files from one secure location.</p>
            <p className="text-xl">
            Your digital fortress is only as strong as your keys. Here you&apos;ll find all your
             encrypted files and their corresponding encryption keys stored securely for your
             reference. Remember, only you have access to this information.
            </p>

            <div className="flex justify-center">
          <div className="w-[90%] md:w-3/5 my-8">
            <input type="text" value={searchValue} onChange={handleChange}
            className="w-full px-3 py-1 border-[1px] rounded-md text-themed_black
            focus:border-themed_blue outline-themed_blue border-themed_blue"
            placeholder="Search files"
             />
          </div>
            </div>
        </div>
    </div>
  )
}

export default ColMainSection
