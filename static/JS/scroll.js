setTimeout(function(){
  if ($('#distag').length > 0) {
      $('#distag').remove();
    }
  }, 3000)

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 250) {
    $('#back2Top').fadeIn();
  } 
  else {
    $('#back2Top').fadeOut();
    }
  });
      
  $(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
