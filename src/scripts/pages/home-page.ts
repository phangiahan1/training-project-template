import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import {showCreateForm, closeCreateForm} from '../components/_forms'
import {showUploadForm, closeUploadForm} from '../components/_forms';

ready(() => {
  renderGrid();

  //upload form
  closeCreateForm();
  showCreateForm();

  //upload form
  closeUploadForm();
  showUploadForm();
});

