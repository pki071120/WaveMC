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

export const Background = styled.div`
	background-size: auto;
	background-repeat: no-repeat;
	background-position: center;
	background-color: black;
	animation: ${({ isFading }) => (isFading ? fadeOut : fadeIn)} 4s forwards;
	text-align: center;
`;

export const CheckBox = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	align-items: center;
	filter: blur(100%);
	height: 100vh;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	gap: 3rem;
`;

export const Text = styled.p`
	display: flex;
	width: 100vw;
	height: 50vh;
	justify-content: center;
	align-items: flex-end;
	color: #40a9ff;
	font-size: 1.3rem;
	font-family: "HeirOfLightBold";
	@media (max-width: 430px) {
		width: 80vw;
		font-size: 1.1rem;
	}
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

	@media (max-width: 430px) {
		font-size: 1.5rem;
	}
`;
