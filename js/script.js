'use sctrict'

//button burger -> show\hide menu
function showHideMenu() {
    // const btn = document.querySelector('#burger_menu');
    // const menu = document.querySelector('.main-nav');
    // let w = window.innerWidth
    // let wMenu = menu.offsetWidth
    // let translate = wMenu
    // if(w > 1200) {
    //     translate = (wMenu - (w - 1200) / 2);
    // }

    $('#burger_menu').click(function () {
        $(this).addClass('active');
        $('.main-nav').addClass('active')
        // btn.style.transform = `translateX(${translate - 50}px)  translateZ(0)`
    })
    $(document).mouseup(function (e) {
        var div = $(".main-nav");
        if ($('#burger_menu').hasClass('active') && !div.is(e.target)
            && div.has(e.target).length === 0) {
            $('#burger_menu').removeClass('active');
            $('.main-nav').removeClass('active')
            // btn.style.transform = `translateX(0) translateZ(0)`
        }
    });
    $('#closeMainMenu').click(function () {
        $(this).removeClass('active');
        $('.main-nav').removeClass('active')
        $('#burger_menu').removeClass('active');
        // btn.style.transform = `translateX(${translate - 50}px)  translateZ(0)`
    })
}
showHideMenu()

function isInternetExplorer() {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
}
if (isInternetExplorer()) {
    alert(`Внимание, Ваш браузер может не корректно отображать эту страницу. Пожалуйста, возспользуйтесь другим браузером 
    
Attention, your browser may not display this page correctly. Please use another browser`)
}

if (window.innerWidth > 1000) {
    let cloud = document.querySelectorAll('.parallax_move');
    let cloudBottom = document.querySelector('.cloud_bottom');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        for (let elem of cloud) {
            elem.style.transform = 'translate(' + x * 170 + 'px, ' + y * 150 + 'px) translateZ(0)';
        }
        cloudBottom.style.transform = 'translate(' + x * 170 + 'px, ' + y * 10 + 'px) translateZ(0)';
    });
}



