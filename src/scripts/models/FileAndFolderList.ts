import { FileFormatter } from "../interfaces/FileFormat";

enum iconForFileType {
    xlsx = 'file-excel',
    jpeg  = 'file-image',
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

        for (const element of this.data) {
            let icon
            if (element.extension === 'xlsx') icon = iconForFileType.xlsx
            else if (element.extension === 'doc' || element.extension === 'docx') icon = iconForFileType.doc
            else if (element.extension === 'jpg' || element.extension === 'jpeg' || element.extension === 'png') icon = iconForFileType.jpeg
            else if (element.extension === 'pdf') icon = iconForFileType.pdf
            else if (element.extension === '') icon = iconForFileType.folder
            else icon = iconForFileType.file
            _tr += `
            <tr>
                <td data-label="File Type"><i class="fa-solid fa-${icon}"></i></td>
                <td data-label="Name" id="editFileForm"> ${element.name} <i class="fa-solid fa-ellipsis-vertical fa-2xs" style="float: right; color: gray;"></i></td>
                <td data-label="Modified" class="td-second">${element.modifiedAt}</td>
                <td data-label="Modified By" class="td-second"> ${element.modifiedBy}</td>
                <td class="hidden-style"></td>
            </tr>
                `
        }
        tbody.innerHTML = _tr;
    }

    public upload(file: FileFormatter): void {
        this.data.push(file);
        localStorage.setItem("fileListData", JSON.stringify(this.data))
        this.showListForTable();
    }
} 