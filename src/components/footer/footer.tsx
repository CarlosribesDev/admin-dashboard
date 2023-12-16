import React from 'react'
import FooterLink from './footerLink.interface'

const footerLinks: FooterLink[] = [
    {
        tittle: 'Terms and conditions',
        url: '#',
    },
    {
        tittle: 'Privacy Policy',
        url: '#',
    },
    {
        tittle: 'Licensing',
        url: '#',
    },
    {
        tittle: 'Cookie Policy',
        url: '#',
    },
    {
        tittle: 'Contact',
        url: '#',
    },
]

export default function Footer() {
    return (
        <>
            <footer className="p-4 my-6 mx-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8 dark:bg-gray-800">
                <ul className="flex flex-wrap items-center mb-6 space-y-1 md:mb-0">
                    {footerLinks.map((item: FooterLink) => (
                        <li key={item.url}>
                            <a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">{item.tittle}</a>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-center text-gray-500">
                    © 2019 - 2023 —
                    <a href="https://random.com/" className="hover:underline" target="_blank">Random.com</a>. All rights reserved.
                </p>  
            </footer>      
        </>
    )
}
