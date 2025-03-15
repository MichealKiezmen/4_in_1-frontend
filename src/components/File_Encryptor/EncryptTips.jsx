
function EncryptTips({showLoginPopUp}) {
  return (
    <div className="bg-[#F3F5FC] text-themed_teal px-4 py-10">
        <h4 className="text-center font-bold text-4xl my-4">Tips</h4>

        <div className="px-3">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-10">
        <div className="flex justify-center items-center bg-white text-[#828284] h-[200px] w-4/5 md:w-[25%] p-5 shadow-lg rounded-md">
          <p>If you&apos;ve forgotten your key, there&apos;s no way to recover your file - that&apos;s the power of true encryption</p>
        </div>
        <div className="flex justify-center items-center bg-white text-[#828284] h-[200px] w-4/5 md:w-[25%] p-5 shadow-lg rounded-md">
          <p>For extra security, decrypt files only when needed and re-encrypt afterward</p>
        </div>
        <div className="flex justify-center items-center bg-white text-[#828284] h-[200px] w-4/5 md:w-[25%] p-5 shadow-lg rounded-md">
          <p>Consider storing encrypted files in multiple locations as backups</p>
        </div>
        </div>

        <div className="my-5 text-center">
        <p className="font-bold text-xl mb-2">OR</p>
        <p>you can avoid these issues by creating an account
         and we will handle these problems for you.
         <button className="font-semibold mx-2 hover:opacity-85 hover:font-light" onClick={showLoginPopUp}>sign up now.</button></p>
        </div>

        </div>


    </div>
  )
}

export default EncryptTips
