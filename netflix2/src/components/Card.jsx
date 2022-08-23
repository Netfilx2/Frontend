import styled from "styled-components";

const Card = ({ title, content, source, position, size, opacity }) => {
  // switch (card) {
  //   case "card1":
  return (
    <StCard>
      <StContainer flexDirection={position.row}>
        <StTextBox>
          <StTitle>{title}</StTitle>
          <StContent>{content}</StContent>
        </StTextBox>
        <StImgBox textAlign={position.align}>
          <StVideo
            width={size.video.width}
            height={size.video.height}
            left={position.video.left}
            top={position.video.top}
            autoPlay
            muted
            loop
          >
            <source src={source.videosrc} />
          </StVideo>
          <StImg
            left={position.img.left}
            width={size.img.width}
            height={size.img.height}
            src={source.imgsrc}
          />
          <StOnDiv opacity={opacity}>
            <OnImg src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
            <OnTextBox>
              <OnText1>기묘한 이야기</OnText1>
              <OnText2>저장 중...</OnText2>
            </OnTextBox>
            <StAni></StAni>
          </StOnDiv>
        </StImgBox>
      </StContainer>
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  display: flex;
  flex-direction: row;

  background-color: #000;

  padding: 40px 0;

  /* font-size: 200px; */
  /* color: #fff; */

  border-bottom: 8px #222 solid;
`;
const StContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  gap: 30px;

  margin: 0 auto;
  max-width: 1100px;

  word-break: keep-all;
`;
const StTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 62%;
  height: 100%;

  color: #fff;
`;
const StTitle = styled.h1`
  font-size: 3em;
  margin: 0;
`;
const StContent = styled.h2`
  font-size: 1.6em;
  font-weight: 400;
`;
const StImgBox = styled.div`
  text-align: ${(props) => props.textAlign};
  /* text-align: center; */
  position: relative;
`;
const StImg = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};

  left: ${(props) => props.left};

  z-index: 1;

  position: relative;
`;
const StVideo = styled.video`
  width: ${(props) => (props.width ? props.width : "66%")};
  height: ${(props) => (props.height ? props.height : "66%")};

  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  src: ${(props) => (props.src ? props.src : "")};
`;
const StOnDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 80px;

  border-radius: 13px;
  border: 2px #444 solid;

  position: absolute;
  left: 20px;
  bottom: 25px;
  z-index: 3;
  background-color: #000;

  padding: 8px 12px;

  opacity: ${(props) => props.opacity};
`;
const OnImg = styled.img`
  height: 100%;
  margin-right: 16px;
`;
const OnTextBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
`;
const OnText1 = styled.div`
  color: #fff;
  font-weight: 700;
`;
const OnText2 = styled.div`
  color: #0071eb;
  font-weight: 300;
  font-size: 0.9em;
`;
const StAni = styled.div`
  display: block;
  margin-left: 20px;
  width: 20%;
  height: 100%;
  background: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif")
    50% no-repeat;
  background-size: 80%;
`;
