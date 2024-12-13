import 'animate.css';
var host = window.location.protocol + "//" + window.location.host;
import axios from 'axios';
window.axios = axios;
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
var polipop_error = new Polipop('mypolipop', {
  layout: 'popups',
  pool: 3,
  life: 3000,
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
