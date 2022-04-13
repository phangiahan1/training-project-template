import { FileFormatter } from '../interfaces/FileFormat';
export class File implements FileFormatter {
    id: string;
    name: string;
    extension: string;
    createAt: Date;
    createBy: string;
    modifiedAt: Date;
    modifiedBy: string;
    constructor(id: string, name: string, extension: string, createAt: Date, createBy: string, modifiedAt: Date, modifiedBy: string) {
        this.id = id;
        this.name = name;
        this.extension = extension;
        this.createAt = createAt;
        this.createBy = createBy;
        this.modifiedAt = modifiedAt;
        this.modifiedBy = modifiedBy;
    }
}