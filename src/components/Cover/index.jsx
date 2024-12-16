import React from "react";
import * as S from "./style";
import Fade from "../Fade";
import { Discord, WaveMC } from "../../SVG";

const Cover = ({ navigation }) => {
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
			<S.SubPagesWrapper>
				<span onClick={() => navigation("/main")}>
					<h2>[개척하라]</h2>
					<Fade Des={false} />
				</span>
				<span onClick={() => navigation("/trailer")}>
					<h2>[토벌하라]</h2>
					<img
						src={`https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/imageSub2-n443WrnSxclIyTnZHl8VAveUdqNZWI.png`}
						alt="Thumbnail1"
					/>
				</span>
				<span onClick={() => navigation("/villages")}>
					<h2>[함께하라]</h2>
					<img
						src={`https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/imageSub3-fKXymvWrPlDRkJExsdQul21RIz40Le.png`}
						alt="Thumbnail2"
					/>
				</span>
			</S.SubPagesWrapper>
		</S.Container>
	);
};

export default Cover;
