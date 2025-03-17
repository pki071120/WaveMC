import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 전체 컨테이너
export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 2;
	position: absolute;
`;

// 로고 위치
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

// Discord 링크 버튼
export const DiscordLink = styled.a`
	display: flex;
	align-items: center;
	width: 50px;
	height: 50px;
	z-index: 1;
	position: absolute;
	bottom: 2rem;
	left: 2rem;

	@media (max-width: 900px) {
		top: 2.5rem;
		left: auto;
		right: 6rem;
	}

	@media (max-width: 375px) {
		right: 4rem;
	}
`;

// 사운드 버튼
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

	@media (max-width: 900px) {
		top: 2rem;
		right: 9rem;
	}

	@media (max-width: 375px) {
		right: 7rem;
	}
`;

// 페이지 Wrapper
export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	z-index: 2;
`;

// 각 아이템
export const Item = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

// 이미지 스타일
export const Img = styled.img`
	width: 100vw;
	height: 100vh;
	${({ type }) =>
		type === "villages"
			? "object-fit : contain;"
			: "object-fit : cover; object-position: center;"};
`;

// 설명 박스 스타일
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

	@media (max-width: 375px) {
		bottom: 5rem;
	}
`;

// 설명 박스 내부 스타일
export const DescriptionBox = styled.div`
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

	@media (max-width: 375px) {
		width: 85vw;
		padding: 0.3rem;
	}
`;
