import { gql } from '@apollo/client'

export const SIGN_UP = gql`
    mutation SignUp($input: SignUpInput!) {
        signUp(input: $input) {
            _id
            name
            username
        }
    }
`

export const LOG_IN = gql`
    mutation logIn($input: LoginInput!) {
        login(input: $input) {
            _id
            username
            name
        }
    }
`

export const LOG_OUT = gql`
    mutation logOut {
        logout {
            message
        }
    }
`
