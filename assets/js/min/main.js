


function codeAddress() {
    $(".profile-intro").addClass("autoHeight")
}
$(document).ready(function() {
    $("#home-case-studies").delay(200).fadeOut(900)
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById("bm"),
    renderer: "svg",
    loop: !1,
    autoplay: !0,
    path: "/assets/animation/hangar-pattern.json"
});
$(document).ready(function() {
    $(window).scroll(function() {
        $(document).scrollTop() > 100 ? $(".home-page").addClass("scrolled") : $(".home-page").removeClass("scrolled")
    })
}), $(document).ready(function() {
    $(window).scroll(function() {
        $(document).scrollTop() > 100 ? $(".top-bar-outer").addClass("with-bg") : $(".top-bar-outer").removeClass("with-bg")
    })
}), $(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
}), $("#js-rotating").Morphext({
    animation: "fadeInUp",
    complete: function() {
        console.log("This is called after a phrase is animated in! Current phrase index: " + this.index)
    }
}), $(document).ready(function() {
    function e() {
        windowHeight = $(window).innerHeight(), $("#home-video-wrapper").css("min-height", windowHeight)
    }
    e(), $(window).resize(function() {
        e()
    })
}), $(document).ready(function() {
    $("a[href*=#]").bind("click", function(e) {
        e.preventDefault();
        var o = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(o).offset().top
        }, 500, function() {
            location.hash = o
        })
    })
}), (new WOW).init(), $(".burger-wrap").click(function() {
    $(this).toggleClass("cross"), $(".nav-outer").toggleClass("open"), $(".overlay").fadeToggle(400), $("html").toggleClass("locked")
}), $(".overlay").click(function() {
    $(".burger-wrap").toggleClass("cross"), $(this).fadeToggle(400), $(".nav-outer").toggleClass("open"), $("html").toggleClass("locked")
}), $(".checkbox-select div").click(function() {
    $(this).toggleClass("selected")
}), window.onload = codeAddress, $(window).scroll(function(e) {
    var o = $(window).scrollTop();
    $(".profile-intro.page-section h1").css({
        top: .2 * o
    })
}), fbq("track", "ViewContent"), fbq("track", "Search"), fbq("track", "AddToCart"), fbq("track", "AddToWishlist"), fbq("track", "InitiateCheckout"), fbq("track", "AddPaymentInfo"), fbq("track", "Purchase", {
    value: "1.00",
    currency: "USD"
}), fbq("track", "Lead"), fbq("track", "CompleteRegistration");









$('#modal1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal6').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
});

$('#modal4').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
});
