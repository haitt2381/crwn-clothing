import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SingUp from '../../components/sign-up/sign-up.component'
import './sign-in-sign-up.styles.scss'
const SignInSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SingUp />
        </div>
    )
}

export default SignInSignUp
