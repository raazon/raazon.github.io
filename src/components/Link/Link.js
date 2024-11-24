import React from 'react'

const Link = ({ link, text, ...props }) => {
	return (
		<>
			<a href={link} {...props}>{text}</a>
		</>
	)
}

export default Link