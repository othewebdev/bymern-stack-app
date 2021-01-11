import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../assets/logoWeb.svg'

import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/auth'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    
    const [isOpen, setIsOpen] = useState(false); 
    const [activeItem, setActiveItem] = useState('home');
    const  { pathname }  = useLocation();

    const naviBar = user ? (
        <Container>
                <MenuLink href="/">
                    <LogoIcon/>
                </MenuLink>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <LinkWrapper >
                        <MenuLink href="/user">{user.username}</MenuLink>
                        <MenuLink href="/feed">Feed</MenuLink>
                        <MenuLink href="/" onClick={logout}>Logout</MenuLink>
                    </LinkWrapper>      
                </Menu>
            </Container>
    ) : (
        <Container>
                <MenuLink href="/">
                    <LogoIcon/>
                </MenuLink>
                     
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <LinkWrapper >
                        <MenuLink onClick={() => handleItemClick} href="/about">About</MenuLink>
                        <MenuLink href="/contact">Contact</MenuLink>
                        <MenuLink href="/login"><Button>Login</Button></MenuLink>
                    </LinkWrapper>
                        
                </Menu>
            </Container>
    )

    const handleItemClick = (e, { name } ) => setActiveItem(name)

    return naviBar
}

export default Navbar


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;
    margin:auto;
    padding: 1.5rem;
    background-color: transparent;

    svg {
        height: 2.75rem;
        cursor:pointer;
    }

   
`
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: transparent;


    @media (max-width: 768px) {
        flex-direction: column;
        overflow:hidden;
        border-radius: 1rem;
        margin-top: 1rem;
        box-shadow: -4px 8px 15px 1px rgba(0,0,0, 0.1);
        max-height: ${({ isOpen }) => isOpen ? "300px" : "0" };
        transition: max-height 0.45s ease;
        width: 100%;
    }
`
const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1.5rem;
    background-color: transparent;

    @media (max-width: 768px) {
        flex-direction: column;
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
            cursor: pointer;
        }
    
`
const Button = styled.button`
    background-color: #76d8ff;
    color: #2e778d;
    border: 1px solid #76d8ff;
    box-shadow: 0px 12px 24px -7px #3fc9ff;
    padding: 0.8rem 1.3rem;
    outline: none;
    border-radius: 2rem;
    transition: 0.15s all ease-in;

    &:hover{
        background-color: #2e778d;
        cursor: pointer;
        box-shadow: 0px 12px 24px -7px #328fac;
        color: white;
        border: 1px solid #2e778d;
        transform: translateY(-3px)
    }


`

const Hamburger = styled.div`
   
    flex-direction: column;
    cursor: pointer;
    

    span {
        height: 2px;
        width: 25px;
        background-color: #98b6b1;
        transition: 0.2s all ease;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
         display: flex;
    }
`

