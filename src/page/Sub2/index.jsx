import React from "react";
import * as S from "./style";
import { Fade, Cover } from "../../components";
import { useNavigate } from "react-router-dom";

const Sub2 = ({ isMuted, setIsMuted }) => {
	const navigation = useNavigate();
	return (
		<>
			<S.Page>
				<Fade type={"Des"} />
			</S.Page>
			<Cover
				navigation={navigation}
				isMuted={isMuted}
				setIsMuted={setIsMuted}
			/>
		</>
	);
};

export default Sub2;
