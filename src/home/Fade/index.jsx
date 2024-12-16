import React from "react";
import Slider from "react-slick";
import * as S from "./style";

function Fade({ Des }) {
	const settings = {
		autoplay: true,
		autoplaySpeed: 10000,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: false,
	};

	const dimensions = [
		{
			img: "image2.png",
			url: "https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/image2-jyRTRcFUReRghKmHGYYULV9E1RpUPq.png",
			title: "엔드 - 유리조각처럼 산산조각난",
			description:
				"고요하고 끝을 알 수 없는 상태로, 해도 달도 존재하지는 않는 절망적인 차원입니다. 가장 불안전한 차원이기도 하며, 지형지물이 다른 차원의 가능성과 겹쳐져 여러 차원의 모습을 동시에 띄고 있습니다. 생물 군계의 일부는 엔더에 맞게 다시 적응하였으며 일부 군계는 본래의 모습도 찾기 어려울 수 있습니다. 기괴한 모습을 한 엔드 시티와 비행선 등 정상적으로 건축이 불가능한 곡예에 가까운 구조물과 지형의 불균형함은 그야말로 신이 버린 땅이라는 명칭에 어울립니다.",
		},
		{
			img: "image3.png",
			url: "https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/image3-KlFBskxH7budb7ESYhKtioeiLeIXeB.png",
			title: "포어 - 누구도 구원할 수 없는",
			description:
				"오버월드의 지하에 있는 거대한 동굴이자 차원입니다. 과거 고도의 기술력을 가진 종족이 있었으나 멸망 후 오랫동안 방치된 상태입니다. 포어의 기술력은 지하 자원에서 비롯된 것으로 추측되며, 아직도 많은 귀중한 자원이 남아있습니다. 하지만 방치된 탓에 기술력이 뒤틀리고 생물들이 진화하며 스컬크에 뒤덮힌 강력한 적들이 생겨났습니다.",
		},
		{
			img: "image7.png",
			url: "https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/image7-rq1Vjj342qIHWW5nLbWGZSxKnHKG38.png",
			title: "커널 - 뼈까지 파고드는",
			description:
				"혹한 환경을 가진 차원으로, 마력 폭풍으로 얼음이 변질되었습니다. 이곳에 발을 들이는 자는 죽어간 뒤 마력이 깃든 얼음에 마음을 빼앗겨 차가운 인형이 됩니다. 도망자와 추방자들이 많이 찾아오는 곳으로, 위험한 환경과 비극적인 이야기들이 담겨 있습니다.",
		},
		{
			img: "image10.png",
			url: "https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/image10-5CjnirdYVBZMf11jTB0eGul6OybetF.png",
			title: "생텀 - 이름밖에 존재하지 않는",
			description:
				"'성소'라 불리며 찬란한 문명을 가졌던 차원이지만 종족 전쟁의 여파로 문명이 파괴되었습니다. 현재는 알 수 없는 폭풍이 생텀 전역을 휩쓸며 문명의 잔재는 거의 남아있지 않습니다. 이 폭풍은 오버월드마저 위협할 수 있습니다.",
		},
		{
			img: "image6.png",
			url: "https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/image6-HAm71aNGv0d1KqMZ9gH3gDyxjEXBtC.png",
			title: "채더 - 용서받지 못하는",
			description:
				"완전히 격리된 차원으로, 죄인들을 유배시키던 곳으로 추측됩니다. 식물 없는 척박한 환경과 높이에 따라 바뀌는 지형이 특징입니다. 최하층에는 죄인들을 심판하는 '노예'라 불리는 채더의 마지막 왕이 존재합니다. 위험하지만 채더만의 강력한 장비들을 얻을 수 있습니다.",
		},
		{
			img: "image8.png",
			url: "https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/image8-Mf5TtncwsSy2aRo0qBDaPfG1uJOq6v.png",
			title: "오션 - 되돌릴 수 없는",
			description:
				"다차원 간 기업이 지상 낙원을 만들려 했으나 실패하여 치명적인 신경독이 퍼진 황천의 강으로 변해버린 차원입니다. 정상적인 생명체가 없는 땅이 되었으며, 이곳의 진상을 밝혀야 할 필요가 있습니다.",
		},
		{
			img: "image5.png",
			url: "https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/image5-ed21tSRsx6VVn01XyJdqgoFrHaiFDJ.png",
			title: "새더 - 무엇도 신성할 수 없는",
			description:
				"물 위에 솟아난 석영질 암석으로 구성된 차원입니다. 식생과 동물은 더 이상 자라거나 늙지 않는 불로불사의 특징을 가집니다. 종교인들은 이곳을 신의 고향으로 여깁니다. 학자들은 차원의 틈에서 생성된 통로이자 더 높은 차원의 존재들이 이용하는 곳으로 추측하고 있습니다.",
		},
		{
			img: "image4.png",
			url: "https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/image4-t26XRzXoRwKjyTJCmlS7DSZt5kVzfc.png",
			title: "해더 - 빛의 근원을 잃어버린",
			description:
				"오버월드의 하늘 위에 있는 섬이자 차원입니다. 환경과 생명체는 오버월드와 비슷하지만 마법이 더욱 발전한 모습을 보입니다. 과거에는 강력한 마법으로 입지를 다졌으나, 무리한 사용으로 인해 해가 사라지고 달만 남게 되면서 어둠에 갇혔습니다. 생명체 대부분이 미쳐 극히 일부만 살아남았으나 지금이 개척할 최적의 타이밍입니다.",
		},
		{
			img: "image9.png",
			url: "https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/img/image9-yigU3yGF7lgyKFDcsz1FryuKWOJjJv.png",
			title: "우드 - 모든 것이 출발하는",
			description:
				"개척되지 않은 자연 그대로의 원시 차원입니다. 이곳의 거주민 '엘븐'과 소종족들은 자연과 조화를 이루며 살아갑니다. 철기시대 이상의 자원은 없고, 단단한 나무만이 빼곡히 자라 있는 것이 특징입니다.",
		},
		{
			img: "image1.png",
			url: "https://4r1tfd9ccoygbrkd.public.blob.vercel-storage.com/image1-pT9IrFv0Wb3qoiaA2iC0MjX6bOdmPz.png",
			title: "네더 - 불꽃의 욕망을 따르는",
			description:
				"네더는 기존에 이미 개척된 차원이었지만 차원 대연결 사태의 여파로 네더의 시간축이 뒤틀려 시간이 미래로 이동되었습니다. 이로 인해 네더의 환경에 맞게 진화한 여러 생물 군계를 볼 수 있습니다.버려진 성벽에는 흑마법의 산물인 위더 스켈레톤이, 황무지에는 여러가지로 분화된 피글린족들이 자리잡아 살아가는 중입니다.",
		},
	];

	return (
		<S.Wrapper>
			<Slider {...settings}>
				{dimensions.map((item, idx) => (
					<S.Item key={idx}>
						<S.Img src={item.url} alt={`배경 ${idx + 1}`} />
						{Des && (
							<S.Description idx={idx}>
								<div>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</S.Description>
						)}
					</S.Item>
				))}
			</Slider>
		</S.Wrapper>
	);
}

export default Fade;
