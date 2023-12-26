'use client'
import React from 'react'

export default function CreateProjectModal({isVisible, onClose}: {isVisible: boolean, onClose: () => void}) {
    return (
        <>
            {/* <div className={`fixed inset-0 bg-black opacity-50 ${isVisible ? 'block' : 'hidden'}`} /> */}
            <div className={`fixed inset-0 z-50 h-100 w-100 bg-black opacity-50 ${isVisible ? 'block' : 'hidden'}`}/>
            <div className={`flex items-center justify-center ${isVisible ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow ">
                        {/* <!-- Modal header --> */}
                        <header className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 className="text-lg font-semibold text-gray-900 ">
                                Create New Product
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={onClose}>
                                X
                            </button>
                        </header>
                        {/* <!-- Modal body --> */}
                        <form className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" placeholder="Type product name"/>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                                    <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$2999" required/>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                        <option>Select category</option>
                                        <option value="TV">TV/Monitors</option>
                                        <option value="PC">PC</option>
                                        <option value="GA">Gaming/Console</option>
                                        <option value="PH">Phones</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Product Description</label>
                                    <textarea id="description"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm px-5 py-2.5 text-center">
                                + Add new product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
