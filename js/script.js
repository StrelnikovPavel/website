// function ibg() {

// 	let ibg = document.querySelectorAll(".ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if (ibg[i].querySelector('img')) {
// 			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 		}
// 	}
// }

// ibg();


function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

$(function () {
	$('.icon-menu').click(function (event) {
		$('.aside, .icon-menu').toggleClass('active');
	});
});

$(function () {
	$('.menu__brg').click(function (event) {
		$('.menu__brg, .bottom-header_content').toggleClass('active');
	});
});

/*
document.querySelectorAll(".tabs__item").forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '')

		document.querySelectorAll('.tabs__item').forEach(
			(child) => child.classList.remove('.tabs__item-active')
		);
		document.querySelectorAll('.tabs__block').forEach(
			(child) => child.classList.remove('.tabs__block-active')
		);

		item.classList.add('.tabs__item');
		document.getElementById(id).classList.add('tabs__block');
	})
);*/


$(document).ready(function () {
	$('.tabs__item').click(function (e) {
		e.preventDefault();

		$('.tabs__item').removeClass('tabs__item-active');
		$('.tabs__block').removeClass('tabs__block-active');

		$(this).addClass('tabs__item-active');
		$($(this).attr('href')).addClass('tabs__block-active');
	});
	$('.tabs__item:first').click();
});