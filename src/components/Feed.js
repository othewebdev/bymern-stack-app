import React from 'react';
import styled from 'styled-components';
import Posts from './Posts';
import UserControl from './UserControl';


const Feed = () => {
    return (
        <Container>
            <FeedWrapper>
                <InnerWrapper>
                <LeftCol>
                    <Posts/>
                </LeftCol>
                <LeftCol>
                    <UserControl/>
                </LeftCol>
                </InnerWrapper>
            </FeedWrapper>
        </Container>
    )
}

export default Feed

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #495d63;
`
const FeedWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`

const InnerWrapper = styled.div`
    max-width: 1000px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const LeftCol = styled.div`
    width: 40%;

    @media (max-width: 768px){
        width: 100%;
        text-align: center;
    }
`