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