$(document).ready(function(){
//  $('.stories-slider__container').slick({
//    infinite: true,
//    slidesToShow: 3,
//    slidesToScroll: 3,
//    prevArrow: $('.stories-slider__button--prev'),
//    nextArrow: $('.stories-slider__button--next')
//  });
//  $('.testimonial-slider__wrapper').slick({
//    infinite: true,
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    prevArrow: $('.testimonial-slider__button--prev'),
//    nextArrow: $('.testimonial-slider__button--next')
//  });
	$('.input-item select').selectpicker();
//	$('.input-item .dropdown-toggle').mouseenter(function(){
//		$(this).click();
//	});
//	$('.input-item .dropdown-toggle').mouseleave(function(){
//		$(this).click();
//	});
		$('.datepicker').datepicker({
			format: 'dd/mm/yyyy',
			autoclose: 'true'
		});
})