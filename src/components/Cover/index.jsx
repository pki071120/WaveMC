import React from "react";
import * as S from "./style";
import { Discord, WaveMC, Speaker } from "../../SVG";

const Cover = ({ navigation, isMuted, setIsMuted }) => {
	return (
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
			<S.Sound onClick={() => setIsMuted((prev) => !prev)}>
				<Speaker isMuted={isMuted} />
			</S.Sound>
			<S.SubPagesWrapper>
				<span onClick={() => navigation("/main")}>
					<h2>[개척하라]</h2>
					<img
						src={`https://mcwave.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A9%E1%86%AF%E1%84%90%E1%85%B3.png`}
						alt="Thumbnail1"
					/>
				</span>
				<span onClick={() => navigation("/trailer")}>
					<h2>[토벌하라]</h2>
					<img
						src={`https://mcwave.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7.png`}
						alt="Thumbnail2"
					/>
				</span>
				<span onClick={() => navigation("/villages")}>
					<h2>[함께하라]</h2>
					<img
						src={`https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/village1-yW2WgVBN1n0ZakdWws7AstMzOKGLmf.png`}
						alt="Thumbnail2"
					/>
				</span>
			</S.SubPagesWrapper>
		</S.Container>
	);
};

export default Cover;
