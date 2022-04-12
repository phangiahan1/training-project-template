//create form
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