let reviewParallax = () => {
    let reviewPhotos = document.querySelector('.review_photos');
    let kokoTranslate = document.querySelector('.koko_translate');
    let timeline = document.querySelector('.timeline_items');
    let achievments = document.querySelector('.achievments_items');
    let parallax_bouble1 = document.querySelector('.par_bouble_1')
    let parallax_bouble2 = document.querySelector('.par_bouble_2')
    let history_line = document.querySelector('.history_line')
    let quality_block = document.querySelector('.high_quality_block--charger')

    if (reviewPhotos && reviewPhotos.classList.contains('main_page') && window.innerWidth > 1000) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 2700) {
                reviewPhotos.style.transform = `translateY(-${($(this).scrollTop() - 2700) / 3}px) translateZ(0)`
            }
        })
    }
    if (reviewPhotos && reviewPhotos.classList.contains('product_page') && window.innerWidth > 1000) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 6600) {
                reviewPhotos.style.transform = `translateY(-${($(this).scrollTop() - 6000) / 3}px) translateZ(0)`
            }
        })
    }
    if (quality_block && window.innerWidth > 930) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 4070) {
                quality_block.classList.add('active')
            }
        })        
    }
    // if (quality_block && window.innerWidth > 1000) {
    //     let zxy = 0
    //     let z = 0
    //     let y = 0
    //     let x = 0
    //     $(window).scroll(function () {
    //         zxy = -($(this).scrollTop() - 4070) / 8
    //         y = x = -($(this).scrollTop() - 4070) 
    //         z = ($(this).scrollTop() - 4070) / 2
    //         // console.log(zxy, z)
    //         if ($(this).scrollTop() > 4070) {
    //             if(zxy <= -50) {
    //                 zxy = -50
    //                 quality_block.style.transform = `translate3d(${zxy}px,${zxy}px, ${z}px) translate(${x}px,${y}px)`
    //             } else {
    //                 quality_block.style.transform = `translate3d(${zxy}px,${zxy}px, ${z}px) translate(${x}px,${y}px)`
    //             }
    //         }
    //     })
    // }
    if (kokoTranslate && window.innerWidth > 1050) {
        let x = 0;
        let y = 0;
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {

                x = 480 - ($(this).scrollTop() - 100) / 2
                if (x < 0) {
                    x = 0
                }
                y = -840 + ($(this).scrollTop() - 100) / 1.1

                if (y > 0) {
                    y = 0
                }
                kokoTranslate.style.transform = `translate(${x}px, ${y}px) translateZ(0)`
                if ($(this).scrollTop() > 600) {
                    kokoTranslate.style.transform = `translate(${x}px, ${y}px) translateZ(0) scale(-1, 1)`
                }
                // kokoTranslate.classList.add('active')
            }
            // else {
            //     kokoTranslate.classList.remove('active')
            // }


        })
    } else if (kokoTranslate && window.innerWidth < 1050) {
        kokoTranslate.style.display = 'none'
    }
    if (achievments && window.innerWidth > 1000) {
        let x = 160
        let x2 = 150
        $(window).scroll(function () {
            x = 160 - ($(this).scrollTop() - 3500) / 8
            x2 = 150 - ($(this).scrollTop() - 1700) / 8
            if ($(this).scrollTop() > 1700 && x2 >= 0) {
                timeline.style.transform = `translateX(${x2}px) translateZ(0)`
            }
            if ($(this).scrollTop() > 3500 && x >= 0) {
                achievments.style.transform = `translateX(${x}px) translateZ(0)`
            }
            if ($(this).scrollTop() > 500 && $(this).scrollTop() < 2300) {
                parallax_bouble1.style.transform = `translateY(-${($(this).scrollTop() - 500) / 8}px) translateZ(0)`
                parallax_bouble2.style.transform = `translateY(-${($(this).scrollTop() - 500) / 8}px) translateZ(0)`
                history_line.style.transform = `translateY(-${($(this).scrollTop() - 500) / 8}px) translateZ(0)`

            }
        })
    }
}

let btnToTop = document.querySelector('.toTopBtn')
$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        btnToTop.style.opacity = '1'
        btnToTop.style.pointerEvents = 'visible'
    } else {
        btnToTop.style.opacity = '0';
        btnToTop.style.pointerEvents = 'none'
    }
})
$('.toTopBtn').on('click', function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 300);
});


const fast_charge_block = document.querySelector('.fast_charge_block')
let charging_kokovolta = ''
let charging_other = ''
let charging_kokovolta_span = ''
let charging_other_span = ''
if (fast_charge_block) {
    charging_kokovoltaBlock = fast_charge_block.querySelector('.charging_kokovolta')
    charging_kokovolta = fast_charge_block.querySelector('.charging_kokovolta .charging_wrap div')
    charging_other = fast_charge_block.querySelector('.charging_other .charging_wrap div')
    charging_kokovolta_span = fast_charge_block.querySelector('.charging_kokovolta .charging_wrap>span')
    charging_other_span = fast_charge_block.querySelector('.charging_other .charging_wrap>span')
    let kabel = document.querySelector('.kabel')
    let charging_block = document.querySelector('.charging_block')
    let isStartAnimation = true
    let scroll = 2850
    if (window.innerWidth < 750) {
        scroll = 2700
    }
    if (window.innerWidth < 399) {
        scroll = 2300
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > scroll && isStartAnimation) {
            kabel.className = 'kabel active'
            isStartAnimation = false
            setTimeout(function () {
                charging_block.className = 'charging_block active'
            }, 1100)

            setTimeout(function () {
                animateCharging()
            }, 1500)

        }
    })
}
let widthChargingKoko = 0
let widthChargingOther = 0
let requestChargin = true;
let animateCharging = () => {
    if (widthChargingKoko > 100) {
        widthChargingKoko = 100
        window.cancelAnimationFrame(requestChargin)
        requestChargin = undefined
        charging_kokovoltaBlock.classList.add('win')
    }
    charging_kokovolta.style.width = widthChargingKoko + '%'
    charging_kokovolta_span.textContent = Math.round(widthChargingKoko) + '% kokovolta'

    charging_other.style.width = widthChargingOther + '%'
    charging_other_span.textContent = Math.round(widthChargingOther) + '% other'
    widthChargingKoko += 0.2
    widthChargingOther += 0.11
    if (requestChargin) {
        requestChargin = window.requestAnimationFrame(animateCharging)
    }
}
if (window.innerWidth > 930) {
    const swiperProduct = new Swiper('.sliderButtuns', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

    });
}
if (window.innerWidth > 930) {
    const swiperTeam = new Swiper('.team_photos--wrap', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
}

if (window.innerWidth < 930) {
    const swiperScroll = new Swiper('.sliderScroll', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        // centeredSlides: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            clickable: true,

        },
    });
}
if (window.innerWidth > 930) {
    const verticalSwiper = new Swiper('.vertical_slider', {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 30,
        mousewheel: true,
    });
}
let lineBlock = document.querySelectorAll('.bg_lines_svg')

