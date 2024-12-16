import React from "react";
import * as S from "./style";
import { Fade, Cover } from "../../components";
import { useNavigate } from "react-router-dom";

const Sub1 = () => {
	const navigation = useNavigate();
	return (
		<>
			<S.Page>
				<Fade Des={true} />
			</S.Page>
			<Cover navigation={navigation} />
		</>
	);
};

export default Sub1;
