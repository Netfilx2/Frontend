
import styled from 'styled-components';
import img from '../shared/img/지옥.png'
import img2 from '../shared/img/지옥2.png'
import img3 from '../shared/img/우영우.png'
import img4 from '../shared/img/모범가족.png'
import img5 from '../shared/img/우리들의 블루스.png'
import '../pages/Movies.css'
import { BsFillPlayFill } from 'react-icons/bs'
import { RiInformationLine } from 'react-icons/ri'

//redux
import { __Getmovie} from '../redux/modules/movie'
import { useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';


export function Movies() {
    const { movie } = useSelector((state) => state.movie);
    console.log(movie)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(__Getmovie());
    },[dispatch])

    return (
       <>
        <HeaderWrap>
      
            <div className='banner_contents'>
                
                <img src={img2} className='titlelogo' alt='React' />
                {/* title */}
                <div className='banner_description'>
                <p>어느 날 기이한 존재로부터 지옥행을 선고받은 사람들. 충격과 두려움에 휩싸인 도시에 대혼란의 시대가 도래한다. 신의 심판을 외치며 세를 확장하려는 종교단체와 진실을 파헤치는 자들의 이야기.</p>
                </div>
                <div className='bannerbuttonmain'>
                    <button className="bannerbutton1">재생</button>
                    <BsFillPlayFill color='black' className='bannericon'/>
                </div>
                <div className='bannerbuttonmain2'>
                    <button className="bannerbutton2">상세정보</button>
                    <RiInformationLine color='white' className='bannericon2'/>
                </div>
    
            </div>
         </HeaderWrap>
            <div className='row'>
                <Title1>Title</Title1>
                <div className='row_posters'>
                    {/* row_poster */}
                    {/* movies.map */}
                    <img src={img3} className='row_poster' alt='React' />
                    <img src={img3} className='row_poster' alt='React' />
                    <img src={img3} className='row_poster' alt='React' />
                    <img src={img3} className='row_poster' alt='React' />
                    <img src={img3} className='row_poster' alt='React' />
                    <img src={img3} className='row_poster' alt='React' />
                    <img src={img3} className='row_poster' alt='React' />
                    <img src={img3} className='row_poster' alt='React' />
                </div>
                <Title>Title</Title>
                <div className='row_posters'>
                    {/* row_poster */}
                    {/* movies.map */}
                    <img src={img4} className='row_poster' alt='React' />
                    <img src={img4} className='row_poster' alt='React' />
                    <img src={img4} className='row_poster' alt='React' />
                    <img src={img4} className='row_poster' alt='React' />
                    <img src={img4} className='row_poster' alt='React' />
                    <img src={img4} className='row_poster' alt='React' />
                    <img src={img4} className='row_poster' alt='React' />
                    <img src={img4} className='row_poster' alt='React' />
                </div>
                <Title>Title</Title>
                <div className='row_posters'>
                    {/* row_poster */}
                    {/* movies.map */}
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                </div>
                {/* <h2>title</h2>
                <div>
                    <span className='number'>1</span>
                    <img src={img5} className='row_posterText' alt='React' />
                </div> */}
            </div>
            
            {/* 링크 숫자 표현  */}
            <div className="row_postersLankmain">
                <div className="row_postersLank">
                    <svg id="rank-1" width="100px" height="300px" viewBox="-15 0 80 155" className="svg-icon svg-icon-rank-1 top-10-rank">
                        <path stroke="#595959" strokeLinejoin="square" strokeWidth="4" d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z">
                        </path>
                    </svg>
                        <img src={img5} className='row_posterText' alt='React' />
                            <div className="fallback-text-container" aria-hidden="true">
                                {/* <p class="fallback-text">스파이더맨: 노 웨이 홈</p> */}
                    </div>
                </div>
                <div className="row_postersLank">
                    <svg id="rank-2" width="100px" height="300px" viewBox="0 0 80 154" className="svg-icon svg-icon-rank-2 top-10-rank">
                        <path stroke="#595959" strokeLinejoin="square" strokeWidth="4" d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z">
                            </path>
                            </svg>
                            <img src={img5} className='row_posterText' alt='React' />
                        <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">모범가족</p>
                    </div>
                </div>
            </div>
            <Title>Title</Title>
                <div className='row_posters'>
                    {/* row_poster */}
                    {/* movies.map */}
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                    <img src={img5} className='row_poster' alt='React' />
                </div>
         </> 
    )
}
const Title1 = styled.div`
    color: #FFF;
    font-size: 1.4vw;
    font-weight: 700;
`

const Title = styled.div`
    color: #FFF;
    font-size: 1.4vw;
    font-weight: 700;
    margin-top: 70px;
`

const HeaderWrap = styled.div`
    /* position: absolute; */
    background-size: cover;
    background-position: 50%;
    background-image: url(${img});
    height: 800px;
    width: 100%;
    transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
    /*  */
    bottom: 0;
    left: 0;
    /* position: absolute; */
    right: 0;
    top: 0;
`

const Img = styled.div`
    width: 100%;
    margin-bottom: 1.2vw;
    min-height: 13.2vw;
    position: relative;
`

const Wrap = styled.div``




export default Movies;
