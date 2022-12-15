(function ($) {
  "use strict";
  $(function () {
    $(".owl-carousel-projects").owlCarousel({
      loop: false,
      stagePadding: 100,
      margin: 20,
      nav: false,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
    var wWidth = $(window).width();
    var menuWidth = $(".navbar-collapse").width();
    $(".navbar-toggler").click(function () {
      $(".collapsing").toggleClass("show");
      $("body").addClass("sidebar-overlay");
    });
    $("#mobile-menu-overlay, .close-menu, .nav-link").click(function () {
      $(".collapse").toggleClass("show");
      $("body").removeClass("sidebar-overlay");
    });

    $("a.nav-link").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });

    AOS.init({
      offset: 0,
      duration: 800,
      easing: "ease-in-quad",
      delay: 100,
    });

    // counter Satisfied clients
    // var maxScVal = 97;
    // var isc = parseInt($('.scVal').text());
    // var tim;
    // function run() {
    // 	tim = setInterval(function () {
    // 		if (isc >= maxScVal) {
    // 			clearInterval(tim);
    // 			return;
    // 		}
    // 		$('.scVal').text(++isc);
    // 	}, 100);
    // }
    // run();
    //Counters

    // Tipo de profissonais
    var tpProfissionais = 150;
    var ifP = parseInt($(".fpVal").text());
    var timfP;
    function runfP() {
      timfP = setInterval(function () {
        if (ifP >= tpProfissionais) {
          clearInterval(timfP);
          return;
        }
        $(".fpVal").text(++ifP);
      }, 40);
    }
    runfP();
    //Projetos bem sucesdidos
    var maxtMVal = 45;
    var itm = parseInt($(".tMVal").text());
    var timtM;
    function runtM() {
      timtM = setInterval(function () {
        if (itm >= maxtMVal) {
          clearInterval(timtM);
          return;
        }
        $(".tMVal").text(++itm);
      }, 100);
    }
    runtM();
    //Team Members

    //Contratos atendindos
    var maxbPVal = 150;
    var ibP = parseInt($(".bPVal").text());
    var timbP;
    function runbP() {
      timbP = setInterval(function () {
        if (ibP >= maxbPVal) {
          clearInterval(timbP);
          return;
        }
        $(".bPVal").text(++ibP);
      }, 1);
    }
    runbP();
    //blog post
  });
})(jQuery);
