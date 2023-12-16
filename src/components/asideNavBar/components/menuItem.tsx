import React from 'react'
import MenuItem from '../interfaces/menuItem.interface'


export default function MenuItem(item: MenuItem) {
    return (
        <li>
            <a href={item.route} className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                <item.icon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500"/>
                <span className="ml-3">{item.title}</span>
            </a>
        </li>
    )
}
