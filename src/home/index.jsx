import React, { useState } from "react";
import * as S from "./style";
import Fade from "./Fade";
import ReactPlayer from "react-player";
import { Discord, WaveMC } from "../SVG";

const Home = () => {
	const [page, setPage] = useState(0);
	const [isMuted, setIsMuted] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const handlePageChange = (newPage) => {
		if (newPage === page) return false;
		if (page > 0) {
			setPage(newPage);
			return false;
		}
		setIsTransitioning(true);
		setTimeout(() => {
			setPage(newPage);
			setIsTransitioning(false);
		}, 2000);
	};

	return (
		<>
			{page === 0 && (
				<S.Background isFading={isTransitioning}>
					<S.CheckBox>
						<S.Text>
							소리가 포함된 영상이 재생됩니다. 컨텐츠를 더욱 즐기려면 'on'을
							선택하세요.
						</S.Text>
						<S.ButtonWrapper>
							<S.Button
								onClick={() => {
									setIsMuted(false);
									handlePageChange(1);
								}}
							>
								ON
							</S.Button>
							<S.Button
								onClick={() => {
									setIsMuted(true);
									handlePageChange(1);
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
						url={`https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/video/wavemc_trailer-cT5XupuXCp38bZg4BFcGkqU9LXls0X.mp4`}
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
				<S.Logo>
					<WaveMC />
				</S.Logo>
				<S.DiscordLink
					href="https://discord.gg/wavemc"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Discord />
				</S.DiscordLink>
				<S.SubPagesWrapper>
					<span onClick={() => handlePageChange(1)}>
						<h2>[개척하라]</h2>
						<Fade Des={false} />
					</span>
					<span onClick={() => handlePageChange(2)}>
						<h2>[토벌하라]</h2>
						<img
							src={`https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/imageSub2-n443WrnSxclIyTnZHl8VAveUdqNZWI.png`}
							alt="Thumbnail1"
						/>
					</span>
					<span onClick={() => handlePageChange(3)}>
						<h2>[함께하라]</h2>
						<img
							src={`https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/imageSub3-fKXymvWrPlDRkJExsdQul21RIz40Le.png`}
							alt="Thumbnail2"
						/>
					</span>
				</S.SubPagesWrapper>
			</S.Container>
		</>
	);
};

export default Home;
