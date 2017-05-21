document.addEventListener('DOMContentLoaded', function() {
  var links = document.getElementsByClassName('links')[0]; 
  var expander = document.getElementsByClassName('expander')[0];
  expander.addEventListener('click', function (e) {
      e.currentTarget.classList.toggle('closed');
      e.currentTarget.classList.toggle('open');
      links.classList.toggle('closed')
      links.classList.toggle('open');
  });
});
