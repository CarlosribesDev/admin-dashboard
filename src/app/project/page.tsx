'use client'
import { Header } from '@/components/layaout'
import { CreateProjectModal } from '@/components/modal';
import { DataTable, TableActions } from '@/components/table'
import { CreatedProject, Project } from '@/model';
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

export default function ProjectPage() {

    const [projects, setProjects] = useState<Project[]>([]);

    const updateProjects = (): void => {
        ProjectService.getAll().then((res) => setProjects(res));
    };

    useEffect(() => { 
        updateProjects();
    }, [])


    const onAdd = () => {
        console.log('crear proyecto');
        setIsModalVisible(true);
    }

    const onRefresh = () => {
        updateProjects();
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const onCloseModal = () => {
        setIsModalVisible(false);
    }

    const onSubmit = (project: CreatedProject) => {
        ProjectService.create(project).then(() => {
            updateProjects();
            setIsModalVisible(false);
        });
    }

    return (
        <div>
            <div className="p-8 bg-color-1 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="w-full mb-1">
                    <Header title="Proyectos" iconHeader={AiOutlineFundProjectionScreen}/>
                    <TableActions modelName='Proyecto' onAdd={onAdd} onRefresh={onRefresh}/>
                    <CreateProjectModal isVisible={isModalVisible} onClose={onCloseModal} onSubmit={onSubmit}/>
                    <DataTable columns={columns} data={projects}/>
                </div>
            </div>
        </div>
    )
}
