$(function() {
  let app = document.createTextNode('lorem ipsum ');
  for (let i = 0; i < 600; i++) {
    app += 'lorem ipsum '
  }
  $('.link-wrapper, #abc, #def, #ghi').after(app);

  $("a[href^='#']").click(function() {
    const speed = 400;
    const href=$(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html': href);
    const position = target.offset().top;
    $('body, html').animate({scrollTop: position}, speed, 'swing');
    return false;
  });
});