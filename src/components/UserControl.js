import React, { useContext } from 'react';
import styled from 'styled-components';
import { FcSettings, FcContacts, FcComments, FcTemplate, FcPlanner } from 'react-icons/fc';

import { AuthContext } from '../context/auth';
import PostForm from './PostForm'

const UserControl = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <InnerWrapper>
                <PostGrid>
                    <>
                        <Card>
                            <CardContent>
                                <CardIconGrid>
                                    <FcSettings/>
                                    <FcContacts/>
                                    <FcComments/>
                                    <FcTemplate/>
                                    <FcPlanner/>
                                </CardIconGrid>
                            </CardContent>
                        </Card>
                        <Card>
                         <CardHeader>{user.username}</CardHeader>
                         <br/>
                         <CardContent>
                             <CardDetails>  
                                <PostForm/>
                             </CardDetails>
                         </CardContent>
                        </Card>
                    </>
                </PostGrid>
            </InnerWrapper>
        </Container>
    )
}



const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #495d63;
`

const InnerWrapper = styled.div`
    max-width: 1000px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`
const PageTitle = styled.div`
    margin: 2pc 0;
    text-align: center;
`

const PostGrid = styled.div`
    
`
const GridItem = styled.div`
   
`

const Card = styled.div`
    height: auto;
    width: 325px;
    grid-template-columns: auto auto; 
    margin-bottom: 2pc;
    background: white;
    box-shadow: 0px 12px 24px -7px #71afc2;
    padding: 1pc 2pc;
    border-radius: .7rem;
    transition: .2s all ease;

    &:hover{
        box-shadow: 0px 12px 34px -7px #28afd8;
    }

    button {
        background-color: transparent;
        padding: .25rem .5rem;
        border: 1px solid #23b962;
        color: #148d47;
        border-radius: .7rem;
        outline: none;
        margin: .45pc .1pc;
        position: relative;

        &:hover{
            background-color:  #23b962;
            box-shadow: 0px 12px 34px -7px #00f566;
            color: white;
            cursor: pointer;
        }   

        &:nth-of-type(2) {
            border: 1px solid #21b6e4;
            color: #0f87ac;
            justify-self: end;

            &:hover{
            background-color:  #21b6e4;
            box-shadow: 0px 12px 34px -7px #34d0ff;
            color: white;
            cursor: pointer;
        }   
        }
    }
`

const CardImage = styled.img`
    width: 50px;
    height: 50px;
    border: 1px solid #495d63;
    border-radius: 50%;
    margin:auto;
`
const CardContent = styled.div`
    width: 100%;
`

const CardDetails = styled.div`

`

const CardHeader = styled.h3`
    text-transform: capitalize;
`

const CardBtnContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`

const CardDescription = styled.p`

`
const CardTime = styled.h5`
    font-weight: 400;
`
const CardIconGrid = styled.div`
    display: grid;
    margin: auto;
    justify-content: center;
    font-size: 1.1rem;
    grid-template-columns: auto auto auto auto auto;
`

export default UserControl