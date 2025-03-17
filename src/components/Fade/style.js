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
				return "left: 1.5rem; bottom: 15%;";
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
					return "background: rgba(256,256,256, 0.1);";
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
			${({ idx, type }) => {
				switch (idx) {
					case 0:
						return type === "boss" ? "color: #9acfff;" : "color: #e9e987;";
					case 1:
						return type === "boss" ? "color: #afaaff;" : "color: #1c9f;";
					case 2:
						return type === "boss" ? "color: #fff;" : "color:  #dddddd;";
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
			${({ idx, type }) => {
				switch (idx) {
					case 0:
						return type === "boss" ? "color: #aacaff;" : "color: #cdcd7d;";
					case 1:
						return type === "boss" ? "color: #cfc0f0;" : "color: #1a9f;";
					case 2:
						return type === "boss" ? "color: #efefef;" : "color: #aaaaaa;";
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