function createGridSvg(lineBlock) {
    lineBlock.innerHTML = ''
    let parent = lineBlock.parentNode
    let width = parent.offsetWidth
    let height = parent.offsetHeight
    let colorStroke = 'rgba(255,255,255, 0.2)'
    let widthStroke = '1';
    if ($('.about_main').length) {
        createGridLineSvg(lineBlock, 960, 2000, 960, 2200, '#10C8FF', 3, 'history_line')
        createGridLineSvg(lineBlock, 960, 4000, 960, 4200, '#10C8FF', 3)
        createGridLineSvg(lineBlock, 1100, 4930, 1300, 4930, '#10C8FF', 3)
    }
    if ($('.line_svg_right').length) {
        createGridLineSvg(lineBlock, 1600, 300, 1600, 500, '#10C8FF', 3)
        createGridLineSvg(lineBlock, 1600, 1500, 1600, 1700, '#10C8FF', 3)
        createGridLineSvg(lineBlock, 1600, 2500, 1600, 2700, '#10C8FF', 3)
    }
    if ($('.contact_main').length) {
        createGridLineSvg(lineBlock, 1450, 870, 1650, 870, '#10C8FF', 3)
    }
    if ($('.line_svg_bottom_left').length) {
        createGridLineSvg(lineBlock, 320, 670, 520, 670, '#10C8FF', 3)
    }
    for (let i = 0; i <= width; i += 320) {
        let line1 = document.createElementNS("http://www.w3.org/2000/svg", 'line')
        line1.setAttribute('x1', i)
        line1.setAttribute('y1', 0)
        line1.setAttribute('x2', i)
        line1.setAttribute('y2', height)
        line1.setAttribute('stroke', colorStroke)
        line1.setAttribute('stroke-width', widthStroke)

        lineBlock.appendChild(line1)
    }
    for (let i = 0; i <= height; i += 290) {
        let line2 = document.createElementNS("http://www.w3.org/2000/svg", 'line')
        line2.setAttribute('x1', 0)
        line2.setAttribute('y1', i)
        line2.setAttribute('x2', width)
        line2.setAttribute('y2', i)
        line2.setAttribute('stroke', colorStroke)
        line2.setAttribute('stroke-width', widthStroke)

        lineBlock.appendChild(line2)
    }
}
function createGridLineSvg(elem, x1, y1, x2, y2, color, widthStroke, class_name) {
    let line = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    line.setAttribute('x1', x1)
    line.setAttribute('y1', y1)
    line.setAttribute('x2', x2)
    line.setAttribute('y2', y2)
    line.setAttribute('stroke', color)
    line.setAttribute('stroke-width', widthStroke)
    line.classList.add(class_name)
    elem.appendChild(line)
}

