import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

interface DataTableProps {
    headers: string[];
    data: any[];
}

export default function dataTable({ headers, data }: DataTableProps) {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {header}
                        </th>
                    ))}
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, i) => (
                            <td key={i} className="px-6 py-4 whitespace-nowrap">
                                {String(value)}
                            </td>
                        ))}
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button className="bg-blue-500 text-white px-2 py-1 rounded inline-flex items-center mr-2">
                                <FaEdit className="mr-1" />
                                Editar
                            </button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded inline-flex items-center">
                                <FaTrash className="mr-1" />
                                Borrar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
