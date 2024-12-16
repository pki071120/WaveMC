import React from "react";
import * as S from "./style";
import { Cover, Fade } from "../../components";
import { useNavigate } from "react-router-dom";

const Sub3 = () => {
	const navigation = useNavigate();
	return (
		<>
			<S.Page>
				<Fade type={"villages"} />
			</S.Page>
			<Cover navigation={navigation} />
		</>
	);
};

export default Sub3;
