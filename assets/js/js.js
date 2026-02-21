// mobile menu js
function myFunction(x) {
    x.classList.toggle("change");
  }

// home page slider
  $('.home_slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    speed: 550,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// counter script on home page
// $(window).load(function() {
//   var scrollTop = $("#amount_counter");

jQuery(window).scroll(startCounter);

function startCounter() {
var hT = jQuery('.counter_box').scrollTop(),
    hH = jQuery('.counter_box').outerHeight(),
    wH = jQuery(window).height();
  if (jQuery(window).scrollTop() > hT+hH-wH) {
    jQuery(window).off("scroll", startCounter);
    jQuery('.counter').each(function () {
      var a = $(this).text();
      a = (a.indexOf(',')> -1) ? a.replace(',', '.') : a;
      var x = a.split(".")[1] ? a.split(".")[1] : '';
      var b = parseInt(a);
      jQuery(this).prop('Counter',0).animate({
        Counter: b
      }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
          var e = parseInt(Math.ceil(now))+parseFloat(parseInt(a)-b);
            e = ($(this).text().indexOf(',')> -1) ? e + "," + x : e;
            e = ($(this).text().indexOf('.')> -1) ? e + "." + x : e;
          jQuery(this).text(e);
        }
      });
    });
  }
};


// $('.counter-count').each(function () {
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         }, {
//           //chnage count up speed here
//             duration: 4000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });



// our project slider
   $('.project_slides-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      adaptiveHeight: true,
      infinite: true,
      useTransform: true,
      speed: 400,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
     });

     $('.project_slides-nav')
      .on('init', function(event, slick) {
        $('.project_slides-nav .slick-slide.slick-current').addClass('is-active');
      })
      .slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        infinite: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }, {
          breakpoint: 481,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        }]
      });

     $('.project_slides-for').on('afterChange', function(event, slick, currentSlide) {
      $('.project_slides-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.project_slides-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.project_slides-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
     });

     $('.project_slides-nav').on('click', '.slick-slide', function(event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');

      $('.project_slides-for').slick('slickGoTo', goToSingleSlide);
     });


// client logo slider
  $('.client_logo_home').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          speed: 3500
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          speed: 4000
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          speed: 3500
        }
      }
    ]
  });

// kh_clients1

$('.kh_clients1').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          speed: 3500
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 4000
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 3500
        }
      }
    ]
  });


// kh_clients2

$('.kh_clients2').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          speed: 3500
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 4000
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 3500
        }
      }
    ]
  });


// Blog posts slider on home page
  $('.blog_posts').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
    speed: 800,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 481,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  });

// about page slider js

$('.about_right_carousel').slick({
    dots: false,
    arrow: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slideToScoll: 1,
    autoplay: false,
    cssEase: 'linear',
    adaptiveHeight: true
  });

$('.priorityModal').on('shown.bs.modal', function (e) {
      $('.about_right_carousel').slick('setPosition');
      // $('.wrap-modal-slider').addClass('open');
    });


// interior design slider

$('.project_slides-for-int').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: false,
adaptiveHeight: true,
infinite: true,
useTransform: true,
speed: 400,
cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.project_slides-nav-int')
.on('init', function(event, slick) {
  $('.project_slides-nav-int .slick-slide.slick-current').addClass('is-active');
})
.slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  focusOnSelect: true,
  infinite: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  }, {
    breakpoint: 481,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
  }
  }]
});

$('.project_slides-for-int').on('afterChange', function(event, slick, currentSlide) {
$('.project_slides-nav-int').slick('slickGoTo', currentSlide);
var currrentNavSlideElem = '.project_slides-nav-int .slick-slide[data-slick-index="' + currentSlide + '"]';
$('.project_slides-nav-int .slick-slide.is-active').removeClass('is-active');
$(currrentNavSlideElem).addClass('is-active');
});

$('.project_slides-nav-int').on('click', '.slick-slide', function(event) {
event.preventDefault();
var goToSingleSlide = $(this).data('slick-index');

$('.project_slides-for-int').slick('slickGoTo', goToSingleSlide);
});

// reliable slider

$('.reliable_team_caraousel').slick({
dots: false,
infinite: true,
arrows: true,
speed: 300,
slidesToShow: 5,
slidesToScroll: 1,
responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 1
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1
  }
}
]
});


// video in modal popup high-rise-development jQuery
$('#aboutModal').on('shown.bs.modal', function () {
$('#video1')[0].play();
})
$('#aboutModal').on('hidden.bs.modal', function () {
$('#video1')[0].pause();
})
//youtube video modal
$('.yb').on('shown.bs.modal', function () {
$('#video1')[0].play();
})
$('.yb').on('hidden.bs.modal', function () {
$('#video1')[0].pause();
})

// tabs js for page Project-Management-and-Design

// JS for tab Pre
  $('.tab_pre').on('click', function(){
    let target_id = $(this).data('target');
    $('.tab_pre, .pre_content').removeClass('active');
    $(this).addClass('active');
    $(target_id).addClass('active');
  });
  $('.close-tab_pre').on('click', function(){
    $('.tab_pre, .pre_content').removeClass('active');
  });

  $("#defaultOpen").click();


// JS for tab post
  $('.tab_post').on('click', function(){
    let target_id = $(this).data('target');
    $('.tab_post, .post_content').removeClass('active');
    $(this).addClass('active');
    $(target_id).addClass('active');
  });
  $('.close-tab_post').on('click', function(){
    $('.tab_post, .post_content').removeClass('active');
  });

  $("#defaultOpen1").click();

// header js for mobile
function openNav() {
document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

// menu open scroll stop jquery

$(function () {
//adding a new class on button element
$('.ham_icon').on('click',function () {
    $('.overflow_scroll').addClass('clicked_new');
});

//removing a existing class from button element
$('.close_icon').on('click',function () {
    $('.overflow_scroll').removeClass('clicked_new');
});
});


// Addclass on media gallery page in arabic version specific url http://kooheji.indiainteractive.net/ar/media-gallery

$(document).ready(function() {
    var newUrl1 = window.location.protocol + "//" + window.location.host + "/" + 'ar/media-gallery';
    var newUrl2 = window.location.protocol + "//" + window.location.host + "/" + 'ar/admin/pages/preview/media-gallery';
    
    if (window.location.href == newUrl1) {
      document.querySelectorAll('body').forEach(function(ele, idx) {
        ele.classList.add('kh_body_media_gallery');
      });
    };
    
    if (window.location.href == newUrl2) {
      document.querySelectorAll('body').forEach(function(ele, idx) {
        ele.classList.add('kh_body_media_gallery');
      });
    };
});


var page = window.location.pathname;
if(page == '/'){
    // -- do stuff
    console.log('home page');
} else{
  // -- do other stuff
  console.log('other page');
}