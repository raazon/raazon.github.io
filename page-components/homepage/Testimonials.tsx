import Image from "next/image";
import { FC, useEffect } from 'react';

interface TestimonialsProps {
	hide?: string | boolean;
}

const Testimonials: FC<TestimonialsProps> = ({ hide = false }) => {
	if (hide) {
		return null;
	}

	const testimonials = [
		{
			quote: "Razon is a brilliant full stack web developer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
			name: "Brandon James",
			info: "Project Manager, Google",
			img: "/assets/images/clients/profile-1.png",
		},
		{
			quote: "Razon is a brilliant full stack web developer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
			name: "Kate Sanders",
			info: "Project Manager, Uber",
			img: "/assets/images/clients/profile-2.png",
		},
		{
			quote: "Razon is a brilliant full stack web developer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
			name: "James Lee",
			info: "Project Manager, Amazon",
			img: "/assets/images/clients/profile-3.png",
		},
		{
			quote: "Razon is a brilliant full stack web developer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
			name: "James Lee",
			info: "Project Manager, Amazon",
			img: "/assets/images/clients/profile-4.png",
		},
		{
			quote: "Razon is a brilliant full stack web developer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
			name: "James Lee",
			info: "Project Manager, Amazon",
			img: "/assets/images/clients/profile-5.png",
		},
		{
			quote: "Razon is a brilliant full stack web developer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
			name: "James Lee",
			info: "Project Manager, Amazon",
			img: "/assets/images/clients/profile-6.png",
		},
	];

	useEffect(() => {
		const initSlider = () => {
			const testimonialCarousel = document.querySelector('.testimonial-carousel');

			if (
				testimonialCarousel &&
				typeof window !== "undefined" &&
				(window as any).tns &&
				!testimonialCarousel.classList.contains("tns-initialized")
			) {
				(window as any).tns({
					container: testimonialCarousel,
					loop: true,
					items: 3,
					responsive: {
						0: { items: 1 },
						768: { items: 2 },
						1200: { items: 3 },
					},
					slideBy: 'page',
					nav: true,
					autoplay: true,
					autoplayButtonOutput: false,
					mouseDrag: true,
					lazyload: true,
					gutter: 30,
					navPosition: 'bottom',
					controls: false,
					speed: 800,
				});
				testimonialCarousel.classList.add("tns-initialized");
			}
		};

		// Wait a little in case script is still loading
		const timer = setTimeout(initSlider, 300);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div className="container">
				<hr />
			</div>

			<section className="testimonials-section p-3 p-lg-5">
				<div className="container">
					<h2 className="section-title font-weight-bold mb-5">Testimonials</h2>

					<div className="testiomonial-carousel-container">
						<div className="testimonial-carousel tiny-slider">
							{
								testimonials.map((testimonial, index) => (
									<div className="item" key={index}>
										<div className="item-inner">
											<div className="quote-holder">
												<blockquote className="quote-content">
													{testimonial.quote}
												</blockquote>
												<i className="fas fa-quote-left"></i>
											</div>
											<div className="source-holder">
												<div className="source-profile">
													<Image
														src={testimonial.img}
														alt={testimonial.name}
														width={60}
														height={60}
													/>
												</div>
												<div className="meta">
													<div className="name">{testimonial.name}</div>
													<div className="info">{testimonial.info}</div>
												</div>
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Testimonials;