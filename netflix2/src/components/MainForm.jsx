import { useState } from "react";
import styled from "styled-components";

const MainForm = () => {
  const [check, setCheck] = useState(0);

  return (
    <StForm>
      <InputBox>
        <StInput placeholder="이메일 주소"></StInput>
        <ChcekEmail opacity={check}>{"이메일을 입력해주세요."}</ChcekEmail>
      </InputBox>
      <StBtn onClick={() => setCheck(1)}>시작하기 &gt;</StBtn>
    </StForm>
  );
};

export default MainForm;

const StForm = styled.div`
  display: flex;
  align-items: center;

  height: 80px;
`;
const StInput = styled.input`
  width: 500px;
  height: 70px;
  text-indent: 10px;

  font-size: 1.05em;

  border-radius: 2px 0 0 2px;
  border: 1px #8c8c8c solid;
  ::-webkit-input-placeholder {
    text-indent: 10px;
    color: #8c8c8c;
    position: absolute;
    top: 20%;
    transform: translateY(50%);
    transition: font 0.1s ease, bottom 0.1s ease, transform 0.1s ease;
  }

  :focus {
    outline: none;
    text-indent: 10px;

    ::-webkit-input-placeholder {
      color: #8c8c8c;
      font-size: 14px;
      font-weight: 700;
      position: absolute;
      top: 20%;
      transform: translateY(-50%);
      transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
    }
  }
`;
const StBtn = styled.button`
  width: 207px;
  height: 75px;
  font-size: 1.825em;
  color: #fff;
  background-color: #db0510;

  border: none;
  border-radius: 0 2px 2px 0;

  cursor: pointer;
  :hover {
    background-color: #e50914;
  }
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  margin-top: 29px;
`;
const ChcekEmail = styled.div`
  color: #b92d2b;
  font-size: 13px;
  opacity: ${(props) => (props.opacity ? 1 : 0)};
  text-shadow: none;

  padding: 6px 3px;
`;
