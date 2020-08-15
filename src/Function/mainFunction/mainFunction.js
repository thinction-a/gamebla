/**
 * Template Name: SoftLand - v2.0.1
 * Template URL: https://bootstrapmade.com/softland-bootstrap-app-landing-page-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function ($) {
    "use strict";
  
    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on(
      "click",
      ".site-navigation a, .site-mobile-menu a, .scrollto",
      function (e) {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          e.preventDefault();
          var target = $(this.hash);
          if (target.length) {
            var scrollto = target.offset().top;
            var scrolled = 20;
  
            if ($("#header").length) {
              scrollto -= $("#header").outerHeight();
  
              if (!$("#header").hasClass("header-scrolled")) {
                scrollto += scrolled;
              }
            }
  
            if ($(this).attr("href") == "#header") {
              scrollto = 0;
            }
  
            $("html, body").animate(
              {
                scrollTop: scrollto,
              },
              1500,
              "easeInOutExpo"
            );
  
            if ($(this).parents(".site-navigation, .site-mobile-menu").length) {
              $(
                ".site-navigation .active, .site-mobile-menu .active"
              ).removeClass("active");
              $(this).closest("li").addClass("active");
            }
  
            if ($("body").hasClass("site-mobile-menu-active")) {
              $("body").removeClass("site-mobile-menu-active");
              $(".site-mobile-menu-toggle i").toggleClass(
                "icofont-navigation-menu icofont-close"
              );
              $(".site-mobile-menu-overly").fadeOut();
            }
            return false;
          }
        }
      }
    );
  
    // Navigation active state on scroll
    var nav_sections = $("section");
    var main_nav = $(".site-navigation, #site-mobile-menu");
  
    $(window).on("scroll", function () {
      var cur_pos = $(this).scrollTop() + 90;
  
      nav_sections.each(function () {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find("li").removeClass("active");
          }
          main_nav
            .find('a[href="#' + $(this).attr("id") + '"]')
            .parent("li")
            .addClass("active");
        }
        if (cur_pos < 300) {
          $(".site-navigation ul:first li:first").addClass("active");
        }
      });
    });
    // Hero typed
    if ($(".typed").length) {
      var typed_strings = $(".typed").data("typed-items");
      typed_strings = typed_strings.split(",");
      new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
    $(".back-to-top").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500,
        "easeInOutExpo"
      );
      return false;
    });
    // // Portfolio isotope and filter
    // $(window).on("load", function () {
    //   var portfolioIsotope = $(".portfolio-container").isotope({
    //     itemSelector: ".portfolio-item",
    //   });
  
    //   $("#portfolio-flters li").on("click", function () {
    //     $("#portfolio-flters li").removeClass("filter-active");
    //     $(this).addClass("filter-active");
  
    //     portfolioIsotope.isotope({
    //       filter: $(this).data("filter"),
    //     });
    //     aos_init();
    //   });
  
    //   // Initiate venobox (lightbox feature used in portofilo)
    //   $(".venobox").venobox({
    //     share: false,
    //   });
  
    //   // Initiate aos_init() function
    //   aos_init();
    // });
  
    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1,
    });
  
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000,
    });
  
    var siteMenuClone = function () {
      $(".js-clone-nav").each(function () {
        var $this = $(this);
        $this
          .clone()
          .attr("class", "site-nav-wrap")
          .appendTo(".site-mobile-menu-body");
      });
      setTimeout(function () {
        var counter = 0;
        $(".site-mobile-menu .has-children").each(function () {
          var $this = $(this);
          $this.prepend('<span class="arrow-collapse collapsed">');
          $this.find(".arrow-collapse").attr({
            "data-toggle": "collapse",
            "data-target": "#collapseItem" + counter,
          });
          $this.find("> ul").attr({
            class: "collapse",
            id: "collapseItem" + counter,
          });
          counter++;
        });
      }, 1000);
      $("body").on("click", ".arrow-collapse", function (e) {
        var $this = $(this);
        if ($this.closest("li").find(".collapse").hasClass("show")) {
          $this.removeClass("active");
        } else {
          $this.addClass("active");
        }
        e.preventDefault();
      });
      $(window).resize(function () {
        var $this = $(this),
          w = $this.width();
        if (w > 768) {
          if ($("body").hasClass("offcanvas-menu")) {
            $("body").removeClass("offcanvas-menu");
          }
        }
      });
      $("body").on("click", ".js-menu-toggle", function (e) {
        var $this = $(this);
        e.preventDefault();
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
          $("body").find(".js-menu-toggle").removeClass("active");
        } else {
          $("body").addClass("offcanvas-menu");
          $("body").find(".js-menu-toggle").addClass("active");
        }
      });
      // click outisde offcanvas
      $(document).mouseup(function (e) {
        var container = $(".site-mobile-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("offcanvas-menu")) {
            $("body").removeClass("offcanvas-menu");
            $("body").find(".js-menu-toggle").removeClass("active");
          }
        }
      });
    };
    siteMenuClone();
    var siteScroll = function () {
      $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 100) {
          $(".js-sticky-header").addClass("shrink");
        } else {
          $(".js-sticky-header").removeClass("shrink");
        }
      });
    };
    siteScroll();
    var siteSticky = function () {
      $(".js-sticky-header").sticky({
        topSpacing: 0,
      });
    };
    siteSticky();
    var siteOwlCarousel = function () {
      $(".testimonial-carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 1000,
      });
    };
    siteOwlCarousel();
  })(jQuery);
  
  AOS.init({
    easing: "ease",
    duration: 1000,
    once: true,
  });
  
  // sliderPartJs
  
  function makeSlider() {
    var items = $(".features .item");
    var screens = $(".screens .item");
    var descs = $(".desc .con");
    var links = $(".links .link");
  
    items.each(function (i, item) {
      $(item).on("click", function () {
        var activeItem = $(".features .item.active");
        var activeScreen = $(".screens .item.active");
  
        screens.each(function (i, screen) {
          $(screen).removeClass("active");
          $(screen).css("z-index", "1");
        });
  
        descs.each(function (i, desc) {
          $(desc).removeClass("active");
        });
  
        links.each(function (i, link) {
          $(link).removeClass("active");
        });
  
        if (activeScreen) {
          activeScreen.css("z-index", "2");
        }
        if (activeItem) {
          activeItem.removeClass("active");
        }
  
        $(this).addClass("active");
        $(screens[i]).addClass("active");
        $(screens[i]).css("z-index", "3");
        $(descs[i]).addClass("active");
        $(links[i]).addClass("active");
      });
    });
  }
  makeSlider();
  
  // 모두 동의
  const checkBoxes = document.querySelectorAll(".custom-control-input");
  function AllCheck() {
    if ( checkBoxes[0].checked === true ) {
      for ( let i = 0; i < checkBoxes.length; i ++ ) {
        checkBoxes[i].checked = true;
      }
    } else if ( checkBoxes[0].checked === false ) {
      for ( let i = 0; i < checkBoxes.length; i ++ ) {
        checkBoxes[i].checked = false;
      }
    }
  }
  // 개별 동의
  const _checkBoxes = Object.values(checkBoxes);
  const twoCheckBoxes = _checkBoxes.slice(1, 3);
  function checkToggle() {
    if ( twoCheckBoxes[0].checked === true && twoCheckBoxes[1].checked === true ) {
      checkBoxes[0].checked = true;
    } else if ( twoCheckBoxes[0].checked === false || twoCheckBoxes[1].checked === false ) {
      checkBoxes[0].checked = false;
    }
  }
  function autoAll() {
    for ( let i = 0; i < twoCheckBoxes.length; i ++ ) {
      twoCheckBoxes[i].addEventListener("click", checkToggle);
    }
  }
  autoAll();
  
  //유의사항 + 자세히보기
  const registerBtns = document.querySelectorAll(".registerBtn")
  
  function registerBtn() {
    if ( document.activeElement === registerBtns[0] ) {
      window.open("./assets/register_caution&more/registerCaution.html", "startpop", "top=0, left=0, width=500, height=800, scrollbars=no, resizable=no ,status=no ,toolbar=no");
    } else if ( document.activeElement === registerBtns[1] ) {
      window.open("./assets/register_caution&more/registerMore1.html", "startpop", "top=0, left=0, width=500, height=800, scrollbars=no, resizable=no ,status=no ,toolbar=no");
    } else if ( document.activeElement === registerBtns[2] ) {
      window.open("./assets/register_caution&more/registerMore2.html", "startpop", "top=0, left=0, width=500, height=800, scrollbars=no, resizable=no ,status=no ,toolbar=no");
    }
  }
  function registerClicker() {
    for ( let i = 0; i < registerBtns.length; i ++ ) {
      registerBtns[i].addEventListener("click", registerBtn);
    }
  }
  registerClicker();
  