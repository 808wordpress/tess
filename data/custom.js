!function(s){s(document).ready(function(){s("body").css({display:"block"}),s("#sidr-left-top-button").sidr({name:"sidr-left-top",timing:"ease-in-out",speed:500,side:"left",source:".left"}),s("#loader").fadeOut(),s("#loader-container").fadeOut(),s(".main-navigation ul li").click(function(){s(".main-navigation ul li").removeClass("current-menu-item"),s(this).addClass("current-menu-item")}),s(".topbar-toggle").click(function(){s("#top-bar").toggleClass("open-topbar")}),s(".search-btn").click(function(){s("#search").slideDown("slow")}),s("#close-search").click(function(){s("#search").slideUp("slow")}),s(window).scroll(function(){s(this).scrollTop()>1?s(".backtotop").css({bottom:"25px"}):s(".backtotop").css({bottom:"-100px"})}),s(".backtotop").click(function(){return s("html, body").animate({scrollTop:"0px"},800),!1});var e=s("#main-slider .regular").data("effect");s("#main-slider .regular").slick({cssEase:e}),s("#recent-courses-slider .regular").slick({responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),s("#recent-news .regular").slick({responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),s("#popular-courses .regular").slick({responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:421,settings:{slidesToShow:1,slidesToScroll:1}}]}),s("#upcoming-events .regular").slick({responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}}]}),s("#our-partners .regular").slick({responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:421,settings:{slidesToShow:2,slidesToScroll:1}}]}),s("#testimonial-slider .regular").slick({fade:!0,cssEase:"linear",customPaging:function(e,i){return'<a><img src="'+s(e.$slides[i]).data("thumb")+'"></a>'},responsive:[{breakpoint:601,settings:{dots:!1}}]}),s("#testimonial-slider .slick-dots").insertAfter("#testimonial-slider .testimonial-contents-wrapper"),s("#testimonial-slider button.slick-prev").insertBefore("#testimonial-slider .slick-dots"),s("#testimonial-slider button.slick-next").insertAfter("#testimonial-slider .slick-dots"),s(window).width()<615&&s("#testimonial-slider button.slick-prev").insertBefore("#testimonial-slider button.slick-next");s(".portfolio");s("ul.tabs li").click(function(){var e=s(this).attr("data-tab");s("ul.tabs li").removeClass("active"),s(".tab-content").removeClass("active"),s(this).addClass("active"),s("#"+e).addClass("active")}),s(".btn-js").each(function(){var e=s(this).html();s(this).append('<span class="btn-show"><span class="btn-text">'+e+'</span></span>  <span class="btn-hide"><span class="btn-text">'+e+"</span></span>")})})}(jQuery);