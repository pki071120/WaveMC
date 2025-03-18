import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	height: 100dvh;
	z-index: 1;
	position: fixed;
`;

export const Header = styled.header`
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
`;

export const Footer = styled.footer`
	display: flex;
	margin: 1rem;
	width: 95vw;
	justify-content: space-around;
	align-items: end;
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
	align-items: center; /* ✅ 요소들이 하단으로 안 붙도록 조정 */
	color: #dadada;

	@media (max-width: 600px) {
		align-items: center; /* ✅ flex-end 제거 */
		justify-content: baseline;
	}
`;

export const Nav = styled.span`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.5rem;

	@media (max-width: 600px) {
		width: 33%;
	}
`;

export const TitleText = styled.h2`
	display: flex;
	align-items: center;
	height: 20px;
`;

export const TitleImg = styled.img`
	width: 6.875rem;
	height: 3.75rem;
	transition: filter 0.3s ease;
	border-radius: 0.4rem;

	&:hover {
		filter: brightness(1.2);
	}

	@media (max-width: 450px) {
		width: 100%;
		height: 4rem;
		object-fit: cover;
	}
`;
