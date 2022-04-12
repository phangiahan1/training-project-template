//create form
import { File } from '../models/file';
import { FileAndFolderList} from '../models/FileAndFolderList'

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
                    const newFile = new File(0, element.name, getExtension(element.name), dateTime, "Admin", dateTime, "Admin")
                    a.upload(newFile)
                    document.getElementById('formUploadFolder')!.style.display = 'none';
                }
            }
        }, true)
    }
}