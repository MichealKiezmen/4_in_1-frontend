import image1 from "../../../assets/images/logo-encrypt.webp"



function ColMainSection({searchValue, handleChange}) {


  return (
    <div className="relative pt-8 pb-20 flex flex-col md:flex-row ml-5 md:ml-[70px]">
        <div className="w-full md:w-2/4 px-5 my-8">
            <h3 className="font-bold text-3xl md:mt-10"> Encryption History</h3>

            <p className="my-5">Track, manage, and access all your encrypted files from one secure location.</p>
            <p className="text-xl">
            Your digital fortress is only as strong as your keys. Here you&apos;ll find all your
             encrypted files and their corresponding encryption keys stored securely for your
             reference. Remember, only you have access to this information.
            </p>
        </div>

        <div className="hidden w-full md:w-2/4 md:flex justify-center items-center">
        <div className="h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] p-1 bg-white rounded-full">
            <img src={image1}
            className="transition duration-500 hover:scale-110 h-full w-full rounded-full"
            alt="..." />
        </div>
        </div>


        <div className="w-full absolute -bottom-6 flex justify-center">
          <div className="w-4/5 md:w-3/5">
            <input type="text" value={searchValue} onChange={handleChange}
            className="w-full p-4 border-[1px] rounded-md text-themed_black
            focus:border-themed_blue outline-themed_blue border-themed_blue"
            placeholder="Search files by name"
             />
          </div>
            </div>
    </div>
  )
}

export default ColMainSection
