import { FileFormatter } from "../interfaces/FileFormat";

enum iconForFileType {
    xlsx = 'file-excel',
    jpeg = 'file-image',
    folder = 'folder',
    file = 'file',
    pdf = 'file-pdf',
    doc = 'file-word',
};

export class FileAndFolderList {
    data!: Array<FileFormatter>;
    constructor() {
        this.data = this.setData()
    }
    private setData(): Array<FileFormatter> {
        let dataInStorage = localStorage.getItem('fileListData')
        if (dataInStorage) {
            return JSON.parse(dataInStorage)
        }
        return []
    }

    public showListForTable() {
        let tbody: any = document.getElementById('tbodyDataFileList');
        let _tr = ''

        this.data.forEach(element => {
            let icon
            if (element.extension === 'xlsx') icon = iconForFileType.xlsx
            else if (element.extension === 'doc' || element.extension === 'docx') icon = iconForFileType.doc
            else if (element.extension === 'jpg' || element.extension === 'jpeg' || element.extension === 'png') icon = iconForFileType.jpeg
            else if (element.extension === 'pdf') icon = iconForFileType.pdf
            else if (element.extension === '') icon = iconForFileType.folder
            else icon = iconForFileType.file
            _tr += `
            <tr id="${element.id}">
                <td data-label="File Type"><i class="fa-solid fa-${icon}"></i></td>
                <td data-label="Name" class="row-data"><i class="fa-solid fa-ellipsis-vertical fa-2xs" id="editFileBtn" style="color: gray;"></i> ${element.name} </td>
                <td data-label="Modified At" class="row-data td-second">${element.modifiedAt}</td>
                <td data-label="Modified By" class="row-data td-second"> ${element.modifiedBy}</td>
                <td data-label="Created At" class="row-data td-second">${element.createAt}</td>
                <td data-label="Created By" class="row-data td-second"> ${element.createBy}</td>
                <td class="hidden-style"></td>
            </tr>
                `
        });        
        tbody.innerHTML = _tr;
    }

    public upload(file: FileFormatter): void {
        this.data.push(file);
        localStorage.setItem("fileListData", JSON.stringify(this.data))
        this.showListForTable();
    }

    public delete(id: string): void {
        let index = this.data.findIndex(function (obj){
            return obj.id == id;
        })

        this.data.splice(index, 1)
        let JSONdata = JSON.stringify(this.data);
        localStorage.setItem('fileListData', JSONdata)
        this.showListForTable();
    }

    public edit(id: string, name: string): void {
        let index = this.data.findIndex(function (obj){
            return obj.id == id;
        })
        this.data[0].name = name;
        
        // this.data.splice(index, 1)
        let JSONdata = JSON.stringify(this.data);
        localStorage.setItem('fileListData', JSONdata)
        this.showListForTable();
    }
} 