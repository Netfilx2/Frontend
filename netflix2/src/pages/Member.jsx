import styled from "styled-components";


export function Member() {
    return ( 
        <div>
        <SinupBody>
        <SinupH1>회원가입</SinupH1>
        <SignUpCardDiv>
            <SignUpCardh2>
            <SinupStorong>PineApple</SinupStorong>
            </SignUpCardh2>
            <form >
            <SignUpInputDiv>
            <SignUpCardinput
                // type="text"
                // placeholder="아이디를 입력하세요."
                // value={memberId}
                // onChange={(event) => {
                // setMemberId(event.target.value);
                // }}
                required
            />
            </SignUpInputDiv>
            <SignUpRefDiv>
            <SignUpBoxInputIcon >
                아이디를 확인해주세요
            </SignUpBoxInputIcon>
            </SignUpRefDiv>
            <SignUpCardP>영어랑 숫자 포함 8글자로 작성해주세요</SignUpCardP>
            <SignUpBoxInputIcon ></SignUpBoxInputIcon>
                <SignUpInputDiv>
            <SignUpCardinput
                // type="password"
                // placeholder="비밀번호를 입력하세요."
                // value={memberPassword}
                // onChange={(event) => {
                // setMemberPassword(event.target.value);
                // }}
                // required
            />
            </SignUpInputDiv>
            <SignUpInputDiv>
            <SignUpCardinput
                // type="password"
                // placeholder="비밀번호를 다시 입력해주세요."
                // value={memberPasswordCheck}
                // onChange={(event) => {
                // setMemberPasswordCheck(event.target.value);
                // }}
                // required
            />
            </SignUpInputDiv>
            <SignUpRefDiv>
            <SignUpBoxInputIcon></SignUpBoxInputIcon>
            </SignUpRefDiv>
            <SignUpCardP>...포함해주세요</SignUpCardP>
            <SignUpDiv>
            <SignUpformBTM
                text={"submit"}
                type={"submit"}
            >
                회원가입
            </SignUpformBTM>
            </SignUpDiv>
            </form>
        </SignUpCardDiv>
        </SinupBody>
    </div>
    );
}




export const SignUpBoxInputIcon = styled.div`

    right: 10px;
    top: 50%;
    transform: translateY(-15px);
    font-size: 12px;
    margin-top: 1.5%;
    color: rgb(219, 223, 253);
    &:hover {
      cursor: pointer;
    }
  `;

export const SinupBody = styled.section`
  height: 100vh;
  overflow-x: auto;
  width: 100%;
  padding: 10% 0 10%;
  background-repeat: no-repeat ;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FB0fQw%2FbtreY2KWYuJ%2Fs6x4cBnAlXCHUGKPvdpNb0%2Fimg.jpg') no-repeat center center/cover, rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  background-attachment: fixed;
  `

export const SinupH1 = styled.h1`
  color: rgb(219, 223, 253);
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  `

export const SinupStorong = styled.strong`
 font-weight: 700;
  color: rgb(26, 37, 112);
`

export const SignUpCardDiv = styled.div`
  max-width: 500px;
  width: 30%;
  height: auto;
  margin: 0 auto;
  border-radius: 6px;
  background-color: #9699a2;
  background-color:rgba(172, 176, 190, 0.3);
  box-shadow: 2px 2px 20px rgba(0,0,2,.3);
  color:rgb(219, 223, 253);
`

export const SignUpCardh2 = styled.h2`
  padding: 20px;
  font-size: 25px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`

export const SignUpCardh2strong = styled.h2`
  font-weight: 700;
  color:rgb(26, 37, 112);
`

export const SignUpCardform = styled.form`
  padding: 20px 22px;
`

export const SignUpCardinput = styled.input`
  width: 90%;
  margin-top: 7px;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
  background-color:rgba(247, 251, 254, 0.3);
`

export const SignUpLogin = styled.div`
  width: 100%;
  margin-top: 9px;
  margin-bottom: 15px;
  margin-left: 10% ;
  padding: 15px;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  color:  rgb(219, 223, 253);
  text-decoration: none;
`

export const SignUpformBTM = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  size: 10px;
  width: 100px;
  color: #B1BCE6;
  font-size: 18px;
`
export const SignUpCardP = styled.p`
  font-size: 12px;
  color:rgb(26, 37, 112);
  text-align: center;
  margin-top: 2px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`
export const SignUpDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex; 
  justify-content: center;

`

export const SignUpRefDiv = styled.div`
  width: 100%;
  height: 10px;
  display: flex; 
  justify-content: center;

`

export const SignUpInputDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex; 
  justify-content: center;

`








export default Member;