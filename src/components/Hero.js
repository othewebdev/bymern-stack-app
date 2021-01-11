import React, { useContext } from 'react';
import styled from 'styled-components';
import heroImg from '../assets/hero.png';
import feedImg from '../assets/hero2.png';
import bgImg from '../assets/background.jpg';
import Tilt from 'react-tilt';
import HeroText from '../components/HeroText';
import { AuthContext } from '../context/auth';

const Hero = () => {
    const { user, logout } = useContext(AuthContext);

    const HomeHero = user ? (
        <Container bg={bgImg}>
            <HeroWrapper>
                <InnerWrapper>
                    <TiltWrapper options={{ max:20 }}>
                        <LeftCol>
                            <HeroText/>
                        </LeftCol>
                    </TiltWrapper>
                    <TiltWrapper options={{ max:20 }}>
                         <MenuLink href="/feed"><img src={feedImg} alt=""/></MenuLink>
                    </TiltWrapper>  
                </InnerWrapper>
            </HeroWrapper>
        </Container>
    ) : (
        <Container bg={bgImg}>
            <HeroWrapper>
                <InnerWrapper>
                    <TiltWrapper options={{ max:20 }}>
                        <LeftCol>
                            <HeroText/>
                        </LeftCol>
                    </TiltWrapper>
                    <TiltWrapper options={{ max:20 }}>
                         <img src={heroImg} alt=""/>
                    </TiltWrapper>  
                </InnerWrapper>
            </HeroWrapper>
        </Container>
    )

    return HomeHero
}

export default Hero


const TiltWrapper = styled(Tilt)`
    width: 60%;

    @media (max-width: 768px){
        width: 100%;

        img {
            height: 30%;
        }
    }

    &:nth-of-type(1){
        width: 40%;
    }

`



const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #495d63;
`

const HeroWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`

const InnerWrapper = styled.div`
    max-width: 1000px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    img {
        width: 100%;
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


const LeftCol = styled.div`

    @media (max-width: 768px){
        width: 100%;
        text-align: center;
    }
`
