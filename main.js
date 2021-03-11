$(document).ready(function() {
  dx();
  sx();
});


function dx(){
  var frecciaDx = $('.fa-angle-right');


  frecciaDx.click(function() {
    var foto = $('img.active');
    var pallino = $('i.active');

    if (foto.hasClass('last')) {
      var fotoDx = $('img.first');
      var pallinoDx = $('i.first');
    } else {
      var fotoDx = foto.next('img');
      var pallinoDx = pallino.next('i');

    }

    fotoDx.addClass('active');
    foto.removeClass('active');

    pallinoDx.addClass('active');
    pallino.removeClass('active');
  });
};


function sx() {
  var frecciaSx = $('.fa-angle-left');

  frecciaSx.click(function() {
    var foto = $('img.active');
    var pallino = $('i.active');

    if (foto.hasClass('first')) {
      var fotoSx = $('img.last');
      var pallinoSx = $('i.last');
    } else {
      var fotoSx = foto.prev('img');
      var pallinoSx = pallino.prev('i');

    }

    fotoSx.addClass('active');
    foto.removeClass('active');

    pallinoSx.addClass('active');
    pallino.removeClass('active');
  });




}
