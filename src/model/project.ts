export default class Project {
    id: number;
    name: string;
    description: string;
    status: string;
    createdDate: string;
    endDate: string;

    constructor(id: number, name: string, description: string, status: string, createdDate: string, endDate: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.createdDate = createdDate;
        this.endDate = endDate;
    }
}