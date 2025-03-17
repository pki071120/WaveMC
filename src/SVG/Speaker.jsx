import React from "react";

const Speaker = ({ isMuted }) => {
	return (
		<>
			{!isMuted ? (
				<svg
					width="90"
					height="90"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.8 6.40002L16.3 7.40002C17.4 8.80002 18 10.6 18 12.5C18 14.2 17.5 15.7 16.7 17.1L17.4 17.9C18.5 16.4 19.1 14.5 19.1 12.5C19 10.2 18.2 8.10002 16.8 6.40002Z"
						fill="#fff"
						fillOpacity="1"
					/>
					<path
						d="M15.8 8.40002L15.3 9.50002C15.8 10.4 16.1 11.4 16.1 12.5C16.1 13.5 15.8 14.5 15.4 15.4L16.1 16.3C16.7 15.2 17.1 13.9 17.1 12.6C17 11 16.6 9.60002 15.8 8.40002Z"
						fill="#fff"
						fillOpacity="1"
					/>
					<path d="M9 9H5V15H9L14 19V5L9 9Z" fill="#fff" fillOpacity="1" />
				</svg>
			) : (
				<svg
					width="90"
					height="90"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M8 9H4V15H8L13 19V5L8 9Z" fill="#fff" fillOpacity="1" />
					<path
						d="M19.9 9.60002L19.1 8.90002L16.8 11.3L14.4 8.90002L13.6 9.60002L16 12L13.6 14.4L14.4 15.1L16.8 12.7L19.1 15.1L19.9 14.4L17.5 12L19.9 9.60002Z"
						fill="#fff"
						fillOpacity="1"
					/>
				</svg>
			)}
		</>
	);
};

export default Speaker;
