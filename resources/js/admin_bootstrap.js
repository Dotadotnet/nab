
var host = window.location.protocol + "//" + window.location.host;
import axios from 'axios';
window.axios = axios;
import 'animate.css';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import * as FilePond from "filepond";
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageFilter from 'filepond-plugin-image-filter';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import SortableMin from 'sortablejs';
window.Sortable = SortableMin;
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    let node = document.querySelector(element);
    if (!(typeof element == 'string')) {
      node = element;
    }
    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }
    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });

// Get a reference to the file input elemen

FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageCrop,
  FilePondPluginImageFilter,
  FilePondPluginImageEdit
);

window.FilePond = FilePond;

var polipop_error = new Polipop('mypolipop', {
  layout: 'popups',
  pool: 4,
  life: 10000,
});
if (errors) {
  if (errors == 'successful') {
    polipop_error.add({
      content: 'پروسه با موفقیت انجام شد',
      title: 'تبریک',
      type: 'success',
    });
  } else if (Array.isArray(errors)) {
    errors.forEach(error => {
      polipop_error.add({
        content: error,
        title: 'مقادیر وارد شده صحیح نمی باشد !!!',
        type: 'error',
      });
    });
  }
}





import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
if (document.querySelector('.document-editor__editable')) {
  window.onload = () => {
    const current_url = window.location.href;
    if (current_url.includes('/blog')) {
      DecoupledEditor
        .create(document.querySelector('.document-editor__editable'), {
          // plugins: [ Image ],
          toolbar: {
            shouldNotGroupWhenFull: true
          },
          ckfinder : {
            uploadUrl : '/panel/upload/file/ckeditor'
          }
        })
        .then(editor => {
          const toolbarContainer = document.querySelector('.document-editor__toolbar');
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          document.querySelector('textarea[name="caption"]').value = editor.getData();
          editor.model.document.on('change', () => {
            document.querySelector('textarea[name="caption"]').value = editor.getData();
          });

        })
        .catch(err => {
          console.error(err);
        });
    } else if (current_url.includes('/product') || current_url.includes('/event')) {
      DecoupledEditor
        .create(document.querySelector('.document-editor__editable'), {
          toolbar: {
            items: ['undo', 'redo', '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'strikethrough', '|', 'link', 'blockQuote', 'alignment', '|', 'insertTable', '|', 'bulletedList', 'numberedList', '|', 'outdent', 'indent'],
            shouldNotGroupWhenFull: true
          },
        })
        .then(editor => {
          const toolbarContainer = document.querySelector('.document-editor__toolbar');

          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          document.querySelector('textarea[name="caption"]').value = editor.getData();
          editor.model.document.on('change', () => {
            document.querySelector('textarea[name="caption"]').value = editor.getData();
          });

        })
        .catch(err => {
          console.error(err);
        });
    }

  }
}

const show_comment = document.querySelector('span.comment-show');
const ReloadComment = () => {
  window.axios({
    method: 'get',
    url: window.location.protocol + "//" + window.location.host + '/' +
      'api/comment/status/0',
  }).then(function (response) {
    let all = response.data;
    show_comment.innerHTML = all.length;
  })
}
window.ReloadComment = ReloadComment;