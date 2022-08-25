import styled from "styled-components";
import Card from "../components/Card";
import MainForm from "../components/MainForm";
import Qna from "../components/Qna";
import homeBack from "../shared/image/homeBack.jpg";

export function Member() {
  const cards = [
    {
      title: "TV로 즐기세요.",
      content:
        "스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.",
      source: {
        videosrc:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
        imgsrc:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      },
      position: {
        row: "row",
        video: {
          left: "113px",
          top: "73px",
        },
        img: {
          left: "",
          top: "",
        },
        align: "right",
      },
      size: {
        video: {
          width: "66%",
          height: "54%",
        },
        img: {
          width: "90%",
          height: "90%",
        },
      },
      opacity: "0",
    },
    {
      title: "즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.",
      content: "간편하게 저장하고 빈틈없이 즐겨보세요.",
      source: {
        videosrc: "",
        imgsrc:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
      },
      position: {
        row: "row-reverse",
        video: {
          left: "68px",
          top: "",
        },
        img: {
          left: "-50px",
          top: "",
        },
        align: "left",
      },
      size: {
        video: {
          width: "",
          height: "",
        },
        img: {
          width: "90%",
          height: "90%",
        },
      },
      opacity: "1",
    },
    {
      title: "다양한 디바이스에서 시청하세요.",
      content:
        "각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.",
      source: {
        videosrc:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
        imgsrc:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
      },
      position: {
        row: "row",
        video: {
          left: "140px",
          top: "38px",
        },
        img: {
          left: "",
          top: "",
        },
        align: "right",
      },
      size: {
        video: {
          width: "55%",
          height: "45%",
        },
        img: {
          width: "90%",
          height: "90%",
        },
      },
      opacity: "0",
    },
    {
      title: "어린이 전용 프로필을 만들어 보세요.",
      content:
        "자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.",
      source: {
        videosrc: "",
        imgsrc:
          "https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf",
      },
      position: {
        row: "row-reverse",
        video: {
          left: "155px",
          top: "42px",
        },
        img: {
          left: "",
          top: "",
        },
        align: "left",
      },
      size: {
        video: {
          width: "55%",
          height: "45%",
        },
        img: {
          width: "90%",
          height: "90%",
        },
      },
      opacity: "0",
    },
  ];

  return (
    <StWrap>
      <StContainer>
        <StTextBox>
          <StTitle>
            영화와 시리즈를
            <br />
            무제한으로.
          </StTitle>
          <StContentH2>
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </StContentH2>
          <StContent>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </StContent>
        </StTextBox>
        <MainForm />
      </StContainer>
      {cards.map((card, i) => (
        <Card
          title={card.title}
          content={card.content}
          source={card.source}
          position={card.position}
          size={card.size}
          opacity={card.opacity}
        />
      ))}
      <QnaBox>
        <QnaTitle>자주 묻는 질문</QnaTitle>
        <QnaList>
          <Qna
            title={"넷플릭스란 무엇인가요?"}
            content={
              "넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.\n\n저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다."
            }
          />
          <Qna
            title={"넷플릭스 요금은 얼마인가요?"}
            content={
              "스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다."
            }
          />
          <Qna
            title={"어디에서 시청할 수 있나요?"}
            content={
              "언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.\n\niOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요."
            }
          />
          <Qna
            title={"멤버십을 해지하려면 어떻게 하나요?"}
            content={
              "넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요."
            }
          />
          <Qna
            title={"넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?"}
            content={
              "넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하세요."
            }
          />
          <Qna
            title={"아이들이 넷플릭스를 봐도 좋을까요?"}
            content={
              "멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.\n\n키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다."
            }
          />
        </QnaList>
        <StContent>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </StContent>
        <MainForm />
      </QnaBox>
    </StWrap>
  );
}

export default Member;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;

  height: 100vh;

  background-color: transparent;

  background-image: linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.9)
    ),
    url(${homeBack});
  background-repeat: no-repeat;
  background-size: cover;

  letter-spacing: -0.5px;

  top: -100px;

  text-shadow: 0 1px 2px gray;
  word-break: keep-all;

  border-bottom: 8px #222 solid;
`;
const StTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  margin: 0 auto;
`;
const StTitle = styled.h1`
  font-size: 4em;
  font-weight: 700;
  margin-bottom: 0;
`;
const StContentH2 = styled.h2`
  display: flex;
  flex-direction: column;
  width: 50vw;
  font-size: 1.65em;
  font-weight: 400;
  margin: 20px 0;
`;
const StContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50vw;
  font-size: 1.25em;
  font-weight: 400;
  margin: 10px 0 20px 0;
`;
const QnaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #000;

  color: #fff;

  padding: 70px 45px;

  border-bottom: 8px #222 solid;
`;
const QnaTitle = styled.h1`
  font-size: 3.2em;
`;
const QnaList = styled.ul`
  width: 75%;
  margin: 2em auto;
  max-width: 815px;
  padding: 0;
`;
