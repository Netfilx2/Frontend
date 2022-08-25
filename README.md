<br/><br/>
![](netflix2/src/shared/img/netflix-logo.jpeg)

---

<br/><br/>
![demo](netflix2/public/Netflix_Cloning.gif)

---

## Stack<br/><br/>

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"><img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white">

---

## Wire-frame<br/><br/>

![](https://quick-jewel-e0d.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2e6b2d1d-42d8-419e-bfca-f75a9794a80c%2FUntitled.png?table=block&id=efdfd605-cdac-4b5c-8a1f-b6156d2bc6d3&spaceId=cf7a2d51-6d36-4851-bf91-edffc3c5d791&width=2000&userId=&cache=v2)<br/><br/>

---

## Trouble-shooting <br/><br/>

### 1. **Slider 적용(openAPI / map함수 / Swiper)**

- 문제

  openAPI 데이터를 map함수를 사용해서 화면에 데이터를 뿌려줬다.
  당시 사용 map함수 코드

### [문제 영상](https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=BFE687A51D4E54083C3E343B1734C0A7D68A&outKey=V12746c74504ce4d309ab1b6811099841c5e00c6c3c4cf459dfdb1b6811099841c5e0&width=544&height=306)

- Movies.jsx

```jsx
<>
      <HeaderWrap>
        <div className="banner_contents">
          <img src={img2} className="titlelogo" alt="React" />
          <div className="banner_description">
            <p className="banner_p">
              어느 날 기이한 존재로부터 지옥행을 선고받은 사람들. 충격과
              두려움에 휩싸인 도시에 대혼란의 시대가 도래한다. 신의 심판을
              외치며 세를 확장하려는 종교단체와 진실을 파헤치는 자들의 이야기.
            </p>
          </div>
          <div className="button12">
            <div className="bannerbuttonmain">
              <button className="bannerbutton1">재생</button>
              <BsFillPlayFill color="black" className="bannericon" />
            </div>
            <div className="bannerbuttonmain2">
              <button className="bannerbutton2">상세정보</button>
              <RiInformationLine color="white" className="bannericon2" />
            </div>
          </div>
        </div>
        <div className="banner-fadeBottom"></div>
      </HeaderWrap>

      <div className="row">
        <div className="row_posters">
          {loaded ? (
            dataMovie.map((movie) => {
              return (
                <div key={movie.smallCategory}>
                  <h2 className="movietitle"> {movie.smallCategory}</h2>
                  {movie.dataList.map((movieiinfo) => {
                    return (
                      <>
                        <img
                          className="row_poster"
                          src={movieiinfo.backdrop_path}
                          alt={movieiinfo.title}
                          key={movieiinfo.id}
                        />
                      </>
                    );
                  })}
                </div>
              );
            })
          ) : (
            // 스켈레톤
            <div>Loding…</div>

            //스켈레톤ui을 넣는 곳
          )}
        </div>
      </div>
```

근데 문제는 map으로 뿌려줬다 보니, 이미지를 슬라이더하면 밑에 영상처럼 다른 이미지도 다 같이 슬라이더 되는 문제가 발생했다.

- 해결 과정

  데이터를 div로 감싸거나 이미지마다 classname 적용시켜서 해봤는데 잘 안됐다..

  미디어쿼리나 라이브러리에서 있는지 찾아봤는데 구간 나누눈 부분을 못 찾아서 적용을 못 시켰다.

  map함수가 2중으로 되어있다보니, 컴포넌트를 나누려고 시도 했지만 중간에 꼬였는지 잘 안 됐다.

  이 문제로 몇시간 동안 고통 받고 있었음.

  결국은 기술매니저님, 팀원, 주위 동료에게 조언과 도움을 요청해서 문제 해결을 했다! (눈물)

- 해결

  1. 컴포넌트를 나눴다. (근본적인 해결책은 아님 하지만 확실히 가독성이 올라감)

* Movies.jsx

```jsx
<HeaderWrap>
  <div className="banner_contents">
    <img src={img2} className="titlelogo" alt="React" />
    <div className="banner_description">
      <p className="banner_p">
        어느 날 기이한 존재로부터 지옥행을 선고받은 사람들. 충격과 두려움에
        휩싸인 도시에 대혼란의 시대가 도래한다. 신의 심판을 외치며 세를
        확장하려는 종교단체와 진실을 파헤치는 자들의 이야기.
      </p>
    </div>
    <div className="button12">
      <div className="bannerbuttonmain">
        <button className="bannerbutton1">재생</button>
        <BsFillPlayFill color="black" className="bannericon" />
      </div>
      <div className="bannerbuttonmain2">
        <button className="bannerbutton2">상세정보</button>
        <RiInformationLine color="white" className="bannericon2" />
      </div>
    </div>
  </div>
  <div className="banner-fadeBottom"></div>
</HeaderWrap>
```

```jsx
<div className="row">
  <div className="row_posters">
    {loaded ? (
      dataMovie.map((movie) => {
        return (
          <div key={movie.smallCategory}>
            <h2 className="movietitle"> {movie.smallCategory}</h2>
            <Row dataList={movie.dataList} category={movie.smallCategory}></Row>
          </div>
        );
      })
    ) : (
      <div>Loding…</div>
    )}
  </div>
</div>
```

2. Slider 라이브러리 이용

- Row.jsx (컴포넌트 나눈거 & 라이브러리 적용된 코드)

```jsx
return (
  <Swiper
    navigation={true}
    modules={[Navigation]}
    className="mySwiper"
    slidesPerView={6}
  >
    {dataList.map((x) => {
      return (
        <>
          <SwiperSlide key={x.id}>
            <img className="row_poster" src={x.backdrop_path} />
          </SwiperSlide>
        </>
      );
    })}
  </Swiper>
);
```

<br/><br/>

### 2. **백엔드에서 openAPI로 영화 데이터 통신 후 map을 사용하여 화면에 보여주기**

- 문제

백엔드 분이 open API로 주신 데이터로 통신은 성공 했으나 화면에 보여주게 하는게 안 되서 막힘ㅠㅠ

정확하게 막혔던 부분이 map()돌려서 데이터의 category 글자는 잘 나오는 데,

그 안쪽에 있는 또 다른 데이터를 어떻게 뽑아야 할지 잘 몰라서 막막.... 오후는 거의 이 문제로 붙잡다가 결국에는 도움을 요청해서 풀었다.

- 해결

1.  리덕스를 사용해서 하나씩 하드코딩하는 방법

2.  map()를 2번 사용해서 내용물 보여주기 (나는 이방법을 택함)
    <br/><br/>

### 3. **[에러]Movies.jsx:20 Uncaught TypeError: Cannot read properties of undefined..**

- 문제: 스토어에 값을 안 넣었었음
  <br/><br/>

---

## 개선사항 <br/><br/>

- 폴더 및 컴포넌트 구조를 효율적으로 설계
- PR, commit 메세지 디테일하게 작성!!
- 반응형 웹 제작
- 모달 디테일 개선
- 클린코드 지향
  - 추상화 수준 고려하여 코드 작성
  - 변수명 통일
    <br/><br/>

---

### 넷플릭스 클론코딩 <br/><br/>

### [데모 링크](http://2netflix.s3-website.ap-northeast-2.amazonaws.com/)
