import { DataTable, Header, TableActions } from '@/components'
import React from 'react'
import { AiOutlineFundProjectionScreen } from "react-icons/ai"


export default function ProjectPage() {
    return (
        <div>
            <div className="p-8 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                    <Header title="Proyectos" iconHeader={AiOutlineFundProjectionScreen}/>
                    <TableActions/>
                    <DataTable/>
                </div>
            </div>
        </div>
    )
}
