//create form
import { File } from '../models/file';
import { FileAndFolderList } from '../models/FileAndFolderList'
import { Folder } from '../models/folder';
const { v4: uuidv4 } = require('uuid');
let idRow: string;

export function showCreateForm() {
    const createBtn = document.getElementById("createFormBtn");
    if (createBtn) {
        createBtn.addEventListener("click", function () {
            document.getElementById('formCreateFolder')!.style.display = 'block';
            (document.getElementById('createFormButton') as HTMLButtonElement).disabled = true;
        }, true)
    }
}

export function closeCreateForm() {
    const createBtnClose = document.getElementById("closeCreateFormBtn");
    if (createBtnClose) {
        createBtnClose.addEventListener("click", function () {
            document.getElementById('formCreateFolder')!.style.display = 'none';
        }, true)
    }
}

export function createFile(a: FileAndFolderList) {
    const createBtn = document.getElementById("createFormButton");
    let dateTime = new Date()
    if (createBtn) {
        createBtn.addEventListener("click", function () {
            let uploadFileName = (document.getElementById('createFormInput') as HTMLInputElement);
            if (uploadFileName) {
                console.log(uploadFileName);
                const element = uploadFileName;
                const newFile = new Folder(uuidv4() as string, uploadFileName.value, '', dateTime, "Admin", dateTime, "Admin")
                a.upload(newFile)
                document.getElementById('formCreateFolder')!.style.display = 'none';
            }
        }, true)
    }
}

//upload form
export function showUploadForm() {
    const uploadBtn = document.getElementById("uploadFormBtn");
    if (uploadBtn) {
        uploadBtn.addEventListener("click", function () {
            document.getElementById('formUploadFolder')!.style.display = 'block';
            (document.getElementById('uploadFormButton') as HTMLButtonElement).disabled = true;
        }, true)
    }
}

export function closeUploadForm() {
    const uploadBtn = document.getElementById("closeUploadFormBtn");
    if (uploadBtn) {
        uploadBtn.addEventListener("click", function () {
            document.getElementById('formUploadFolder')!.style.display = 'none';
        }, true)
    }
}

function getExtension(fileName: string) {
    const [file, extesion] = fileName.split(".");
    return extesion;
}
export function uploadFile(a: FileAndFolderList) {
    const uploadBtn = document.getElementById("uploadFormButton");
    let dateTime = new Date()
    if (uploadBtn) {
        uploadBtn.addEventListener("click", function () {
            let uploadFileName = (document.getElementById('uploadFormInput') as HTMLInputElement).files;
            if (uploadFileName) {
                console.log(uploadFileName);
                for (let index = 0; index < uploadFileName.length; index++) {
                    const element = uploadFileName[index];
                    const newFile = new File(uuidv4() as string, element.name, getExtension(element.name), dateTime, "Admin", dateTime, "Admin")
                    a.upload(newFile)
                    document.getElementById('formUploadFolder')!.style.display = 'none';
                }
            }
        }, true)
    }
}

//update form
export function showUpdateForm() {
    const updateBtn = document.getElementById("editFileBtn");
    if (updateBtn) {
        updateBtn.addEventListener("click", function (e) {
            var tmp: any
            tmp = e.target
            tmp = tmp.parentNode.parentNode.id
            console.log(tmp);

            var rowId = tmp;
            idRow = rowId;
            var data = document.getElementById(rowId)!.querySelectorAll(".row-data");
            var nameFile = data[0].innerHTML.split("</i>")
            var name = nameFile[1].trim().split(".")
            document.getElementById('formUpdateFolder')!.style.display = 'block';
            (document.getElementById('updateFormInput') as HTMLInputElement).value = name[0]
        }, true)
    }
}

export function closeUpdateForm() {
    const uploadBtn = document.getElementById("closeUpdateFormBtn");
    if (uploadBtn) {
        uploadBtn.addEventListener("click", function () {
            document.getElementById('formUpdateFolder')!.style.display = 'none';
        }, true)
    }
}

export function updateFile(a: FileAndFolderList) {
    const updateBtn = document.getElementById("updateFormButton");
    const input = document.querySelector("#updateFormInput");
    let dateTime = new Date()
    if (updateBtn) {
        updateBtn.addEventListener("click", function () {
            if (input && idRow)
                a.edit(idRow, (input as HTMLInputElement).value)
            location.reload();
            document.getElementById('formUpdateFolder')!.style.display = 'none';
        }, true)
    }
}

export function deleteFile(a: FileAndFolderList) {
    const deleteBtn = document.getElementById("deleteFormButton");
    let dateTime = new Date()
    if (deleteBtn) {
        deleteBtn.addEventListener("click", function () {
            if (idRow)
                a.delete(idRow)
            location.reload();
            document.getElementById('formUpdateFolder')!.style.display = 'none';
        }, true)
    }
}