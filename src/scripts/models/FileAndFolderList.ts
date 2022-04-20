import { showUpdateForm } from "../components/_forms";
import { FileFormatter } from "../interfaces/FileFormat";
const axios = require('axios');


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
        let index = 0;
        this.data.forEach(element => {
            let icon
            if (element.extension === 'xlsx') icon = iconForFileType.xlsx
            else if (element.extension === 'doc' || element.extension === 'docx') icon = iconForFileType.doc
            else if (element.extension === 'jpg' || element.extension === 'jpeg' || element.extension === 'png') icon = iconForFileType.jpeg
            else if (element.extension === 'pdf') icon = iconForFileType.pdf
            else if (element.extension === '') icon = iconForFileType.folder
            else icon = iconForFileType.file
            _tr += `
            <tr id="${element.FileId}">
                <td data-label="File Type"><i class="fa-solid fa-${icon}"></i></td>
                <td data-label="Name" class="row-data"><i class="fa-solid fa-pen fa-2xs" id="editFileBtn-${index}" style="color: gray;"></i><span class="new-item"><i
                class="fa-brands fa-yelp"></i></span> ${element.name} </td>
                <td data-label="Modified At" class="row-data td-second">${element.modifiedAt}</td>
                <td data-label="Modified By" class="row-data td-second"> ${element.modifiedBy}</td>
                <td data-label="Created At" class="row-data td-second">${element.createAt}</td>
                <td data-label="Created By" class="row-data td-second"> ${element.createBy}</td>
                <td class="hidden-style"></td>
            </tr>
                `
            index++;
        });
        tbody.innerHTML = _tr;
        setTimeout(showUpdateForm, 1)
    }

    public upload(file: FileFormatter): void {
        this.data.push(file);
        console.log(file);
        
        localStorage.setItem("fileListData", JSON.stringify(this.data))
        axios.post('https://localhost:44331/api/Files', file)
          .then(function (response: any) {
            console.log(response);
          })
          .catch(function (error: any) {
            console.log(error);
          });
        
        this.showListForTable();
    }

    public delete(id: string): void {
        let index = this.data.findIndex(function (obj) {
            return obj.FileId == id;
        })

        this.data.splice(index, 1)
        let JSONdata = JSON.stringify(this.data);
        localStorage.setItem('fileListData', JSONdata)
        this.showListForTable();
    }

    public edit(id: string, name: string): void {
        let index = this.data.findIndex(function (obj) {
            return obj.FileId == id;
        })
        if (this.data[index].extension) {
            this.data[index].name = name + '.' + this.data[index].extension;
        } else
            this.data[index].name

        this.data[index].modifiedBy = 'Gia Han'
        this.data[index].modifiedAt = new Date();

        // this.data.splice(index, 1)
        let JSONdata = JSON.stringify(this.data);
        localStorage.setItem('fileListData', JSONdata)
        this.showListForTable();
    }
} 