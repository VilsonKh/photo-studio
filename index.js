$(function () {
	// SLIDERS

	$(".portfolio__gallery").slick({
		centerMode: true,
		slidesToShow: 3,
		arrows: true,
		prevArrow: ".gallery__button-left",
		nextArrow: ".gallery__button-right",
		dots: false,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					// adaptiveHeight: true
				},
			},
		],
	});

	$(".locations__gallery").slick({
		slidesToShow: 3,
		arrows: true,
		prevArrow: ".locations__button-left",
		nextArrow: ".locations__button-right",
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	$(".reviews__carousel").slick({
		slidesToShow: 3,
		arrows: true,
		prevArrow: ".carousel__button-left",
		nextArrow: ".carousel__button-right",
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 1145,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});

	// ACCORDIONS

	const ideaArrow = $("#ideaArrow");
	const ideaButton = $("#ideaButton");
	const ideaExpand = $(".idea__expand");

	ideaButton.on("click", function () {
		if (ideaExpand.height()) {
			ideaExpand.css("height", "0");
			ideaArrow.css("transform", "rotate(0deg)");
		} else {
			ideaExpand.css("height", "auto");
			ideaArrow.css("transform", "rotate(180deg)");
		}
	});

	const trendArrow = $("#trendArrow");
	const trendButton = $("#trendButton");
	const trendExpand = $(".trend__expand");

	trendButton.on("click", function () {
		if (trendExpand.height()) {
			trendExpand.css("height", "0");
			trendArrow.css("transform", "rotate(0deg)");
		} else {
			trendExpand.css("height", "auto");
			trendArrow.css("transform", "rotate(180deg)");
		}
	});

	// OPEN FULLSCREEN

	const imageFullscreen = $(".imageFullscreen");
	const imageFullscreenIMG = $(".imageFullscreen__img");

	$(document).on("click", ".slick-slide", function (e) {
		if (!$(e.target).attr("src")) return;

		imageFullscreen.addClass("active");
		const target = $(e.target);
		imageFullscreenIMG.attr("src", target.attr("src"));
	});

	$(".imageFullscreen").on("click", function (e) {
		if ($(e.target).attr("src")) return;
		imageFullscreen.removeClass("active");
	});

	// OPEN BURGER-MENU

	const burgerButton = $(".menu-burger");
	const burgerMenu = $(".burger-menu");
	const burgerLink = $(".burger-menu__link");

	burgerButton.on("click", function () {
		burgerMenu.toggleClass("active");
	});

	burgerLink.on("click", function () {
		burgerMenu.toggleClass("active");
	});
});
