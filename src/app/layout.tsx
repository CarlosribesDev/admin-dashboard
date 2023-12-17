'use client'
import '../styles/globals.css'
import { NavBar, SideBar, Footer } from '@/components'
import { useState } from 'react'
import { GlobalContext } from '@/context/globalContex'


export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/nodejs.png" sizes="any" />
                <title>Admin</title>
            </head>
            <GlobalContext.Provider value={{ isOpen, toggleMenu }}>
                <body className='bg-gray-50 dark:bg-gray-800 scrollbar scrollbar-w-3 scrollbar-thumb-rounded-[0.25rem] scrollbar-track-slate-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-700'>
                    <SideBar />
                    <NavBar/>
                    <div className="flex pt-16 overflow-hidden bg-gray-50 ">
                        <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64  min-h-screen">
                            {children}
                            <Footer/>
                        </div>
                    </div>      
                </body>
            </GlobalContext.Provider>
        </html>
    )
}
