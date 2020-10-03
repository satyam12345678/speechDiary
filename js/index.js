
$(document).scroll(function() {
  var homeHeight = $('#home').outerHeight() - 5;
  var getStartedHeight = homeHeight + $('#get-started').outerHeight() - 5;
  var featuresHeight = getStartedHeight + $('#feat').outerHeight() - 5;
  var subsHeight = featuresHeight + $('#subs').outerHeight() - 5;
  var contactHeight = subsHeight + $('#contact').outerHeight() - 5;

  var y = $(document).scrollTop();
  if (y >= homeHeight - 10) {
    $('.sticky-nav').fadeIn();
  } else {
    $('.sticky-nav').fadeOut();
  }

  if (y > subsHeight && y < contactHeight) {
    $('.contact-us').addClass('hover');

    $('.subscription').removeClass('hover');
    $('.features').removeClass('hover');
    $('.get-started').removeClass('hover');
  } else if (y > featuresHeight && y < subsHeight) {
    $('.subscription').addClass('hover');

    $('.contact-us').removeClass('hover');
    $('.features').removeClass('hover');
    $('.get-started').removeClass('hover');
  } else if (y > getStartedHeight && y < featuresHeight) {
    $('.features').addClass('hover');

    $('.subscription').removeClass('hover');
    $('.contact-us').removeClass('hover');
    $('.get-started').removeClass('hover');
  } else if (y > homeHeight && y < getStartedHeight) {
    $('.get-started').addClass('hover');

    $('.subscription').removeClass('hover');
    $('.features').removeClass('hover');
    $('.contact-us').removeClass('hover');
  }
});

$(document).ready(function(){
  window.scrollBy(0,0.5);
});

$("#btn1-drop, #btn2-drop, #btn3-drop, #know1-drop, #know2-drop, #know3-drop").click( function () {

  var arr1 = $("#arr1-drop");
  var arr2 = $("#arr2-drop");
  var arr3 = $("#arr3-drop");

  if (this.id == "btn1-drop" || this.id == "know1-drop") {
    $("#btn1-drop").parent().toggleClass("clickPullUpBar clickDropDownBar");
    arr1.toggleClass("clickPullUpArr clickDropDownArr");
    // $("#btn1-drop h4").toggleClass("h4-color-white h4-color-black");
  } else if (this.id == "btn2-drop" || this.id == "know2-drop") {
    $("#btn2-drop").parent().toggleClass("clickPullUpBar clickDropDownBar");
    arr2.toggleClass("clickPullUpArr clickDropDownArr")
    // $("#btn2-drop h4").toggleClass("h4-color-white h4-color-black");
  } else if (this.id == "btn3-drop" || this.id == "know3-drop") {
    $("#btn3-drop").parent().toggleClass("clickPullUpBar clickDropDownBar");
    arr3.toggleClass("clickPullUpArr clickDropDownArr")
    // $("#btn3-drop h4").toggleClass("h4-color-white h4-color-black");
  }
});
