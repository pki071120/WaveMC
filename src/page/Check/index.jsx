import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Check = ({ setIsMuted, setIsTransitioning, isTransitioning }) => {
	const navigation = useNavigate();
	const handlePageChange = () => {
		setIsTransitioning(true);
		setTimeout(() => {
			setIsTransitioning(false);
		}, 2000);
		navigation("/main");
	};

	return (
		<>
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
								handlePageChange();
							}}
						>
							ON
						</S.Button>
						<S.Button
							onClick={() => {
								setIsMuted(true);
								handlePageChange();
							}}
						>
							OFF
						</S.Button>
					</S.ButtonWrapper>
				</S.CheckBox>
			</S.Background>
		</>
	);
};

export default Check;
