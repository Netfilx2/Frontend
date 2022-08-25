import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const namee = useSelector((state) => state.profile.profile);

  const [nickname, setNickname] = useState();

  return (
    <ProfileWrap>
      <ProfileContainer>
        <ProfileH1>프로필 변경</ProfileH1>
        <ProfileBox>
          <ImgBox>
            <ProfileImg
              src="https://occ-0-4839-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUEg4L3a40-S9QocJl1ZgHMZryHxhMowGGxvOrHj7FfCHOhr_g9Vn7cOt3ufC8VPw5L2mW1y1K-lK4Ay5G3Tne1uHj6QZJwJXHTs4YS7dUOu8jiyKgM.png?r=1d4"
              alt="프로필 이미지"
            />
          </ImgBox>
          <ProfileFrom>
            <ProfileName
              placeholder="이름"
              onChange={(e) => setNickname(e.target.value)}
              // value={namee}
            ></ProfileName>
            <LanguegeBox>
              <ProfileH2>언어</ProfileH2>
            </LanguegeBox>
            <LanguegeDrop />
            <GradeBox>
              <GradeH2>관람등급 설정:</GradeH2>
              <GradeAll>모든 관람등급</GradeAll>
              <P>
                이 프로필에서는 <strong>모든 관람등급</strong>의 콘텐츠가
                표시됩니다.
              </P>
              <UpdateBtn fontSize="1vw">수정</UpdateBtn>
            </GradeBox>
            <GradeBox>
              <GradeH2>자동 재생 설정</GradeH2>
              <PlayDiv>
                <CheckDiv>
                  <TypeCheck type="checkbox" id="check" />
                  <CheckLabel htmlFor="check"></CheckLabel>
                  <span>모든 디바이스에서 시리즈의 다음 화 자동재생</span>
                </CheckDiv>
                <CheckDiv>
                  <TypeCheck type="checkbox" id="check" />
                  <CheckLabel htmlFor="check"></CheckLabel>
                  <span>모든 디바이스에서 탐색 중 미리보기 자동재생</span>
                </CheckDiv>
              </PlayDiv>
            </GradeBox>
          </ProfileFrom>
        </ProfileBox>
        <ButtonBox>
          <SubmitBtn onClick={() => navigate("/movies")} fontSize="1.2vw">
            저장
          </SubmitBtn>
          <UpdateBtn onClick={() => navigate("/movies")} fontSize="1.2vw">
            취소
          </UpdateBtn>
          <UpdateBtn fontSize="1.2vw">프로필 삭제</UpdateBtn>
        </ButtonBox>
      </ProfileContainer>
    </ProfileWrap>
  );
};

export default Profile;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto auto 0;
  color: #fff;
  align-items: center;
  width: 100%;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ProfileH1 = styled.div`
  text-align: left;
  font-size: 4vw;
`;
const ProfileBox = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2em 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
`;
const ImgBox = styled.div`
  width: 8vw;
  /* background-color: blue; */
  margin-right: 2em;
`;
const ProfileImg = styled.img`
  max-width: 100%;
  min-width: 80px;
  white-space: nowrap;

  border-radius: 4px;
`;
const ProfileFrom = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProfileName = styled.input`
  background: #666;
  border: 1px solid transparent;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.3vw;
  height: 2em;
  margin: 0 0.8em 0 0;
  padding: 0.2em 0.6em;
  text-indent: 0.1vw;
  width: 18em;
  outline: none;
  ::-webkit-input-placeholder {
    color: #ccc;
  }
`;
const LanguegeBox = styled.div`
  margin-top: 1rem;
`;
const ProfileH2 = styled.h2`
  color: #ccc;
  font-weight: 400;
  font-size: 1.3vw;
  margin-bottom: 7px;
`;
const LanguegeDrop = styled.select`
  color: #ccc;
  width: 15%;
  background-color: inherit;
  border: 1px #ccc solid;
  border-radius: 0px;
  height: 35px;
  padding: 0 50px 0 10px;
`;
const GradeBox = styled.div`
  border-top: 1px solid #333;
  font-size: 1vw;
  margin: 1.5vw 0 0;
  padding: 1.5vw 0 0;
`;
const GradeH2 = styled.h2`
  color: #ccc;
  font-weight: 400;
  font-size: 1.3vw;
  margin-top: 0px;
  margin-bottom: 7px;
`;
const GradeAll = styled.div`
  display: inline-block;
  background: #333;
  border-radius: 2px;
  font-weight: 700;
  padding: 7px 10px;
  margin-top: 17px;
`;
const UpdateBtn = styled.div`
  background-color: transparent;
  border: 1px solid grey;
  color: grey;
  cursor: pointer;
  display: inline-block;
  font-size: ${(st) => st.fontSize};
  letter-spacing: 2px;
  margin: 2em 20px 1em 0;
  padding: 0.4em 1.5em;
  :hover {
    color: #fff;
    border-color: #fff;
  }
`;
const SubmitBtn = styled.div`
  background-color: #fff;
  border: 1px solid #fff;
  color: #141414;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;
  font-size: ${(st) => st.fontSize};
  letter-spacing: 2px;
  margin: 2em 20px 1em 0;
  padding: 0.4em 1.5em;
  :hover {
    color: #fff;
    background-color: #e50914;
    border-color: #e50914;
  }
`;
const PlayDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
const TypeCheck = styled.input`
  display: none;
  box-sizing: border-box;
  padding: 0;
`;
const CheckLabel = styled.label`
  border: 1px solid #333;
  border-radius: 0;
  display: inline-block;
  font-size: 0.8vw;
  height: 2.5em;
  margin-right: 0.5em;
  position: relative;
  width: 2.5em;
`;
const ButtonBox = styled.div`
  display: block;
`;
const P = styled.p`
  margin-bottom: 0;
`;
