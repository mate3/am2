import autosize from 'autosize';

const textarea = document.querySelector('.js-resize-textarea');

textarea.addEventListener('focus', function(){
  autosize(textarea);
});