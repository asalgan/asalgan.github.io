$(document).ready(function() { 
  console.log('hey')

	$.fn.followTo = function (pos) {
    var $this = this,
      $window = $(window);

  $window.scroll(function (e) {
    console.log('hey')
    if ($window.scrollTop() > pos) {
      $this.css({
          position: 'absolute',
          top: pos
       });
    } else {
        $this.css({
          position: 'fixed',
          top: 0
        });
      }
    });
	};
  console.log('hey')
	$('.name').followTo(710);


});