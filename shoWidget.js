const widget = document.querySelector('.widget');
const widgetMail = document.querySelector('#widget-mail');
const widgetPhone = document.querySelector('#widget-phone');
const widgetCv = document.querySelector('#widget-cv');
const contentMail = document.querySelector('.content-mail');
const contentPhone = document.querySelector('.content-phone');
const contentCv = document.querySelector('.content-cv');

// function shoWidget() {
widget.addEventListener('click', function() {
  widgetMail.classList.toggle("show-widget");
  widgetPhone.classList.toggle("show-widget");
  widgetCv.classList.toggle("show-widget");
  contentMail.classList.toggle("show-content");
  contentPhone.classList.toggle("show-content");
  contentCv.classList.toggle("show-content");
});
// };

// shoWidget();

// widgetMail.addEventListener('mouseover', function() {
//   hello.classList.toggle("show-content");
// });
