//============Fixed Menu====================== 

$(document).ready(function () {
    $(window).scroll(function () {
        var menuFixed = $(this).scrollTop();
        if (menuFixed > 40) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    })
})





//==============Scroll Smuth======================
$('.link').click(function (e) {
    e.preventDefault();

    var target = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
});

//==============Scroll Smuth======================
$('.nav-link').click(function (e) {
    e.preventDefault();

    var target = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 2000);
});




//================== Mixitup//================

var container = document.querySelector('.gallery')
var mixer = mixitup(container, {
    selectors: {
        control: '[our-mixitup]'
    }
});




//==============Toastr======================

$('.add-to-cart').click(function () {
    $(function () {
        toastr.success("Successfully Added", "Product");
    });

    toastr.options = {
        "positionClass": "toast-bottom-right",
        "timeOut": "3000",
    }
});



//============Scroll Top======================
$(document).ready(function () {

    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });


    $('.top').hide();

    $(window).scroll(function () {
        var topButton = $(this).scrollTop();

        if (topButton < 400) {
            $('.top').fadeOut();
        } else {
            $('.top').fadeIn();
        }
    });

});

//============Cart Section======================

$(document).ready(function () {

    $('.cart-area').click(function () {
        $('.add-cart-section').show(200);
    });


});

$(document).ready(function () {

    $('.cart-icon').click(function () {
        $('.add-cart-section').hide(100);
    });


});



//============Password Hide Show======================

var eye = false;

function toggle() {

    if (eye) {
        document.getElementById("password").setAttribute('type', 'password');
        document.getElementById("eye1").style.display='none';
        document.getElementById("eye").style.display='block';
        eye = false;
    } else {
        document.getElementById("password").setAttribute('type', 'text');
        document.getElementById("eye").style.display='none';
        document.getElementById("eye1").style.display='block';
        eye = true;
    }

};
