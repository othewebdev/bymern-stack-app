import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/auth';


const HeroText = () => {
    const { user } = useContext(AuthContext);

    const signUp = user ? (
        <Container>
            <h1>Hello, </h1>
            <h1>{user.username}.</h1>
            <h1>Visit Feed</h1>
        </Container>
    ) : (
        <Container>
            <h5>Seeking guidance in a lonely world.</h5>
            <h1>Disconnect</h1>
            <h1>The</h1>
            <h1>Right</h1>
            <h1>Way</h1>
            <BtnContainer>
                <MenuLink href="/about"><MenuBtn>More Info</MenuBtn></MenuLink>
                <MenuLink href="/signup"><SignUpBtn>Sign-Up</SignUpBtn></MenuLink>
            </BtnContainer>
        </Container>
    )

    return signUp
}



const SignUpBtn = styled.button`
    background-color: #76d8ff;
        border: 1px solid transparent;
        padding: 0.5rem 1.1rem;
        border-radius: 1rem;
        color: #2e778d;
        box-shadow: 0px 12px 24px -7px #3fc9ff;
        margin: 0.5rem 0.8rem;
        cursor:pointer;
        transition: 0.2s ease all;
        outline: none;

        &:hover{
            background-color: #2e778d;
            box-shadow: 0px 12px 24px -7px #328fac;
            color: white;
             border: 1px solid #2e778d;
        }
`

const MenuBtn = styled.button`
        padding: 0.5rem 1.1rem;
        border-radius: 1rem;
        color: #2e778d;
        border: 1px solid #328fac;
        background-color: transparent;
        color: #328fac;
        cursor:pointer;
        transition: 0.2s ease all;
        outline: none;

        &:hover{
            background-color: #2e778d;
            box-shadow: 0px 12px 24px -7px #328fac;
            color: white;
            border: 1px solid #2e778d;
        }
        
`

const BtnContainer = styled.div`
    margin-top: 2rem;

   
`


const Container = styled.div`
    padding: 1rem;

    h5 {
        color: #0e4d66;
        font-size: .9rem;
    }

    h1 {
       color:#76d8ff; 
       font-size: 3.5rem; 
       font-weight: 500;

       &:nth-of-type(1) {
        color:#76d8ff; 
        }

        &:nth-of-type(2) {
            color:#4facd1; 
             font-weight: 600;
             text-transform: capitalize;
        }

        &:nth-of-type(3) {
            color:#247797; 
             font-weight: 700;
        }

        &:nth-of-type(4) {
            color:#0e4d66; 
             font-weight: 900;
        }
    }

    
`
const MenuLink = styled.a`
        background-color: transparent;
        text-decoration: none;
        color: #98b6b1;
        font-size: .95rem;
        padding: 0.65rem 1.4rem;
        transition: all ease-in 0.2s;
        border-radius: 0.5rem;
        font-weight: 600;
        margin: 0 .5rem;

        &:hover{
            color: #495d63;
        }
    
`

export default HeroText