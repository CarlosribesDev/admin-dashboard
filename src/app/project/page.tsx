'use client'
import { Header } from '@/components/layaout'
import { CreateProjectModal } from '@/components/modal';
import { DataTable, TableActions } from '@/components/table'
import { Project } from '@/model';
import { ProjectService } from '@/service';
import { useEffect, useState } from 'react';
import { AiOutlineFundProjectionScreen } from "react-icons/ai"


const columns = [
    { title: 'Codigo', maxWidth: '70px' },
    { title: 'Nombre', maxWidth: '200px' },
    { title: 'Descripcion', maxWidth: '300px' },
    { title: 'Fecha de inicio', maxWidth: '100px' },
    { title: 'Fecha de finalizacion', maxWidth: '100px' },
    { title: 'Estado', maxWidth: '100px' },
];

const data: Project[] = [
    {
        id: 1,
        name: 'Project 1',
        description: 'Description 1',
        createdDate: '2021-08-01',
        endDate: '',
        status: 'Activo',
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Description 2',
        createdDate: '2021-08-01',
        endDate: '',
        status: 'Activo',
    },
    {
        id: 3,
        name: 'Project 3',
        description: 'Description 3',
        createdDate: '2021-08-01',
        endDate: '',
        status: 'Activo',
    },
    {
        id: 4,
        name: 'Project 4',
        description: 'Description 4',
        createdDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    },
    {
        id: 5,
        name: 'Project 5',
        description: 'Description 5',
        createdDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    },
    {
        id: 6,
        name: 'Project 6',
        description: 'Description 6',
        createdDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    },
    {
        id: 7,
        name: 'Project 7',
        description: 'Description 7',
        createdDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    },
    {
        id: 8,
        name: 'Project 8',
        description: 'Description 8',
        createdDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    },
    {
        id: 9,
        name: 'Project 9',
        description: 'Description 9',
        createdDate: '2021-08-01',
        endDate: '2021-08-01',
        status: 'Activo',
    }
]


export default function ProjectPage() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => { 
        ProjectService.getAll().then((res) => {
            console.log(res);
            setProjects(res);
        });
    }, [])


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
                    <DataTable columns={columns} data={projects}/>
                </div>
            </div>
        </div>
    )
}
