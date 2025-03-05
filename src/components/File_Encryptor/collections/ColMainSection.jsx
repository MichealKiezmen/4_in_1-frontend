
function ColMainSection({searchValue, handleChange}) {
  return (
    <div>
        <div className="px-5 my-8">
            <h3 className="my-10">Your Encrypted files</h3>

            <div className="w-[90%] md:w-3/5">
            <input type="text" value={searchValue} onChange={handleChange}
            className="w-full px-3 py-1 border-[1px] rounded-md text-themed_black
            focus:border-themed_blue outline-themed_blue border-themed_blue"
            placeholder="Search files"
             />
            </div>
        </div>
    </div>
  )
}

export default ColMainSection
