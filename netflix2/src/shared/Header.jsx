import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
// import RoofingSharpIcon from '@mui/icons-material/RoofingSharp';
// import FaceSharpIcon from '@mui/icons-material/FaceSharp';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


// const TokenRemoveItem = () => {
//     dispatch(__PostLogout())
//     window.localStorage.removeItem('Token')
//     window.localStorage.removeItem('Retoken')
//   }
  

export function Header() {
        // HEADER 
    
          const [loginIcon, setIcon] = useState(false);
        
        // const dispatch = useDispatch()
        
        // const TokenRemoveItem = () => {
        //   dispatch(__PostLogout())
        //   window.localStorage.removeItem('Token')
        //   window.localStorage.removeItem('Retoken')
        // }
        
        
        useEffect(()=> {
          setIcon(!!localStorage.getItem('Token') ? true : false);
        },[])
          return (
            <HeaderDiv>
              <LogoDIV>
                <Logo href="/">
                {/* <RoofingSharpIcon sx={{fontSize: 25}}/> */}
                </Logo>
                </LogoDIV>
                <LogoDIV>
                <Text href="/Movies">홈</Text>
                </LogoDIV> 
                <LogoDIV>
                <Text href="#">시리즈</Text>
                </LogoDIV>
                <LogoDIV>
                <Text href="#">영화</Text>
                </LogoDIV>
                {loginIcon ? (
                  <LogoDIV>
                  <Logoutlogo href="/" >
                    {/* <FaceSharpIcon sx={{fontSize: 25}}/> */}
                  </Logoutlogo>
                  </LogoDIV>
                ) : (
                  <LogoDIV>
                  <Loginlogo href="/Login">
                    {/* <FaceSharpIcon sx={{fontSize: 25}}/> */}
                  </Loginlogo>
                  </LogoDIV>
                )}
                <LogoDIV>
                <ShoppingLogo href="/Basket">
                  {/* <ShoppingBagIcon sx={{fontSize: 25}}/> */}
                </ShoppingLogo>
                </LogoDIV>
            
            </HeaderDiv>
            
                
          );
        };
        
        export default Header;
        
    
    
        


// const HeaderWrap = styled.div`
//     height: 68px;
//     z-index: 2;
//     background-color: rgb(20, 20, 20);
// `

export const HeaderDiv = styled.div`
    width: auto;
    height: 68px;
    background-color: rgb(20, 20, 20);
    border-bottom: 1px solid #000000;
    /* display: inline-flex; */
    /* justify-content: space-around; */
    z-index: 2;
  //
    align-items: center;
    display: flex;
    font-size: 1.2rem;
    padding: 0 4%;
    position: relative;
    transition: background-color .4s;
`;

export const LogoDIV = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Logo = styled.a`
  color: aliceblue;
  margin: auto;

`;

export const Text = styled.a`
    
    color: #e5e5e5;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    display: flex;
    height: 100%;
    position: relative;
    
`;


const Loginlogo = styled.a`
  color: aliceblue;
  margin: auto;
`;

const Logoutlogo = styled.a`
  color: #F77A3B;
  margin: auto;
`;

const ShoppingLogo = styled.a`
  color: aliceblue;
  margin: auto;
`;

