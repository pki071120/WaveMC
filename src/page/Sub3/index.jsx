import React from "react";
import * as S from "./style";
import { Cover, Fade } from "../../components";
import { useNavigate } from "react-router-dom";

const Sub3 = ({ isMuted, setIsMuted }) => {
	const navigation = useNavigate();
	return (
		<>
			<S.Page>
				<Fade type={"Boss"} />
			</S.Page>
			<Cover
				navigation={navigation}
				isMuted={isMuted}
				setIsMuted={setIsMuted}
			/>
		</>
	);
};

export default Sub3;
