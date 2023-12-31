'use client'
import React, { useContext } from 'react'
import MenuItem from './components/menuItem'
import { FaHome } from 'react-icons/fa';
import { IoIosSettings } from "react-icons/io";
import { GiElectric } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { FcSupport } from "react-icons/fc";
import { IconType } from 'react-icons';
import { GlobalContext } from '@/context/globalContex';

interface MenuItemData {
    route: string,
    title: string,
    icon: IconType,
}

const menuItems: MenuItemData[] = [
    {route: '/', title: 'Home', icon: FaHome},
    {route: '/project', title: 'Proyectos', icon: AiOutlineFundProjectionScreen},
    {route: '/mechanic', title: 'Mecanismos', icon: IoIosSettings },
    {route: '/bombs', title: 'Bombas', icon: GiElectric},
]

const menuItems2: MenuItemData[] = [
    {route: '/support', title: 'Support', icon: FcSupport},
]

export default function SideNavBar() {

    const { isOpen, toggleMenu } = useContext(GlobalContext);

    return (
        <aside id="sidebar" className={`fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 transition-width ${isOpen ? 'block' : 'hidden'} lg:flex`} aria-label="Sidebar">
            <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 ">
                <div className="flex flex-col flex-1 pt-5 pb-28 overflow-y-auto scrollbar scrollbar-w-2 scrollbar-thumb-rounded-[0.1667rem] scrollbar-thumb-slate-200 scrollbar-track-gray-400">
                    <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200">
                        <ul className="pb-2 space-y-2">
                            {menuItems.map((item: MenuItemData) => (
                                <MenuItem key={item.route} route={item.route} title={item.title} icon={item.icon}/>
                            ))}
                        </ul>                     
                        <ul className="pt-2 space-y-2">
                            {menuItems2.map((item: MenuItemData) => (
                                <MenuItem key={item.route} route={item.route} title={item.title} icon={item.icon}/>
                            ))}
                        </ul>                       
                    </div>
                </div>
            </div>
        </aside>
    )
}
