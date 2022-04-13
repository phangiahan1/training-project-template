import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import { showCreateForm, closeCreateForm, createFile } from '../components/_forms'
import { showUploadForm, closeUploadForm, uploadFile } from '../components/_forms';
import { showUpdateForm, closeUpdateForm, updateFile, deleteFile } from '../components/_forms';
import { FileAndFolderList } from '../models/FileAndFolderList'

ready(() => {
  renderGrid();

  //listManage
  let a = new FileAndFolderList()
  a.showListForTable()

  //create form
  closeCreateForm();
  showCreateForm();
  createFile(a);
  

  //upload form
  closeUploadForm();
  showUploadForm();
  uploadFile(a);

  //update form
  closeUpdateForm()
  showUpdateForm()
  updateFile(a)
  deleteFile(a)
});

