import styled from "@emotion/styled";

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

	@media (max-width: 600px) {
		top: 2.5rem;
		left: auto;
		right: 7rem;
	}
`;

export const Sound = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4rem;
	height: 4rem;
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	cursor: pointer;
	z-index: 3;

	@media (max-width: 600px) {
		top: 2rem;
		left: auto;
		right: 10.5rem;
	}
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
