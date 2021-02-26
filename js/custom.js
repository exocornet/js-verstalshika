$(function () {

  /* ПЛАВНЫЙ СКРОЛЛ
  * ================*/
  $('#js-get-started').on('click', function (e) {

    e.preventDefault();

    var plansOffset = $('#js-plans').offset().top;

    $('html, body').animate({
      scrollTop: plansOffset
    }, 1000);

  });

  /* ФИКСИРОВАННОЕ МЕНЮ
  * ===================*/
  var headerH = $('#js-header').height(),
      navH = $('#js-nav-container').innerHeight();

  $(document).on('scroll', function(){

    var documentScroll = $(this).scrollTop();

    if(documentScroll > headerH) {
      $('#js-nav-container').addClass('fixed');

      // $('#js-header').css('paddingTop', navH); - если нужно добавить один стиль
      $('#js-header').css({
        'paddingTop': navH,
        'color': 'red'
      });
    } else {
      $('#js-nav-container').removeClass('fixed');
      $('#js-header').removeAttr('style');
    }
  });



});