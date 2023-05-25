$(function(){
    $(".menu, .header__content, #body").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

    $('.menu__btn, .menu a').on('click', function(){
        $('.menu').toggleClass('menu--active');
    });

    var mixer = mixitup('.portfolio__content');
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
});