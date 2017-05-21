document.addEventListener('DOMContentLoaded', function() {
  Array.prototype.slice.call(document.getElementsByClassName('tag-or-year')).forEach(function(element) {
    element.addEventListener('click', function() {
      element.classList.toggle('show');
    });
  });
});
