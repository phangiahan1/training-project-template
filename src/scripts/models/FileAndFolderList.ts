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
        let a = this.setData()
        this.data = a
    }
    public setData(): Array<FileFormatter> {
        //let dataInStorage = localStorage.getItem('fileListData')
        //console.log("setData ne nhen t vo r a");
        axios.get('https://localhost:44331/api/Files')
            .then(function (response: any) {
                // handle success
                //console.log("response");
                //console.log(response.data);
                return response.data;
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
        return []
    }

    public getData() {
        //console.log("Han han get data");
        const a = this.data
        return a;
    }

    public showListForTable() {
        let tbody: any = document.getElementById('tbodyDataFileList');
        let _tr = ''
        let index = 0;
        let t = new Array<FileFormatter>()

        axios.get('https://localhost:44331/api/Files')
            .then((response: any) => {
                // handle success
                this.data = response.data
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
                console.log("Show table success");
                t = this.data
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
            .then(function () {
                showUpdateForm(t);
            });
    }

    public upload(file: FileFormatter): void {
        this.data.push(file);

        //localStorage.setItem("fileListData", JSON.stringify(this.data))
        axios.post('https://localhost:44331/api/Files', file)
            .then(function (response: any) {
                //console.log("Da thanh cong: response");
                //console.log(response);
                window.location.reload()
            })
            .catch(function (error: any) {
                console.log(error);
            });
        this.showListForTable()
    }

    public delete(id: string): void {
        // let index = this.data.findIndex(function (obj) {
        //     return obj.FileId == id;
        // })

        // this.data.splice(index, 1)
        // let JSONdata = JSON.stringify(this.data);
        // localStorage.setItem('fileListData', JSONdata)
        console.log("id");
        console.log(id);

        axios.delete('https://localhost:44331/api/Files/' + id).then(function () {
            // always executed
            console.log("delete success");

        });
        this.showListForTable();
    }

    public edit(id: string, name: string): void {
        console.log(name);
        console.log(id);

        let newFile: FileFormatter

        axios.get('https://localhost:44331/api/Files/' + id)
            .then(function (response: any) {
                //console.log("Da thanh cong: response");
                console.log(response)
                newFile = response.data
                newFile.name = name
                newFile.modifiedAt = new Date()
            })
            .then(function () {
                axios.put('https://localhost:44331/api/Files/' + id, newFile)
                    .then(function (response: any) {
                        //console.log("Da thanh cong: response");
                        console.log("update thanh cong");
                        window.location.reload();
                    })
                    .catch(function (error: any) {
                        console.log(error);
                    });
            })
            .catch(function (error: any) {
                console.log(error);
            })
    }
} 