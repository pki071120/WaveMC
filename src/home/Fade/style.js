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
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const Description = styled.div`
	display: flex;
	position: absolute;
	z-index: 1;
	padding: 2rem;
	background-color: ${({ idx }) =>
		idx > 4 ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)"};
	${({ idx }) => {
		switch (idx) {
			case 0:
				return "left: 1.5rem; top: 20%;";
			case 1:
				return "left: 1.5rem; top: 30%;";
			case 2:
				return "left: 1.5rem; top: 35%;";
			case 3:
				return "right: 2rem; bottom: 18%;";
			case 4:
				return "right: 1.5rem; bottom: 25%;";
			case 5:
				return "left: 2rem; bottom: 30%;";
			case 6:
				return "right: 2rem; bottom: 25%;";
			case 7:
				return "left: 3rem; top: 50%;";
			case 8:
				return "right: 3rem; top: 50%;";
			case 9:
				return "left: 0; bottom: 0;";
			default:
				return "";
		}
	}}
	div {
		display: flex;
		flex-direction: column;
		width: 30rem;
		gap: 1.5rem;

		h2 {
			font-size: 2.2rem;
		}
		p {
			font-size: 0.9rem;
			letter-spacing: 3px;
			line-height: 1rem;
		}
	}
`;
