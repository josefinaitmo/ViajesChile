$(document).scroll(function(){
    const y = $("html").scrollTop();
    y > 300 ? $('nav').addClass("nav-black") : $("nav").removeClass
    ("nav-black")

})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
}); 