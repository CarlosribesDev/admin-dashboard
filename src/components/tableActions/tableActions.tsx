import React from 'react'
import { LuRefreshCcw } from 'react-icons/lu'

export default function TableActions() {
    return (
        <div className="items-center justify-between block sm:flex">
            <div className="flex items-center mb-4 sm:mb-0">
                <form className="sm:pr-3" action="#" method="GET">
                    {/* <label htmlFor="products-search" className="sr-only">Search</label> */}
                    <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                        <input type="text" name="email" id="products-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Buscar proyecto"/>
                    </div>
                </form>
            </div>
            <div className='flex items-center ml-auto space-x-2 sm:space-x-3'>
                <button className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center rounded-lg  text-white bg-blue-500
                            bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto " type="button">
                    + Crear proyecto
                </button>
                <button className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center rounded-lg  text-white bg-blue-500
                            bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto " type="button">
                    <LuRefreshCcw className="mr-2"/>
                    Refresh
                </button>
            </div>
        </div>
    )
}
