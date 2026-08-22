"use strict";

const testimonialCarousel = document.querySelector('.testimonial-carousel');
if (testimonialCarousel) {
	const slider = tns({
		container: testimonialCarousel,
		loop: true,
		items: 3,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}

		},
		slideBy: 'page',
		nav: true,
		autoplay: true,
		autoplayButtonOutput: false,
		mouseDrag: true,
		lazyload: true,
		gutter: 30,
		navPosition: 'bottom',
		mouseDrag: true,
		controls: false,
		speed: 800,

	});
}
