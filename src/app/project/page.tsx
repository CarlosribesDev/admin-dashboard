'use client'
import { Header } from '@/components/layaout'
import { CreateProjectModal } from '@/components/modal';
import { DataTable, TableActions } from '@/components/table'
import { PopupType, usePopup } from '@/hooks';
import { CreatedProject, Project } from '@/model';
import { ProjectService } from '@/service';
import { useEffect, useState } from 'react';
import { AiOutlineFundProjectionScreen } from "react-icons/ai"

const columns = [
    { title: 'Codigo', maxWidth: '70px' },
    { title: 'Nombre', maxWidth: '300px' },
    { title: 'Descripcion', maxWidth: '300px' },
    { title: 'Inicio', maxWidth: '100px' },
    { title: 'Finalizacion', maxWidth: '120px' },
    { title: 'Estado', maxWidth: '100px' },
];

export default function ProjectPage() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [project, setProject] = useState<Project | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { showPopup } = usePopup();

    const updateProjects = (): void => {
        ProjectService.getAll().then((res) => setProjects(res));
    };

    useEffect(() => { 
        updateProjects();
    }, [])


    const onAdd = () => { 
        setProject(null);
        setIsModalVisible(true);
    }

    const onEdit = (project: Project) => {
        setProject(project);
        setIsModalVisible(true);
    }

    const onDelete = (project: Project) => {
        showPopup(PopupType.WARNING, 'Borrar proyecto', `Se va a borrar el proyecto seleccionado: ${project.id}. ¿Desea continuar?`, () => {
            ProjectService.deleteById(project.id).then(() => {
                updateProjects();
                showPopup(PopupType.SUCCESS, 'Proyecto borrado', 'El proyecto se ha borrado correctamente');
            });
        });
    }

    const onRefresh = () => {
        updateProjects();
    }

    const onCloseModal = () => {
        setIsModalVisible(false);
    }

    const onSubmitCreate = (project: CreatedProject) => {
        ProjectService.create(project).then(() => {
            updateProjects();
            setIsModalVisible(false);
            showPopup(PopupType.SUCCESS, 'Proyecto creado', 'El proyecto se ha creado correctamente');
        });
    }

    const onSubmitEdit = (project: Project) => {
        ProjectService.update(project).then(() => {
            updateProjects();
            setIsModalVisible(false);
            showPopup(PopupType.SUCCESS, 'Proyecto actualizado', 'El proyecto se ha actualizado correctamente');
        });
    }

    return (
        <div>
            <div className="p-8 bg-color-1 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="w-full mb-1">
                    <Header title="Proyectos" iconHeader={AiOutlineFundProjectionScreen}/>
                    <TableActions modelName='Proyecto' onAdd={onAdd} onRefresh={onRefresh}/>
                    <CreateProjectModal isVisible={isModalVisible} onClose={onCloseModal} onSubmitCreate={onSubmitCreate} onSubmitEdit={onSubmitEdit} data={project}/>
                    <DataTable columns={columns} data={projects} onEdit={onEdit} onDelete={onDelete}/>
                </div>
            </div>
        </div>
    )
}
