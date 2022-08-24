import { useState } from "react";
import { useDispatch } from "react-redux";
import { __postMemberlogin } from "../redux/modules/member";

import styled from "styled-components";

export function Login() {
  const [memberId, setMemberId] = useState("");
  const [memberPassword, setMemberPassword] = useState("");

  const dispatch = useDispatch();

  const newMemberlogin = {
    memberId,
    memberPassword,
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    dispatch(__postMemberlogin({ newMemberlogin }));
  };

  return (
    <div>
      <SinupBody>
        <SignUpCardDiv>
          <SignUpCardh2>
            <SinupStorong>로그인</SinupStorong>
          </SignUpCardh2>
          <form onSubmit={(e) => onsubmitHandler(e)}>
            <SignUpInputDiv>
              <SignUpCardinput
                type="text"
                placeholder="이메일을 입력하세요"
                value={memberId}
                onChange={(event) => {
                  setMemberId(event.target.value);
                }}
                required
              />
            </SignUpInputDiv>
            <SignUpInputDiv>
              <SignUpCardinput
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={memberPassword}
                onChange={(event) => {
                  setMemberPassword(event.target.value);
                }}
                required
              />
            </SignUpInputDiv>

            <SignInDiv>
              <SignInformBTM>로그인</SignInformBTM>
            </SignInDiv>
            <SignInDiv>
              <SignInformBTM href="/Member">회원 가입</SignInformBTM>
            </SignInDiv>
          </form>
          <SignUph3>
            <p>Netflix 회원이 아닌가요? </p>
            <p>지금 가입하세요</p>
            <p>
              이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
              확인합니다.
            </p>
            <Button>자세히 알아보기</Button>
          </SignUph3>
        </SignUpCardDiv>
      </SinupBody>
    </div>
  );
}

export const body = styled.body`
  margin: 0;
`;

export const SignInformBTM = styled.button`
  border: none;
  background: #e50914;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/
  align-items: center;
  justify-content: center;
  padding: 14px;
`;

export const SignInDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/
  margin-top: 50px;
`;
export const SignUpBoxInputIcon = styled.div`
  right: 10px;
  top: 50%;
  transform: translateY(-15px);
  font-size: 18px;
  margin-top: 1.5%;
  color: rgb(219, 223, 253);
  &:hover {
    cursor: pointer;
  }
`;

export const SinupBody = styled.section`
  height: auto;
  overflow-x: auto;
  width: 100%;
  padding: 10% 0 10%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/358a7f7a-b41d-4b75-b654-a3783749e0ef/KR-ko-20220815-popsignuptwoweeks-perspective_alpha_website_medium.jpg")
      no-repeat center center/cover,
    rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  background-attachment: fixed;
`;

export const SinupStorong = styled.strong`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  /* margin-bottom: 28px; */
`;

export const SignUpCardDiv = styled.div`
  /* max-width: 500px; */

  width: 350px;
  height: 550px;
  margin: 0 auto;
  padding: 60px;
  border-radius: 6px;
  background-color: #9699a2;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 20px rgba(0, 0, 2, 0.3);
  color: rgb(219, 223, 253);
`;

export const SignUpCardh2 = styled.h2`
  font-size: 25px;
`;

export const SignUpCardh2strong = styled.h2`
  font-weight: 700;
  color: rgb(26, 37, 112);
`;

export const SignUpCardform = styled.form`
  padding: 20px 22px;
`;

export const SignUpCardinput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  margin-bottom: 15px;
  padding: 26px;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #333;
  border: 0 solid black;
`;

export const SignUpLogin = styled.div`
  width: 100%;
  margin-top: 9px;
  margin-bottom: 15px;
  margin-left: 10%;
  padding: 15px;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  color: rgb(219, 223, 253);
  text-decoration: none;
`;

export const SignUpformBTM = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  size: 10px;
  width: 100px;
  color: #b1bce6;
  font-size: 18px;
`;
export const SignUpCardP = styled.p`
  font-size: 12px;
  color: rgb(26, 37, 112);
  text-align: center;
  margin-top: 2px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;
export const SignUpDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
`;
export const SignUpInputDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  box-shadow: none;
  border: none;
  margin-bottom: 10px;
`;

const SignUph3 = styled.div`
  color: #8c8c8c;
  font-size: 13px;
  margin-top: 60px;
`;
const Button = styled.div`
  background-color: transparent;
  border: none;
  color: #0071eb;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
`;

export default Login;
