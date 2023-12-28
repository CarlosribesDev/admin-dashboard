'use client'

import { CreatedProject } from '@/model';
import React, { useState } from 'react'

export default function CreateProjectModal({isVisible, onClose, onSubmit }: {isVisible: boolean, onClose: () => void, onSubmit: (project: CreatedProject) => void}) {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectName(e.target.value);
    };
    
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectDescription(e.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newProject = new CreatedProject(projectName, projectDescription);
        onSubmit(newProject);
    };

    return (
        <>
            <div className={`fixed inset-0 z-50 h-100 w-100 bg-black opacity-50 ${isVisible ? 'block' : 'hidden'}`}/>
            <div className={`flex items-center justify-center ${isVisible ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow ">
                        <header className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 className="text-lg font-semibold text-gray-900 ">
                                Crear Proyecto
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={onClose}>
                                <b className='text-2xl'>x</b> 
                            </button>
                        </header>
                        <form className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                                    <input 
                                        type="text" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" 
                                        placeholder="Type product name"
                                        value={projectName}
                                        onChange={handleNameChange}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Descripcion</label>
                                    <input 
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5" 
                                        placeholder="Type product name"
                                        value={projectDescription}
                                        onChange={handleDescriptionChange}
                                    />
                                </div>                             
                            </div>
                            <div className='flex justify-between mt-6'>
                                <button type="submit" className="button-1" onClick={handleFormSubmit}>
                                    Crear
                                </button>
                                <button type="submit" className="button-2" onClick={onClose}>
                                    Cancelar
                                </button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
