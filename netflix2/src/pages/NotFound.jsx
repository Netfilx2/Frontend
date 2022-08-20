import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import back from "../image/back.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <StContainer>
      <StTextBox>
        <StTitle>길을 잃으셨나요?</StTitle>
        <StContent>
          <p>
            죄송합니다. 해당 페이지를 찾을 수 없습니다. 홈페이지로 이동해 다양한
            콘텐츠를 만나보세요.
          </p>
        </StContent>
      </StTextBox>
      <StButton onClick={() => navigate("/")}>Netflix 홈</StButton>
      <StError>
        <span style={{ marginLeft: "20px" }}>
          오류 코드: <strong>NSES-404</strong>
        </span>
      </StError>
      <StFootText>
        <strong>로스트 인 스페이스</strong>의 한 장면
      </StFootText>
    </StContainer>
  );
};

export default NotFound;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;

  width: 100vw;
  height: 100vh;

  background-image: radial-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    ),
    url(${back});
  background-repeat: no-repeat;
  background-size: cover;

  letter-spacing: -0.5px;

  text-shadow: 0 1px 2px gray;
  word-break: keep-all;
`;
const StTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  margin: 0 auto;
`;
const StTitle = styled.h1`
  font-size: 4.8em;
  font-weight: 700;
  margin-bottom: 0;
`;
const StContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  font-size: 1.8em;
  font-weight: 300;
  margin: 0;
`;
const StButton = styled.button`
  background-color: #fff;
  height: 50px;
  padding: 0 1.8rem;

  font-size: 1.3em;
  font-weight: 700;

  border: none;
  border-radius: 4px;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const StError = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  height: 2em;
  font-size: 2em;
  margin-top: 1.2em;
  border-left: 2px solid red;
`;
const StFootText = styled.div`
  font-weight: 100;
  position: absolute;
  right: 80px;
  bottom: 30px;

  font-size: 1.1em;
  opacity: 0.7;

  text-shadow: 0px 2px 2px #666;
`;
