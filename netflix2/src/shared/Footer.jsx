import styled from "styled-components";

export function Footer() {
  const lists = [
    "자주 묻는 질문",
    "고객 센터",
    "계정",
    "미디어 센터",
    "투자 정보(IR)",
    "입사 정보",
    "넷플릭스",
    "지원",
    "디바이스",
    "이용 약관",
    "개인정보",
    "쿠키",
    "설정",
    "회사 정보",
    "문의하기",
    "속도 테스트",
    "법적 고지",
    "오직 넷플릭스에서 ",
  ];
  return (
    <Wrap>
      <FooterContainer>
        <FooterBox>
          <TextBox>
            <p>질문이 있으신가요? 문의 전화: 080-001-9587</p>
            <TextList>
              {lists.map((list) => (
                <TextLi>{list}</TextLi>
              ))}
            </TextList>
            <Languege>
              <option hidden>한국어</option>
              <option>한국어</option>
              <option>English</option>
            </Languege>
            <NetflixKo>넷플릭스 대한민국</NetflixKo>
            <CopyText>
              '넷플릭스서비시스코리아 유한회사 통신판매업신고번호 &#58;
              제2018-서울종로-0426호 전화번호: 080-001-9587 <br />
              대표: 레지널드 숀 톰프슨 <br />
              이메일 주소: korea@netflix.com <br />
              주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
              20층 우편번호 03161 <br />
              사업자등록번호: 165-87-00119 <br />
              클라우드 호스팅: Amazon Web Services Inc. <br />
              공정거래위원회 웹사이트
            </CopyText>
          </TextBox>
        </FooterBox>
      </FooterContainer>
    </Wrap>
  );
}
export default Footer;
const Wrap = styled.div`
  background-color: #141414;
`;
const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 70px 45px;
  max-width: 1000px;
  background-color: #141414;
`;
const FooterBox = styled.div`
  color: #737373;
  font-size: 1em;
  min-width: 190px;
  padding-bottom: 20px;
  position: relative;
  width: 100%;
`;
const TextBox = styled.div`
  margin: 0 50px;

  display: flex;
  flex-direction: column;
`;
const TextList = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
`;
const TextLi = styled.li`
  width: 25%;
  margin-bottom: 16px;
  font-size: 13px;
`;
const Languege = styled.select`
  width: 15%;
  margin-top: 20px;
  background-color: #141414;
  background-image: none;
  border: 1px solid #333;
  color: #999;
  font-size: 16px;
  padding: 12px;
`;
const NetflixKo = styled.span`
  margin-top: 24px;
  font-size: 13px;
`;
const CopyText = styled.div`
  font-size: 12px;
  margin: 20px 0;

  line-height: 1.5;
`;
