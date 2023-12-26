'use client'
import { Header } from '@/components/layaout'
import { CreateProjectModal } from '@/components/modal';
import { DataTable, TableActions } from '@/components/table'
import { useState } from 'react';
import { AiOutlineFundProjectionScreen } from "react-icons/ai"


const headers = [
    'Codigo', 'Nombre', 'Descripcion', 'Fecha de inicio', 'Fecha de finalizacion', 'Estado'
];

const data = [
    {
        id: 1,
        name: 'Project 1',
        description: 'Description 1',
        startDate: '2021-08-01',
        endDate: null,
        status: 'Activo',
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Description 2',
        startDate: '2021-08-01',
        endDate: null,
        status: 'Activo',
    },
    {
        id: 3,
        name: 'Project 3',
        description: 'Description 3',
        startDate: '2021-08-01',
        endDate: null,
        status: 'Activo',
    },
    {
        id: 4,
        name: 'Project 4',
        description: 'Description 4',
        startDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    },
    {
        id: 5,
        name: 'Project 5',
        description: 'Description 5',
        startDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    },
    {
        id: 6,
        name: 'Project 6',
        description: 'Description 6',
        startDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    },
    {
        id: 7,
        name: 'Project 7',
        description: 'Description 7',
        startDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    },
    {
        id: 8,
        name: 'Project 8',
        description: 'Description 8',
        startDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    },
    {
        id: 9,
        name: 'Project 9',
        description: 'Description 9',
        startDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    }
]


export default function ProjectPage() {

    const onAdd = () => {
        console.log('crear proyecto');
        setIsModalVisible(true);
    }

    const onRefresh = () => {
        console.log('refrescar proyectos');
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const onCloseModal = () => {
        setIsModalVisible(false);
    }


    return (
        <div>
            <div className="p-8 bg-color-1 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="w-full mb-1">
                    <Header title="Proyectos" iconHeader={AiOutlineFundProjectionScreen}/>
                    <TableActions modelName='Proyecto' onAdd={onAdd} onRefresh={onRefresh}/>
                    <CreateProjectModal isVisible={isModalVisible} onClose={onCloseModal}/>
                    <DataTable headers={headers} data={data}/>
                </div>
            </div>
        </div>
    )
}
