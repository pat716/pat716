/**
 * Created by psweeney on 6/29/17.
 */

$(window).on("resize", function () {
    updateButtonVerticalMargins();
    updateDonationTextTopMargin();
    updateModalImageContainerProperties();
    updateProjectImageSize();
    updateVisualizerVideoSize();
});

var lastScrollPosition = 0;
$(window).scroll(function () {
   var newScrollPosition = $(this).scrollTop();
   var navbarElement = $("#mainNavBar");
   var navbarHeight = parseInt(navbarElement.height()), currentTop = parseInt(navbarElement.css("top"));
   var newNavbarTop = Math.min(0, Math.max(-navbarHeight, currentTop + (lastScrollPosition - newScrollPosition)));
   navbarElement.css("top", newNavbarTop);
   if(newNavbarTop === -navbarHeight){
       hideNavBar();
   } else {
       showNavBar();
   }
   lastScrollPosition = newScrollPosition;
});

