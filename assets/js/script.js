// ANCORA SUAVE
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    var target = $(this.hash);

    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top }, 900);
      return false;
    }
  });
});
// FIM ANCORA SUAVE

// GOOGLE ANALYTICS
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-D5WYYPW6GE');
// FIM GOOGLE ANALYTICS
