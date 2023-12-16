import React from 'react'
import Image from 'next/image'

export default function MenuIcon() {
    return (
        <a href="/" className="flex items-center ml-2 md:mr-24">
            <Image src="/nodejs.png" width="30" height="30" className="h-8 mr-3" alt="Logo empresa"/>
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Nombre empresa</span>
        </a>
    )
}
