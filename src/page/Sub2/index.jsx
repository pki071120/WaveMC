import React from "react";
import * as S from "./style";
import ReactPlayer from "react-player";
import { Cover } from "../../components";
import { useNavigate } from "react-router-dom";

const Sub2 = ({ isMuted }) => {
	const navigation = useNavigate();
	return (
		<>
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
			<Cover navigation={navigation} />
		</>
	);
};

export default Sub2;
