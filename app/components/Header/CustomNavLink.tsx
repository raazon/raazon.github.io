'use client'
import React from "react";
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'

interface CustomNavLinkProps {
	to: string;
	ariaLabel?: string;
	children: React.ReactNode;
	className?: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children }) => {
	const pathname = usePathname();
	const isActive = to === pathname;

	return (
		<>
			<Link href={to} className={`${isActive ? 'nav-link active' : 'nav-link'}`}>
				{children}
				{isActive && <span className="sr-only">(current)</span>}
			</Link>
		</>
	);
};

export default CustomNavLink;
