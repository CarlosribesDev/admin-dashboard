import type { Metadata } from 'next'
import AsideNavBar from '@/components/asideNavBar/asideNavBar'
import './globals.css'
import NavBar from '@/components/navBar/navBar'


export const metadata: Metadata = {
    title: 'Admin Dashboard',
    description: 'Generated by create next app',
    icons: '/favicon.ico',
    
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/nodejs.png" sizes="any" />
            </head>
            <body className='bg-gray-50 dark:bg-gray-800 scrollbar scrollbar-w-3 scrollbar-thumb-rounded-[0.25rem] scrollbar-track-slate-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-700'>
                <AsideNavBar />
                <NavBar/>
                <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>
                <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 min-h-screen">
                        {children}
                    </div>
                </div>    
            </body>
        </html>
    )
}
