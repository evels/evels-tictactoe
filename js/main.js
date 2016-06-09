$(document).ready(function() {

  //play game
  var players = ['X', 'O'];
  var turn = 0;
  $('.t3_grid td').on('click', function() {
    if(!$(this).hasClass('filled')) {
      var marker = (turn % 2 === 0) ? 0 : 1;
      $(this).addClass('filled');
      $('span', this).addClass('player' + players[marker]).append(players[marker]);
      turn++;
    }
    $('.reset').addClass('active');
  });

  //add another game
  $('.add').on('click', function(e) {
    e.preventDefault();
    $newGame.clone( true ).appendTo('body');
  });

  //reset a game
  $('.reset').on('click', function() {
    var $wrapper = $(this).parent();
    $('td', $wrapper).removeClass();
    $('span', $wrapper).removeClass().empty();
    $(this).removeClass('active');
  });

  //clone after event handlers are attached
  var $newGame = $('.game').clone( true );

});
