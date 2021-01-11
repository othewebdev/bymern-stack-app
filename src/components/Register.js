import React, { useState, useContext }from 'react';
import styled from 'styled-components';
import {  Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth'
import { useForm } from '../util/hooks'

const Register = (props) => {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})
    
    const { onChange, onSubmit, values} = useForm(registerUser, {
        username: '',
        email:"",
        password: '',
        confirmPassword: ''
    })

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, {data:{register: userData}}){
            context.login(userData)
            props.history.push('/feed')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    })

    function registerUser(){
        addUser();
    }

    

    return (
        <Container>
            <RegisterWrapper>
                <InnerWrapper>
                    <FormContainer>
                        <h1>Register</h1>
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
                        placeholder="Email..." 
                        value={values.email} 
                        name="email" 
                        errors={errors.email ? true : false} 
                        label="Email"
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
                        <Form.Input 
                        placeholder="Confirm Password..." 
                        value={values.confirmPassword} 
                        name="confirmPassword"
                        errors={errors.confirmPassword ? true : false} 
                        type="password" 
                        label="Confirm Password"
                        onChange={onChange}
                        />
                        <button type="submit">
                            Register
                        </button>
                        <a href="/login">Already a user? Login.</a> 
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
            </RegisterWrapper> 
        </Container>
    )
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;



const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #495d63;
`
const RegisterWrapper = styled.div`
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

export default Register