import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import { showCreateForm, closeCreateForm } from '../components/_forms'
import { showUploadForm, closeUploadForm, uploadFile } from '../components/_forms';
import { FileAndFolderList } from '../models/FileAndFolderList'
ready(() => {
  renderGrid();

  //listManage
  let a = new FileAndFolderList()
  a.showListForTable()

  //upload form
  closeCreateForm();
  showCreateForm();

  //upload form
  closeUploadForm();
  showUploadForm();
  uploadFile(a);


});

