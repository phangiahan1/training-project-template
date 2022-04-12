import { FileFormatter } from '../interfaces/FileFormat';
export class File implements FileFormatter {
    id: number;
    name: string;
    extension: string;
    createAt: Date;
    createBy: string;
    modifiedAt: Date;
    modifiedBy: string;
    constructor(id: number, name: string, extension: string, createAt: Date, createBy: string, modifiedAt: Date, modifiedBy: string) {
        this.id = id;
        this.name = name;
        this.extension = extension;
        this.createAt = createAt;
        this.createBy = createBy;
        this.modifiedAt = modifiedAt;
        this.modifiedBy = modifiedBy;
    }
    upload(file: File): boolean {
        localStorage.setItem("fileUpload", JSON.stringify(file))
        console.log("Save thanh cong")
        return true
    }

    create(): boolean {
        throw new Error('Method not implemented.');
    }
    read(): globalThis.File {
        throw new Error('Method not implemented.');
    }
    update(): boolean {
        throw new Error('Method not implemented.');
    }
    delete(): boolean {
        throw new Error('Method not implemented.');
    }
}