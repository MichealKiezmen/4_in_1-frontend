import { useState } from "react"
import logo from "../../assets/images/speech_logo.jpg"
import { toast } from "react-toastify";
import Swal from "sweetalert2";



function PDFHome() {
  const [selectedFile, setSelectedFile] = useState({
    name: "No file chosen"
  })

//  async  function getAll_Links() {
//   try{
//     const url = "http://127.0.0.1:8000/api/pdf_to_speech";
//     const request = await fetch(url,{
//       method: "GET",
//       headers:{
//         "Content-Type": "application/json"
//       }
//     })

//     const response = await request.json()
//     console.log(response)
//   }catch(error){
//     console.log(error)
//   }

//   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("pdf", selectedFile);

    if (selectedFile.name !== "No file chosen") {
      toast.loading("Processing.... This may take a while or a less depending on your PDF size")
      try {
        const url = "http://127.0.0.1:8000/api/pdf_to_speech";
        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });

        setSelectedFile({ name: "" });
        if (!response.ok) {
          toast.dismiss();
          const error = await response.json()
          console.log(error)
          Swal.fire({
            title : "Ooops! Something went wrong...",
            icon: "error",
            text: `${error.message}`
          })
        }

        const data = await response.json();
        toast.dismiss();

        // go to download url
        Swal.fire({
          title: "Success",
          icon: "success",
          html: `Download audio file <b><a href=${data?.link}>here</a></b>`
        })
      } catch (err) {
        toast.dismiss();
        console.log(err)
        Swal.fire({
          title : "Ooops! Something went wrong...",
          icon: "error",
          text: `${err.message}`
        })
      }
    } else {
      setSelectedFile({ name: "No file chosen, Please select a file" });
    }
  };

  // useEffect(() => {
  //   getAll_Links()
  // },[])

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500
    from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
      <div className="flex flex-col justify-center text-center">
        <p className="my-4 text-3xl text-white font-bold">Convert PDF into Speech</p>
        <div className="h-[280px] flex items-center justify-center
       border-2 border-gray-200 rounded-2xl p-4 my-4">
          <form className="block p-4" encType="multipart/formdata">
            <img className="h-[80px] mb-7 mx-auto rounded-full" src={logo} alt="logo" />
            <div className="my-4">
              <label className="px-4 py-2 bg-gray-700 text-white text-center
         rounded-md cursor-pointer hover:bg-gray-600 transition-colors"
                type="file" id="myfile" name="myfile">
                Upload File
                <input
                  type="file"
                  accept="application/pdf"
                  className="opacity-0 absolute"
                  onChange={(e) => {
                    setSelectedFile(e.target.files[0])
                  }} />
              </label>
              <span id="file-name" className="ml-4 text-black">{selectedFile.name}</span>
            </div>
            <button
              onClick={handleSubmit}
              className="mt-7 py-3 px-5 bg-blue-700 hover:bg-blue-600 text-white">Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default PDFHome
