import Image from "next/image";
import Link from 'next/link';
import { FC } from 'react';


interface PostsProps {
	hide?: string | boolean;
}

const Posts: FC<PostsProps> = ({ hide = false }) => {
	if (hide) {
		return null;
	}

	const posts = [
		{
			title: "Top 3 JavaScript Frameworks",
			slug: "top-3-javascript-frameworks",
			content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...",
			date: "Published 2 days ago",
			img: "/assets/images/blog/blog-post-thumb-card-1.jpg",
			link: "/project",
		},
		{
			title: "About Remote Working",
			slug: "about-remote-working",
			content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...",
			date: "Published a week ago",
			img: "/assets/images/blog/blog-post-thumb-card-2.jpg",
			link: "/project",
		},
		{
			title: "A Guide to Becoming a Full-Stack Developer",
			slug: "guide-to-full-stack-developer",
			content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...",
			date: "Published 3 weeks ago",
			img: "/assets/images/blog/blog-post-thumb-card-3.jpg",
			link: "/project",
		},
	];

	return (
		<>
			<section className="latest-blog-section p-3 p-lg-5">
				<div className="container">
					<h2 className="section-title font-weight-bold mb-5">Latest Blog Posts</h2>

					<div className="row">
						{
							posts.map((post, index) => (
								<div className="col-md-4 mb-5" key={index}>
									<div className="card blog-post-card">
										<Image
											src={post.img}
											alt={post.title}
											width={330}
											height={230}
											sizes="(max-width: 768px) 100vw, 330px"
											className="card-img-top h-auto"
										/>
										<div className="card-body">
											<h5 className="card-title">
												<Link className="theme-link" href={post.slug}>
													{post.title}
												</Link>
											</h5>
											<p className="card-text">{post.content}</p>
											<p className="mb-0">
												<Link className="text-link" href={post.slug}>
													Read more →
												</Link>
											</p>
										</div>
										<div className="card-footer">
											<small className="text-muted">{post.date}</small>
										</div>
									</div>
								</div>
							))
						}
					</div>

					<div className="text-center py-3">
						<Link className="btn btn-primary" href="/blog" aria-label="Blog Home">
							<svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"></path>
							</svg>
							View Blog
						</Link>
					</div>
				</div>
			</section>
		</>
	);

}

export default Posts;