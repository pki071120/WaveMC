import React from "react";
import * as S from "./style";
import ReactPlayer from "react-player";
import { Cover } from "../../components";
import { useNavigate } from "react-router-dom";

const Sub1 = ({ isMuted, setIsMuted }) => {
	const navigation = useNavigate();
	return (
		<>
			<S.Page>
				<ReactPlayer
					url={`https://mcwave.s3.ap-northeast-2.amazonaws.com/wavemc.mp4`}
					playing={true}
					width={"100vw"}
					height={"100vh"}
					loop={true}
					controls={false}
					pip={true}
					muted={isMuted}
				/>
			</S.Page>
			<Cover
				navigation={navigation}
				isMuted={isMuted}
				setIsMuted={setIsMuted}
			/>
		</>
	);
};

export default Sub1;
