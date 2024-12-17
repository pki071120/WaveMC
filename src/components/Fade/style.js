import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	z-index: 2;
`;

export const Item = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

export const Img = styled.img`
	width: 100vw;
	height: 100vh;
	${({ type }) =>
		type === "villages"
			? "object-fit : contain;"
			: "object-fit : cover; object-position: center;"};
`;

export const Description = styled.div`
	display: flex;
	position: absolute;
	z-index: 1;
	border-radius: 2rem;

	${({ idx }) => {
		switch (idx) {
			case 0:
				return "left: 1.5rem; bottom: 20%;";
			case 1:
				return "left: 1.5rem; top: 30%;";
			case 2:
				return "right: 1.5rem; bottom: 20%;";
			case 3:
				return "right: 2rem; top: 22%;";
			case 4:
				return "left: 2rem; bottom: 20%;";
			case 5:
				return "right: 1.5rem; bottom: 18%;";
			case 6:
				return "right: 3rem; bottom: 20%;";
			case 7:
				return "left: 2rem; top: 17%;";
			case 8:
				return "left: 3rem; top: 25%;";
			case 9:
				return "left: 3rem; top: 15%;";
			default:
				return "";
		}
	}}

	@media (max-width: 430px) {
		width: 100vw;
		position: absolute;
		justify-content: center;
		top: auto;
		bottom: 7rem;
		right: auto;
		left: auto;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: 32rem;
		padding: 2rem;
		${({ idx }) => {
			switch (idx) {
				case 0:
					return "background: rgba(0,0,0, 0.1);";
				case 1:
					return "background: rgba(200,200,200, 0.1);";
				case 2:
					return "background: rgba(173, 187, 255, 0.1);";
				case 3:
					return "background: rgba(85, 85, 57, 0.276);";
				case 4:
					return "background: rgba(106, 76, 45, 0.528);";
				case 5:
					return "background: rgba(154, 197, 184, 0.1);";
				case 6:
					return "background: rgba(39, 48, 14, 0.452);";
				case 7:
					return "background: rgba(45, 42, 68, 0.488);";
				case 8:
					return "background: rgba(56, 92, 24, 0.101);";
				case 9:
					return "background: rgba(87, 38, 38, 0.503);";
				default:
					return "";
			}
		}}

		@media (max-width: 430px) {
			width: 80vw;
			padding: 0.5rem;
			gap: 0.8rem;
		}

		h2 {
			font-size: 2.2rem;
			${({ idx }) => {
				switch (idx) {
					case 0:
						return "color: #c5a0ff;";
					case 1:
						return "color: #e9e987;";
					case 2:
						return "color: #8892fc;";
					case 3:
						return "color: #e4c479ac;";
					case 4:
						return "color: #f1b252;";
					case 5:
						return "color: #5ce7d5;";
					case 6:
						return "color: #bdd255;";
					case 7:
						return "color: #a0abe9ff;";
					case 8:
						return "color: #4b924b;";
					case 9:
						return "color: #ff1818;";
					default:
						return "";
				}
			}}

			@media (max-width: 430px) {
				font-size: 1rem;
			}
		}
		p {
			font-size: 1rem;
			letter-spacing: 3px;
			line-height: 1.1rem;
			${({ idx }) => {
				switch (idx) {
					case 0:
						return "color: #e3d2ffff;";
					case 1:
						return "color: #bcbc6c;";
					case 2:
						return "color: #7290d1;";
					case 3:
						return "color: #d8c494ff;";
					case 4:
						return "color: hsl(28, 50%, 60%);";
					case 5:
						return "color: #94f6f4;";
					case 6:
						return "color: #bbd169;";
					case 7:
						return "color: #b2bad2ff;";
					case 8:
						return "color: #1b901b;";
					case 9:
						return "color: #ff1e00;";
					default:
						return "";
				}
			}}
			@media (max-width: 430px) {
				font-size: 0.7rem;
				line-height: 1rem;
				letter-spacing: 1px;
			}
		}
	}
`;
