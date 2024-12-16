import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
		background-color: black;
  }
  100% {
		opacity: 1;
		background-color: black;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
		background-color: black;
  }
  100% {
		opacity: 0;
		background-color: black;
  }
`;

const path = "../SVG/WaveMC.jsx";

export const Background = styled.div`
	background-image: url(${path});
	background-size: auto;
	background-repeat: no-repeat;
	background-position: center;
	background-color: black;
	animation: ${({ isFading }) => (isFading ? fadeOut : fadeIn)} 2s forwards;
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
	animation: ${({ isFading }) => (isFading ? fadeOut : fadeIn)} 2s forwards;
`;

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 2;
	position: absolute;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70px;
	height: 70px;
	position: absolute;
	top: 2rem;
	right: 2rem;
`;

export const DiscordLink = styled.a`
	display: flex;
	align-items: center;
	width: 50px;
	height: 50px;
	z-index: 1;
	position: absolute;
	bottom: 2rem;
	left: 2rem;
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
			border-radius: 0.4rem;

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
