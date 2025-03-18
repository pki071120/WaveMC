import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	height: 100vh;
	z-index: 2;
	position: absolute;
`;

export const Header = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	margin-right: 1.5rem;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70px;
	height: 70px;
	@media (max-width: 600px) {
	}
`;

export const Footer = styled.div`
	display: flex;
	margin: 1rem;
	width: 95vw;
	justify-content: space-around;
	align-items: end;

	@media (max-width: 600px) {
		height: 95vh;
		position: absolute;
	}
`;

export const DiscordLink = styled.a`
	display: flex;
	align-items: center;
	width: 50px;
	height: 50px;
	z-index: 1;
`;

export const Sound = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4rem;
	height: 4rem;
	cursor: pointer;
	z-index: 3;
`;

export const SubPagesWrapper = styled.div`
	display: flex;
	gap: 2rem;
	width: 100%;
	height: auto;
	justify-content: center;
	align-items: center;
	color: #dadada;

	@media (max-width: 600px) {
		align-items: flex-end;
	}

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
