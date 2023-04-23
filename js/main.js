(function($) {

	'use strict';

  $('.site-menu-toggle').click(function(){
    var $this = $(this);
    if ( $('body').hasClass('menu-open') ) {
      $this.removeClass('open');
      $('.js-site-navbar').fadeOut(400);
      $('body').removeClass('menu-open');
    } else {
      $this.addClass('open');
      $('.js-site-navbar').fadeIn(400);
      $('body').addClass('menu-open');
    }
  });

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});



	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

  // aos
  AOS.init({
    duration: 1000
  });

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    autoHeight: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        dots: true,
        nav:true,
        loop:false
      }
  	}
	});

  var siteStellar = function() {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  }
  siteStellar();

  var smoothScroll = function() {
    var $root = $('html, body');

    $('a.smoothscroll[href^="#"]').click(function () {
      $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    });
  }
  smoothScroll();

  var dateAndTime = function() {
    $('#m_date').datepicker({
      'format': 'm/d/yyyy',
      'autoclose': true
    });
    $('#checkin_date, #checkout_date').datepicker({
      'format': 'd MM, yyyy',
      'autoclose': true
    });
    $('#m_time').timepicker();
  };
  dateAndTime();


  var windowScroll = function() {

    $(window).scroll(function(){
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-site-header').addClass('scrolled');
      } else {
        $('.js-site-header').removeClass('scrolled');
      }

    });

  };
  windowScroll();


  var goToTop = function() {

    $('.js-gotop').on('click', function(event){
      
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');
      
      return false;
    });

    $(window).scroll(function(){

      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }

    });
  
  };


})(jQuery);

const myButton = document.getElementById("handburger-menu-btn");
const myDiv = document.getElementById("handBurgerMenu");

myButton.addEventListener("click", function() {
  myDiv.classList.toggle("open-handburger-menu");
});


const sendGetInTouchMail = () => {
  const username = document.getElementById("git_username").value
  const phone = document.getElementById("git_phone").value
  const email = document.getElementById("git_email_id").value
  const accomodationType = document.getElementById("git_accomodation_type").value
  const number_of_person = document.getElementById("git_number_of_person").value
  const message = document.getElementById("git_message").value
  document.getElementById("git_send_message_btn").value = "Sending Message..."
  emailjs.send("service_mqbxn73","template_nwtpwrl", {
    subject: "Get In Touch Request",
    phone_number: phone,
    from_email: email,
    from_name: username,
    phone_number: "",
    accomodation_type: accomodationType,
    number_of_person: number_of_person,
    message: message,
  }).then((res) => {
    if (res.status === 200) {
      alert("Success")
    } else {
      alert("Regret")
    }
    document.getElementById("git_send_message_btn").value = "Send Message"
  });
}


const reservationMail = () => {
  const username = document.getElementById("res_username").value
  const phone = document.getElementById("res_phone").value
  const email = document.getElementById("res_email_id").value
  const checkInDate = document.getElementById("res_checkin_date").value
  const checkOutDate = document.getElementById("res_checkout_date").value
  const numberOfAdults = document.getElementById("res_number_of_adults").value
  const numberOfChildrens = document.getElementById("res_number_of_childrens").value
  const message = document.getElementById("res_message").value
  document.getElementById("res_reserve_now_btn").value = "Sending Request..."
  emailjs.send("service_mqbxn73","template_iojnfoz", {
    from_name: username,
    phone_number: phone,
    from_email: email,
    checkin_date: checkInDate,
    checkout_date: checkOutDate,
    number_of_adults: numberOfAdults,
    number_of_children: numberOfChildrens,
    message: message,
  }).then(res => {
    document.getElementById("res_reserve_now_btn").value = "Reserve Now"
    if (res.status === 200) {
      alert("Reservation request send successfully. The team will contact you soon!")
    } else {
      alert("There was some problem in sending the request. Sorry for the inconvenience caused.")
    }
  });
}

const sendContactMail = () => {
  const username = document.getElementById("contact_username").value
  const phone = document.getElementById("contact_phone").value
  const email = document.getElementById("contact_email").value
  const message = document.getElementById("contact_message").value
  document.getElementById("contact_send_message_btn").value = "Sending Message..."
  console.log(username, phone, email, message)
  emailjs.send("service_mqbxn73","template_nwtpwrl",{
    subject: "Contact request",
    from_email: email,
    from_name: username,
    phone_number: phone,
    accomodation_type: "",
    number_of_person: "",
    message: message,
  }).then((res) => {
    document.getElementById("contact_send_message_btn").value = "Send Message"
    if (res.status === 200) {
      alert("Thank you for sending the message, the team will contact you soon!")
    } else {
      alert("There was some problem in sending the request. Sorry for the inconvenience caused")
    }
  });
}
