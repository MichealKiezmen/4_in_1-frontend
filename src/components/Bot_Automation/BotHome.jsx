import { useState } from "react"
import Prophetic from "./forms/prophetic"
import Swal from "sweetalert2"
import { toast } from "react-toastify"



function BotHome() {

  const [propheticForm, setPropheticForm] = useState(false)
  const [form, setForm] = useState({
    youtuber: "",
    theme: "",
    category: "",
    date: ""
  })

  const openPopUp = (clicked) => {
    if (clicked === "prophetic-encounter") {
      setPropheticForm(true)
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    setPropheticForm(false)
    toast.loading("Processing Automation...")
    try {
      const url = "http://127.0.0.1:8000/api/botautomation/upload_video"
      const request = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })


      if (!request.ok) {
        Swal.fire({
          title: "Ooops, something went wrong!",
          icon: "error"
        })
        toast.dismiss()
      } else {

        const response = await request.json()
        Swal.fire({
          title: "Success",
          icon: "success",
          text: response.message
        })
        toast.dismiss()

      }

      setForm({
        youtuber: "",
        theme: "",
        category: "",
        date: ""
      })

    } catch (error) {
      Swal.fire({
        title: "Ooops, something went wrong!",
        icon: "error"
      })
      toast.dismiss()
    }
  }

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500
    from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
      <div className="my-4">
        <button
          onClick={() => {
            openPopUp("prophetic-encounter")
          }}
          className="w-[190px] bg-[#004c4c] rounded-lg border-[#b2d8d8] border-2
     text-[#b2d8d8] hover:bg-[#008080] px-5 py-3 m-4 bg-">Prophetic Encounter</button>
      </div>

      <div className="my-4">
        <button className="w-[190px] bg-[#004c4c] rounded-lg border-[#b2d8d8] border-2
     text-[#b2d8d8] hover:bg-[#008080] px-5 py-3 m-4 bg-">Bot 2</button>
      </div>

      <div className="my-4">
        <button className="w-[190px] bg-[#004c4c] rounded-lg border-[#b2d8d8] border-2
     text-[#b2d8d8] hover:bg-[#008080] px-5 py-3 m-4 bg-">Bot 3</button>
      </div>


      {/* FORM */}
      {propheticForm &&
        <Prophetic
          closePopUp={() => {
            setPropheticForm(false)
          }}
          form={form}
          handleSubmit={submit}
          handleChange={(e) => {
            const { name, value } = e.target
            setForm((prevValue) => {
              return { ...prevValue, [name]: value }
            })
          }}
        />}

    </div>
  )
}

export default BotHome
