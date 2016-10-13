// alert("hey colin");

(function ($){
  $(function () {
    "use strict";

    var $heading = $('.heading');


    $heading.on('click', function(){
        var $this = $(this);

      $this.next().slideDown();
      $this.parents('.holder').siblings().find('.categories').slideUp();

      $this.addClass('active');
      $this.parents('.holder').siblings().find('.heading').removeClass('active');



    });




  });       /* End of the global functions */
}(jQuery));


// if(target.next().is(:visible)) {
//   target.next().slideUp();
// }else{
//   target.next().slideDown();
