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
     
    $('#burger_menu').click(function(){
        $(this).addClass('active');
        $('.main-nav').addClass('active')
        // btn.style.transform = `translateX(${translate - 50}px)  translateZ(0)`
    })
    $(document).mouseup(function (e){
		var div = $(".main-nav"); 
		if ($('#burger_menu').hasClass('active') && !div.is(e.target)
		    && div.has(e.target).length === 0) {
                $('#burger_menu').removeClass('active');
                $('.main-nav').removeClass('active')
                // btn.style.transform = `translateX(0) translateZ(0)`
		}
	});
    $('#closeMainMenu').click(function(){
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
if(isInternetExplorer()) {
    alert(`Внимание, Ваш браузер может не корректно отображать эту страницу. Пожалуйста, возспользуйтесь другим браузером 
    
Attention, your browser may not display this page correctly. Please use another browser`)
}

if(window.innerWidth > 1000) {
    let cloud = document.querySelectorAll('.cloud');
    let cloudBottom = document.querySelector('.cloud_bottom');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight; 
        for(let elem of cloud) {
            elem.style.transform = 'translate(' + x * 170 + 'px, ' + y * 150 + 'px) translateZ(0)';
        } 
        cloudBottom.style.transform = 'translate(' + x * 170 + 'px, ' + y * 10 + 'px) translateZ(0)';
    });
}



let reviewParallax = () => {
    let reviewPhotos = document.querySelector('.review_photos');
    let kokoTranslate = document.querySelector('.koko_translate')
    if(reviewPhotos && reviewPhotos.classList.contains('main_page') && window.innerWidth > 1000) {
        $(window).scroll(function(){
            if($(this).scrollTop() > 2700) {
                reviewPhotos.style.transform = `translateY(-${($(this).scrollTop() - 2700) / 3}px) translateZ(0)`
            }
        })
    }
    if(reviewPhotos && reviewPhotos.classList.contains('product_page') && window.innerWidth > 1000) {
        $(window).scroll(function(){
            if($(this).scrollTop() > 6600) {
                reviewPhotos.style.transform = `translateY(-${($(this).scrollTop() - 6000 ) / 3}px) translateZ(0)`
            }
        })
    }
    if(kokoTranslate && window.innerWidth > 1050) {
        let x = 0;
        let y = 0;
        $(window).scroll(function(){
            if($(this).scrollTop() > 100) {
                
                x = 480 - ($(this).scrollTop() - 100) / 2
                if(x < 0) {
                    x = 0
                }
                y = -840 + ($(this).scrollTop() - 100) / 1.1

                if(y > 0) {
                    y = 0
                }
                kokoTranslate.style.transform = `translate(${x}px, ${y}px) translateZ(0)`
                if($(this).scrollTop() > 600) {
                    kokoTranslate.style.transform = `translate(${x}px, ${y}px) translateZ(0) scale(-1, 1)`
                }
                // kokoTranslate.classList.add('active')
            } 
            // else {
            //     kokoTranslate.classList.remove('active')
            // }


        })
    } else if(kokoTranslate && window.innerWidth < 1050) {
        kokoTranslate.style.display = 'none'
    }
}
reviewParallax()

let btnToTop = document.querySelector('.toTopBtn')
$(window).scroll(function(){
    if($(this).scrollTop() > 700) {
        btnToTop.style.opacity = '1'
        btnToTop.style.pointerEvents = 'visible'
    } else {
        btnToTop.style.opacity = '0';
        btnToTop.style.pointerEvents = 'none'
    }
})
$('.toTopBtn').on('click', function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
});


const fast_charge_block = document.querySelector('.fast_charge_block')
let charging_kokovolta = ''
let charging_other = ''
let charging_kokovolta_span = ''
let charging_other_span =''
if(fast_charge_block) {
    charging_kokovoltaBlock = fast_charge_block.querySelector('.charging_kokovolta')
    charging_kokovolta = fast_charge_block.querySelector('.charging_kokovolta .charging_wrap div')
    charging_other = fast_charge_block.querySelector('.charging_other .charging_wrap div')
    charging_kokovolta_span = fast_charge_block.querySelector('.charging_kokovolta .charging_wrap>span')
    charging_other_span = fast_charge_block.querySelector('.charging_other .charging_wrap>span')  
    let kabel = document.querySelector('.kabel')
    let charging_block = document.querySelector('.charging_block')
    let isStartAnimation = true
    let scroll = 2850
    if(window.innerWidth < 750) {
        scroll = 2700
    }
    if(window.innerWidth < 399) {
        scroll = 2300
    }
    $(window).scroll(function(){
        if($(this).scrollTop() > scroll && isStartAnimation) {
            kabel.className = 'kabel active'
            isStartAnimation = false   
            setTimeout(function(){
                charging_block.className = 'charging_block active'
            }, 1100)

            setTimeout(function(){
                animateCharging() 
            }, 1500)
             
        }
    })
}
let widthChargingKoko = 0
let widthChargingOther = 0
let requestChargin = true;
let animateCharging = () => {
    if(widthChargingKoko > 100) {
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
    if(requestChargin) {
        requestChargin = window.requestAnimationFrame(animateCharging)
    }
}
if(window.innerWidth > 930) {
    const swiperProduct = new Swiper('.you_get_slider', {
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

if(window.innerWidth < 930) {
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
if(window.innerWidth > 930) {
const verticalSwiper = new Swiper('.vertical_slider', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 30,
    mousewheel: true,
});
}

  function createLineSvg () {
      let line = document.querySelectorAll('.svg_line')
    for(let i of line) {
        i.innerHTML = `<polyline points="0,38 ${window.innerWidth / 2},38 ${window.innerWidth / 2 + 40},2  ${window.innerWidth},2" stroke="rgba(255,255,255,0.4)" fill="none"/>`
    }
  }createLineSvg () 


  function resize() {
    createLineSvg () 
  }

  window.onresize = resize

function footerMobileMenu() {
    if(window.innerWidth < 630) {
        $('.footer_top_right > ul h3').click(function (event) {
            $(this).toggleClass('active')
            $(this).next().slideToggle();
            event.stopPropagation();
        });
    }
}footerMobileMenu()