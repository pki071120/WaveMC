import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Discord, WaveMC, Speaker } from "../../SVG";

const Cover = ({ navigation, isMuted, setIsMuted }) => {
	const [width, setWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<S.Container>
			<S.Header>
				{width <= 600 && (
					<S.Sound onClick={() => setIsMuted((prev) => !prev)}>
						<Speaker isMuted={isMuted} />
					</S.Sound>
				)}
				{width <= 600 && (
					<S.DiscordLink
						href="https://discord.gg/wavemc"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Discord />
					</S.DiscordLink>
				)}
				<S.Logo>
					<WaveMC />
				</S.Logo>
			</S.Header>

			<S.Footer>
				{width > 600 && (
					<S.DiscordLink
						href="https://discord.gg/wavemc"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Discord />
					</S.DiscordLink>
				)}
				<S.SubPagesWrapper>
					<span onClick={() => navigation("/main")}>
						<h2>[목도하라]</h2>
						<img
							src={`https://mcwave.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2025-03-17+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+9.01.03.png`}
							alt="Thumbnail1"
						/>
					</span>
					<span onClick={() => navigation("/description")}>
						<h2>[개척하라]</h2>
						<img
							src={`https://mcwave.s3.ap-northeast-2.amazonaws.com/nature.png`}
							alt="Thumbnail2"
						/>
					</span>
					<span onClick={() => navigation("/boss")}>
						<h2>[토벌하라]</h2>
						<img
							src={`https://mcwave.s3.ap-northeast-2.amazonaws.com/horseboss.png`}
							alt="Thumbnail3"
						/>
					</span>
				</S.SubPagesWrapper>
				{width > 600 && (
					<S.Sound onClick={() => setIsMuted((prev) => !prev)}>
						<Speaker isMuted={isMuted} />
					</S.Sound>
				)}
			</S.Footer>
		</S.Container>
	);
};

export default Cover;