function createLineProductSvg () {
    let lines = document.querySelectorAll('.svg_line')
    if(lines.length) {
        for(let elem of lines) {
            let line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline')
            line.setAttribute('points', `0,36 ${window.innerWidth / 2},36 ${window.innerWidth / 2 + 40},4 ${window.innerWidth},4`)
            line.setAttribute('stroke', 'rgba(255,255,255,0.2)')
            line.setAttribute('stroke-width', '1')
            line.setAttribute('fill', 'none')
            elem.appendChild(line)
        }
    }
    
}
createLineProductSvg()

if (lineBlock.length && window.innerWidth > 700) {
    for (let elem of lineBlock) {
        createGridSvg(elem)
    }
}


function resize() {
    if (lineBlock.length && window.innerWidth > 700) {
        for (let i = 0; i <= lineBlock.length; i++) {
            createGridSvg(lineBlock[i])
        }
    }
}

window.onresize = resize

function footerMobileMenu() {
    if (window.innerWidth < 630) {
        $('.footer_top_right > ul h3').click(function (event) {
            $(this).toggleClass('active')
            $(this).next().slideToggle();
            event.stopPropagation();
        });
    }
} footerMobileMenu()

if (window.innerWidth > 930) {
    SmoothScroll({
        // Время скролла 400 = 0.4 секунды
        animationTime: 800,
        // Размер шага в пикселях 
        stepSize: 75,

        // Дополнительные настройки:

        // Ускорение 
        accelerationDelta: 30,
        // Максимальное ускорение
        accelerationMax: 2,

        // Поддержка клавиатуры
        keyboardSupport: true,
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll: 50,

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Поддержка тачпада
        touchpadSupport: true,
    })
}


function counterNumbers(elem, speed, round) {

    $(elem).each(function () {

        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: speed,
            easing: 'swing',
            step: function (now) {
                $(this).text(round ? +now.toFixed(1) : Math.ceil(now));
            }
        });
    });
}
let isCountActivate = true
if ($('.about_count_block')) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300 && isCountActivate) {
            isCountActivate = false
            counterNumbers('.count_number', 3000, false)
            counterNumbers('.count_number_fixed', 3000, true)
        }
    })
}

$(".questions-block").click(function () {
    $(this).children('.questions-block-cont').slideToggle()
})

function getAndroidVersion(ua) {
    ua = (ua || navigator.userAgent).toLowerCase(); 
    var match = ua.match(/android\s([0-9\.]*)/i);
    return match ? match[1] : undefined;
};
if(parseInt(getAndroidVersion(), 10) < 8) {
    $('.cloud').css('display', 'none')
}


reviewParallax()

$(document).ready(function() {
    $("body").css("display", "none");
    $("body").css("opacity", "1");

    $("body").fadeIn(2000);

	$("a.transition_page").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});


function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }
  function showModal(modal) {
    $(modal).modal({
        fadeDuration: 100,
        showClose: false
      });   
  }
  function showModalDiscount(modal, elem) {
    showModal(modal)
    
  }


  function changeLabelMessenger (elem) {
      $(elem).next().children().text(elem.value)
  }

//   var inputNumber = document.querySelector(".number_phone");
//   window.intlTelInput(inputNumber, {
//     // any initialisation options go here
//   });

var listCountries = $.masksSort($.masksLoad("https://cdn.rawgit.com/andr-04/inputmask-multi/master/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
var maskOpts = {
    inputmask: {
        definitions: {
            '#': {
                validator: "[0-9]",
                cardinality: 1
            }
        },
        showMaskOnHover: false,
        autoUnmask: true,
        clearMaskOnLostFocus: false
    },
    match: /[0-9]/,
    replace: '#',
    listKey: "mask"
};

var maskChangeWorld = function(maskObj, determined) {
    if (determined) {
        var hint = maskObj.name_en;
        if (maskObj.desc_ru && maskObj.desc_en != "") {
            hint += " (" + maskObj.desc_en + ")";
        }
        $(".country_number").html(hint);
    } else {
        $(".country_number").html("");
    }
}
$('.number_phone').inputmask("remove");

$('.number_phone').inputmasks($.extend(true, {}, maskOpts, {
    list: listCountries,
    onMaskChange: maskChangeWorld
}));
