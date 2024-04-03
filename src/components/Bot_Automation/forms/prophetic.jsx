import { MdCancelPresentation } from "react-icons/md";

function Prophetic({ closePopUp, form, handleSubmit, handleChange }) {


    return (
        <div className="absolute top-0 z-10 w-full h-full flex justify-center items-center  bg-gray-500">
            <div className="relative backdrop-blur-xl p-4 bg-white h-10/12 w-11/12 sm:w-2/4 rounded-xl border-2">

                <MdCancelPresentation
                    onClick={closePopUp}
                    className="cursor-pointer hover:opacity-70 absolute top-4 sm:top-2 right-2 text-4xl"
                />

                <h3 className="text-2xl my-4 font-bold text-center">RCCG-SOL Bot</h3>
                <form className="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="youtuber" >Youtube page</label>
                        <input
                            value={form.youtuber}
                            onChange={handleChange}
                            className="block p-3 bg-gray-50 w-11/12 my-3 border-2 border-gray-200 rounded-sm"
                            id="youtuber" name="youtuber" type="text" placeholder="Youtuber" required />
                    </div>

                    <div>
                        <label htmlFor="theme" >Theme</label>
                        <input
                            value={form.theme}
                            onChange={handleChange}
                            className="block p-3 bg-gray-50 w-11/12 my-3 border-2 border-gray-200 rounded-sm"
                            id="theme" name="theme" type="text" placeholder="Theme" required />
                    </div>

                    <div>
                        <label htmlFor="category" >Category</label>
                        <select
                            value={form.category}
                            onChange={handleChange}
                            className="block p-3 bg-gray-50 w-11/12 my-3 border-2 border-gray-200 rounded-sm"
                            id="category" name="category" >
                            <option value="" disabled>Select an Option</option>
                            <option value="daily">Prophetic Encounter</option>
                            <option value="thursday">Destiny Encounter</option>
                            <option value="sunday">Sunday Service</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="date" >Date</label>
                        <input
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className="block p-3 bg-gray-50 w-11/12 my-3  border-2 border-gray-200 rounded-sm"
                            id="date" type="text" placeholder="dd/mm/yyyy format e.g (01/07/2020)" required />
                    </div>

                    <button className="block w-2/4 bg-teal-800 hover:opacity-80 px-5 py-3 m-3 mx-auto text-gray-100">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Prophetic
