import React, { useState } from "react";
import * as S from "./style";
import Fade from "./Fade";
import ReactPlayer from "react-player";
import Discord from "../SVG/Discord";
const Home = () => {
	const [page, setPage] = useState(0);
	const [isMuted, setIsMuted] = useState(false);
	const path = `${process.env.PUBLIC_URL}/img`;
	return (
		<>
			{page === 0 && (
				<S.Background>
					<S.CheckBox>
						<S.Text>
							소리가 포함된 영상이 재생됩니다. 컨텐츠를 더욱 즐기려면 'on'을
							선택하세요.
						</S.Text>
						<S.ButtonWrapper>
							<S.Button
								onClick={() => {
									setIsMuted(false);
									setPage(1);
								}}
							>
								ON
							</S.Button>
							<S.Button
								onClick={() => {
									setIsMuted(true);
									setPage(1);
								}}
							>
								OFF
							</S.Button>
						</S.ButtonWrapper>
					</S.CheckBox>
				</S.Background>
			)}
			{page === 1 && (
				<S.Page>
					<Fade Des={true} />
				</S.Page>
			)}
			{page === 2 && (
				<S.Page>
					<ReactPlayer
						url={`${process.env.PUBLIC_URL}/video/wavemc_trailer.mp4`}
						playing={true}
						width={"100vw"}
						height={"100vh"}
						loop={true}
						controls={false}
						pip={true}
						muted={isMuted}
					/>
				</S.Page>
			)}
			{page === 3 && (
				<S.Page>
					<Fade />
				</S.Page>
			)}
			<S.Container>
				<S.Header>
					<S.Logo src={`${path}/waveMC.png`} alt="Logo" />
					<a
						href="https://discord.gg/wavemc"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Discord />
					</a>
				</S.Header>
				<S.SubPagesWrapper>
					<span onClick={() => setPage(1)}>
						<h2>[개척하라]</h2>
						<Fade Des={false} />
					</span>
					<span onClick={() => setPage(2)}>
						<h2>[토벌하라]</h2>
						<img src={`${path}/background/imageSub2.png`} alt="Thumbnail1" />
					</span>
					<span onClick={() => setPage(3)}>
						<h2>[함께하라]</h2>
						<img src={`${path}/background/imageSub3.png`} alt="Thumbnail2" />
					</span>
				</S.SubPagesWrapper>
			</S.Container>
		</>
	);
};

export default Home;
