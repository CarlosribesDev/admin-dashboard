import { PopupType, usePopup } from '@/hooks';
import React from 'react'
import { IconType } from 'react-icons'
import { FaCheckCircle,FaInfoCircle  } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { MdOutlineError } from "react-icons/md";


const iconMap = new Map<PopupType, IconType>([
    [PopupType.SUCCESS, FaCheckCircle],
    [PopupType.INFO, FaInfoCircle],
    [PopupType.WARNING, IoIosWarning],
    [PopupType.ERROR, MdOutlineError],
]);

const colorMap = new Map<PopupType, string>([
    [PopupType.SUCCESS, 'text-green-500'],
    [PopupType.INFO, 'text-blue-500'],
    [PopupType.WARNING, 'text-yellow-500'],
    [PopupType.ERROR, 'text-red-500'],
]);

export const Popup = () => {
    const { popup, hidePopup } = usePopup();

    if (!popup) return null;

    const Icon = iconMap.get(popup.type) || FaInfoCircle;
    const iconColorClass = colorMap.get(popup.type) || 'text-blue-500';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50" onClick={hidePopup}></div>
            <div className="bg-white p-5 rounded-lg shadow-xl z-50">
                <header className='flex flex-row justify-between items-center w-full mb-4 border-b-2'>
                    <h2 className="text-2xl font-semibold pb-2">{popup.title} </h2>
                    <Icon className={`w-8 h-8 pb-2 ${iconColorClass}`} />
                </header>
                <p className="mb-4">{popup.message}</p>
                <div className="flex justify-center">
                    <button 
                        onClick={hidePopup} 
                        className="button-1"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
}

