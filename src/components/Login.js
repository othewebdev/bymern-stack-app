import React, { useState, useContext }from 'react';
import styled from 'styled-components';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth'
import { useForm } from '../util/hooks'

const Login = (props) => {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})
    
    
    const { onChange, onSubmit, values} = useForm(loginUserCallback, {
        username: '',
        password: ''
    })

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, {data:{login: userData}}){
            context.login(userData)
            props.history.push('/feed')
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    })

    function loginUserCallback(){
        loginUser();
    }

    
    return (
        <Container>
            <LoginWrapper>
                <InnerWrapper>
                    <FormContainer>
                        <h1>Login</h1>
                    <Form onSubmit={onSubmit} noValidate className={ loading ? "loading" : ''}>
                        <Form.Input 
                        placeholder="Username..." 
                        value={values.username} 
                        name="username" 
                        errors={errors.username ? true : false }
                        label="Username"
                        onChange={onChange}
                        />
                        <Form.Input 
                        placeholder="Password..." 
                        value={values.password} 
                        name="password"
                        errors={errors.password ? true : false}
                        type="password" 
                        label="Password"
                        onChange={onChange}
                        />
                        <button type="submit">
                            Login
                        </button>  
                        <a href="/signup">New User? Register Now.</a> 
                    </Form> 
                    {Object.keys(errors).length > 0 && (
                        <div className="ui error message">
                            <ul className="list">
                            {Object.values(errors).map((value) => (
                                <li key={value}>{value}</li>
                            ))}
                            </ul>
                        </div>
                    )}
                    </FormContainer>
                </InnerWrapper>
            </LoginWrapper> 
        </Container>
    )
}

const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    ) {
        login(
                username: $username 
                password: $password
        ) {
            id email username createdAt token
        }
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
const LoginWrapper = styled.div`
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

`

const FormContainer = styled.div`
    display: block;

    h1 {
        font-weight: 400;
        margin-bottom: 2rem;
    }

    input {
        outline: #32f19b;
        border: 1px solid #495d63;
        box-shadow: 0px 9px 18px -7px #8eaa9d;
        background-color: transparent;
        margin: .5rem 0;
        padding: .5rem 1.4pc;
    }

    button {
        width: 100%;
        padding: .5rem 1rem;
        margin: 1rem 0;
        background-color: #76d8ff;
        color: #2e778d;
        border: 1px solid #76d8ff;
        box-shadow: 0px 12px 24px -7px #3fc9ff;
        outline: none;
        border-radius: 1rem;
        transition: 0.15s all ease-in;

         &:hover{
            background-color: #2e778d;
            cursor: pointer;
            box-shadow: 0px 12px 24px -7px #328fac;
            color: white;
            border: 1px solid #2e778d;
        }
    }
`

export default Login