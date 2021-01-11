import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import { useForm } from '../util/hooks'

function PostForm(){
    
    const { values, onChange, onSubmit } = useForm(createPostCallback, {
        body: ''
    })

    const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: values,
        update(_, result){
            console.log(result);
            values.body = ''
        }
    })

    function createPostCallback(){
        createPost()
    }

    return (
    <>
        <Form onSubmit={onSubmit}>
            <h4>Create a Post:</h4>
            <Form.Field>
                <Form.Input
                    placeholder="Love and peace yah?"
                    name="body"
                    onChange={onChange}
                    value={values.body}
                    error={error ? true : false}
                />
                <Button type="submit">Post</Button>
            </Form.Field>
        </Form>
        {error && (
            <div className="ui error message">
                <ul className="list">
                    <li>{error.graphQLErrors.message}</li>
                </ul>
            </div>
        )}
    </>
    )
}

const CREATE_POST_MUTATION = gql`
    mutation createPost($body: String!){
        createPost(body: $body){
            id body createdAt username
            likes{
                id username createdAt
            }
            likeCount
            comments {
                id body username createdAt
            }
            commentCount
        }
    }
`

export default PostForm
