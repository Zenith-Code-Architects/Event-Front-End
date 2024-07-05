import axios from 'axios';
import React from 'react'


const AdminForm = () => {

    // Post event backend
    const postEvent = async (event) => {
        event.preventDefault();
        //Collect all inputs from form
        const formData = new FormData(event.target);
        // Post data
        const response = await axios.post('https://zenith-code-architects-event-api.onrender.com/events', formData);
        console.log(response);
    }
    return (


        <form onSubmit={postEvent} className="w-full max-w-lg m-auto mt-8 ">
            <div className="flex flex-wrap -mx-3 mb-6 ">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="name">
                        Event Name<span className="required">*</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Event Caption" name='name' required /> {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        */}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="date">
                        Event Date<span className="required">*</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="date" type="date"  name="date" placeholder="Date" />
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="eventDescription">
                        Event Description<span className="required">*</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="eventDescription" type="text" name='eventDescription' placeholder="description" />
                
                </div>

            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="location">
                        Location<span className="required">*</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="location" type="text" name='location' placeholder="City & Digital Address" />
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="price">
                        Price<span className="required">*</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name='price' id="price" type="text" placeholder="Price" />

                </div>

            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="eventFlier">
                        Flier
                    </label>
                    <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="eventFlier" name='eventFlier' type="file" placeholder="Event Flier" />
                </div>
                <div className='mx-auto mt-8'>
                    <button type='submit' className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-[#793203] shadow-black hover:border-transparent hover:text-white-600 hover:bg-[#f79456] mt-4 lg:mt-0">Submit</button>
                </div>
            </div>

        </form>
    )
}

export default AdminForm