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
    if(reviewPhotos) {
        $(window).scroll(function(){
            if($(this).scrollTop() > 2700) {
                reviewPhotos.style.transform = `translateY(-${($(this).scrollTop() - 2700) / 3}px) translateZ(0)`
            }
        })
    }
    if(kokoTranslate) {
        // let x = 0;
        // let y = 0;
        $(window).scroll(function(){
            if($(this).scrollTop() > 400) {
                
                // x = 480 - ($(this).scrollTop() - 100) / 2
                // if(x < 0) {
                //     x = 0
                // }
                // y = -840 + ($(this).scrollTop() - 100)
                // if(y > 0) {
                //     y = 0
                // }
                // kokoTranslate.style.transform = `translate(${x}px, ${y}px) translateZ(0)`
                // if($(this).scrollTop() > 600) {
                //     kokoTranslate.style.transform = `translate(${x}px, ${y}px) translateZ(0) scale(-1, 1)`
                // }
                kokoTranslate.classList.add('active')
            } else {
                kokoTranslate.classList.remove('active')
            }


        })
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