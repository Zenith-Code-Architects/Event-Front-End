import React from 'react'

const AdminForm = () => {
    return (


        <form class="w-full max-w-lg m-auto mt-8">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="event-name">
                        Event Name<span className="required">*</span>:
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="event-name" type="text" placeholder="Event Caption" required /> {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        */}
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="event-date">
                        Event Date
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="event-date" type="date" placeholder="Date" />
                </div>

                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="event-time">
                        Event Time
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="event-time" type="time" placeholder="Time" />
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>

            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="event-location">
                        Location
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="event-location" type="text" placeholder="City & Digital Address" />
                </div>

                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="event-price">
                        Price
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="event-price" type="text" placeholder="Price" />

                </div>

            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="event-flier">
                        Flier
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="event-flier" type="file" placeholder="Event Flier" />
                </div>
                <div className='mx-auto mt-8'>
                    <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-[#793203] shadow-black hover:border-transparent hover:text-white-600 hover:bg-[#f79456] mt-4 lg:mt-0">Post Updates</a>
                </div>
            </div>

        </form>
    )
}

export default AdminForm