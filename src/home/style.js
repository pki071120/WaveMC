import styled from "@emotion/styled";

export const Background = styled.div`
	background-image: url("${process.env.PUBLIC_URL}/png/wavemc.png");
	background-size: auto;
	background-repeat: no-repeat;
	background-position: center;
	background-color: black;
`;

export const CheckBox = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	filter: blur(100%);
	height: 100vh;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	gap: 3rem;
`;

export const Text = styled.p`
	display: flex;
	width: 100%;
	height: 50%;
	justify-content: center;
	align-items: flex-end;
	color: #40a9ff;
	font-size: 1.3rem;
	font-family: "HeirOfLightBold";
`;

export const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 50%;
	justify-content: center;
	align-items: flex-start;
`;

export const Button = styled.span`
	color: #00efff;
	padding: 0 1rem;
	cursor: pointer;
	font-size: 1.8rem;

	:nth-of-type(1) {
		border-right: 1px solid lightblue;
	}
	:nth-of-type(2) {
		border-left: 1px solid lightblue;
	}
`;

export const Page = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	background-color: black;
	top: 0;
	z-index: 1;
`;

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 2;
	position: absolute;
`;

export const Header = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	background: none;

	a {
		width: 50px;
		height: 50px;
		z-index: 1;
	}
`;

export const Logo = styled.img`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
`;

export const SubPagesWrapper = styled.div`
	display: flex;
	position: absolute;
	bottom: 1rem;
	gap: 2rem;
	width: 100%;
	height: auto;
	justify-content: center;
	align-items: center;
	color: #a4a4a4;

	span {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;

		h2 {
			display: flex;
			align-items: center;
			height: 20px;
		}

		img {
			width: 110px;
			height: 60px;
			transition: filter 0.3s ease;

			&:hover {
				filter: brightness(1.2);
			}
		}

		div {
			width: 110px;
			height: 60px;
			transition: filter 0.3s ease;
			:focus {
				outline: none;
			}

			&:hover {
				filter: brightness(1.01);
			}
		}
	}
`;
