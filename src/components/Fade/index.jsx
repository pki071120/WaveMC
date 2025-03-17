import React from "react";
import Slider from "react-slick";
import * as S from "./style";

function Fade({ type }) {
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

	const des = [
		{
			img: "world.png",
			url: "https://mcwave.s3.ap-northeast-2.amazonaws.com/nature.png",
			title: "[세계]",
			description:
				"황금기의 절정에 도달한 오버월드에서 당신의 기지와 기술, 용기를 최대한으로 활용하세요." +
				"드넓은 땅에서 당신을 막을 자를 없애려면 그들의 위로 올라가야 합니다.",
		},
		{
			img: "creature.png",
			url: "https://mcwave.s3.ap-northeast-2.amazonaws.com/creature.png",
			title: "[생물]",
			description:
				"드넓은 이 땅에서 마침내 새로운 생물이 출현하기 시작했습니다." +
				"이 경이로운 광경을 직접 목격하고, 세계의 기록자가 되십시오.",
		},
		{
			img: "armor.png",
			url: "https://mcwave.s3.ap-northeast-2.amazonaws.com/armor.png",
			title: "[장비]",
			description:
				"이 땅에서 할 수 있는 것은 다양한 것이 있습니다. 그중에서도 대표적인 것은, 무를 갈고 닦는 일입니다." +
				"새로운 스킬이 담긴 장비를 위해 직접 재료를 얻고 내 손으로 제련하여 정점에 도달하십시오.",
		},
	];

	const boss = [
		{
			img: "horseboss.png",
			url: "https://mcwave.s3.ap-northeast-2.amazonaws.com/horseboss.png",
			title: "[악몽을 뱉는 기수]",
			description:
				"오버월드의 악몽이 모여 만들어진 집합체입니다." +
				"적어도 이 악몽이 담긴 창날검은 그가 사용할 때까지는 절대로 부러지지 않지만, 말에서 낙마시키는 것은 가능할 것 같습니다." +
				"다만, 그것이 어떤 반동을 불러올지는 아무도 모릅니다..",
		},
		{
			img: "witch.png",
			url: "https://mcwave.s3.ap-northeast-2.amazonaws.com/witch.png",
			title: "[세상을 보는 심연]",
			description:
				"아주 먼 옛날 엔드에서 오버월드가 변화하기 전부터 세상을 바라보았다는 전설 때문에 붙여진 이 이름의 마녀는" +
				"일반적인 오버월드의 마녀와 풍기는 아우라부터가 다릅니다." +
				"공허의 마법이 담긴 큐브를 적극적으로 활용해 공격해오며, 공허 저편에서부터 뻗어오는 촉수는" +
				"당신의 방어구를 관통시키고도 남으니 각별한 주의를 요합니다.",
		},
		{
			img: "enderboss.png",
			url: "https://mcwave.s3.ap-northeast-2.amazonaws.com/boss.png",
			title: "[위더 스톰]",
			description:
				"위더를 넘어선 재앙 [위더 스톰]은 용맹한 모험가 10명이 덤벼와도 그것들을 모조리 쓸어버릴 힘을 가졌습니다." +
				"그것이 오버월드에 도래하게 두어서는 안됩니다..",
		},
	];

	return (
		<S.Wrapper>
			<Slider {...settings}>
				{type === "Des" &&
					des.map((item, idx) => (
						<S.Item key={idx}>
							<S.Img type="des" src={item.url} alt={`배경 ${idx + 1}`} />
							<S.Description idx={idx}>
								<div>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</S.Description>
						</S.Item>
					))}
				{type === "Boss" &&
					boss.map((item, idx) => (
						<S.Item key={idx}>
							<S.Img type="boss" src={item.url} alt={`배경 ${idx + 1}`} />
							<S.Description idx={idx} type={"boss"}>
								<div>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</S.Description>
						</S.Item>
					))}
			</Slider>
		</S.Wrapper>
	);
}

export default Fade;
