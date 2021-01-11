import React from 'react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components'
import Tilt from 'react-tilt';

import PostCard from '../components/PostCard'

const Posts = () => {
    const { 
        loading, 
        data: { getPosts: posts } = {} 
    } = useQuery(FETCH_POSTS_QUERY);

    return (
        <Container>
            <InnerWrapper>
                <PostGrid>
                    <PageTitle>
                        <h3>Recent Posts</h3>
                    </PageTitle>
                    {loading ? (
                        <h1>Loading posts...</h1>
                    ):(
                        posts && 
                        posts.map((post) => (
                            <GridItem key={post.id}>
                                <Tilt>
                                    <PostCard post={post}/>
                                </Tilt>
                            </GridItem>
                        ))
                    )}
                </PostGrid>
            </InnerWrapper>
        </Container>
    )
}

const FETCH_POSTS_QUERY = gql`
    {
        getPosts{
        id 
        body 
        createdAt 
        username 
        likeCount
        likes {
            username
        }
        commentCount 
        comments {
            id 
            username 
            createdAt 
            body
        }
    }
    }
`

export default Posts

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
