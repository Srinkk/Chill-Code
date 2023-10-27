import { useState, useEffect } from "react"

import { Box, Typography, Button } from "@mui/material"
import styled from "@emotion/styled"

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import {jwtDecode} from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google'

const Login = ({color, setLoginBoxStatus}) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const onLoginSuccess = async (res) => {
        const decoded = jwtDecode(res.credential)
        console.log(decoded)
    }
    const onLoginError = (res) => {
        console.log("Login failed", res)
    }

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        function handlePressEscape(event) {
            if (event.key === 'Escape') {
                setLoginBoxStatus('closed')
            }
        }
        document.addEventListener('keydown', handlePressEscape)
        return () => {
            document.removeEventListener('keydown', handlePressEscape)
        }
    }, [])

    const LoginMain = styled(Box)`
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        max-height: fit-content;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(10px);
    `

    const LoginBox = styled(Box)`
        border: 2px dotted #838783;
        max-width: 80%;
        min-width: 40%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 2%;
    `

    const LoginHeader = styled(Box)`
        border-bottom: 1px dashed ${color};
        width: 100%;
        height: 15%;
        display: flex;
        padding: 0 5%;
        justify-content: space-between;
        align-items: center;
        font-size: 2em;
        color: #838783;
    `

    const LoginText = ({fontSize}) => {
        return (
            <Typography fontFamily={'consolas, sans-serif'} fontSize={fontSize}>Code With Us</Typography>
        )
    }

    const CloseButtonBox = styled(Box)`
        min-width: 15%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-left: 2px solid gray;
        padding-left: 10%;
    `

    const CustomButton = styled(Button)`
        width: 100%;
        height: 100%;
    `

    const CloseIcon = styled(CloseRoundedIcon)`
        // color: ${color};
        color: #838783;
        width: 100%;
        height: 100%;
    `

    const LoginBody = styled(Box)`
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    `

    const EmailInputBox = styled(Box)`
        color: #838783;
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        padding: 0 5%;
    `

    const PasswordBox = styled(EmailInputBox)`
    `

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
        // e.preventDefault()
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const ErrorBox = styled(Box)`
        color: red;
    `

    const ErrorText = () => {
        return (
            <ErrorBox className="animate-error-popup">
                <Typography fontFamily={'consolas, sans-serif'}>{error}</Typography>
            </ErrorBox>
        )
    }

    const LoginFooter = styled(Box)`
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 2%;
    `

    const LoginFooterLoginSignupBox = styled(Box)`
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const SignupButtonBox = styled(Box)`
        width: 49%;
        height: 100%;
    `

    const LoginButtonBox = styled(Box)`
        width: 47%;
        height: 100%;
    `

    const GoogleButtonBox = styled(Box)`
        width: 100%;
        height: 40%;
    `

    const StyledButton = styled(Button)`
        width: 100%;
        height: 100%;
        color: #838783;
        border: 1px solid #838783;
        border-radius: 15px;
    `

    const GoogleButton = styled(StyledButton)`
        display: flex;
        gap: 10px;
    `

    const handleGoogleSignin = () => {

    }

    const handleSignup = () => {

    }

    const handleLogin = () => {

    }

    return (
        // <>
            <LoginMain>
                <LoginBox className="sm:width-80 animate-open-login-popup">
                    <LoginHeader>
                        {
                            (screenWidth >= 820) ?
                                <LoginText fontSize={'2rem'}/>
                            :
                                <LoginText fontSize={'1.5rem'}/>
                        }
                        <CloseButtonBox className="sm:width-25">
                            <CustomButton onClick={() => setLoginBoxStatus('closed')}><CloseIcon/></CustomButton>
                        </CloseButtonBox>
                    </LoginHeader>
                    <LoginBody>
                        <EmailInputBox>
                            <Typography fontFamily={'consolas, sans-serif'}>Your E-mail:</Typography>
                            <input type='text' id="email" name="email" placeholder='Your e-mail' value={email} onChange={handleEmailChange} autoComplete="true"/>
                        </EmailInputBox>
                        <PasswordBox>
                            <Typography fontFamily={'consolas, sans-serif'}>Your password:</Typography>
                            <input type='password' id='password' name='password' placeholder='Your password' value={password} onChange={handlePasswordChange} autoComplete="true"/>
                        </PasswordBox>
                        {
                            (error !== null) && <ErrorText/>
                        }
                    </LoginBody>
                    <LoginFooter>
                        <LoginFooterLoginSignupBox>
                            <SignupButtonBox>
                                <StyledButton onClick={handleSignup}>
                                    <Typography fontFamily={'consolas, sans-serif'} style={{textTransform: 'capitalize'}}>
                                        Signup
                                    </Typography>
                                </StyledButton>
                            </SignupButtonBox>
                            <LoginButtonBox>
                                <StyledButton onClick={handleLogin}>
                                <Typography fontFamily={'consolas, sans-serif'} style={{textTransform: 'capitalize'}}>
                                    Login
                                </Typography>
                                </StyledButton>
                            </LoginButtonBox>
                        </LoginFooterLoginSignupBox>
                        <GoogleButtonBox>
                            <GoogleButton onClick={handleGoogleSignin}>
                                {
                                    (screenWidth >= 768) &&
                                        <Typography fontFamily={'consolas, sans-serif'} style={{textTransform: 'capitalize'}}>
                                            Sign in with Google -&gt;
                                        </Typography>
                                }
                                <GoogleLogin
                                    onSuccess = {onLoginSuccess}
                                    onError = {onLoginError}
                                />
                            </GoogleButton>
                        </GoogleButtonBox>
                    </LoginFooter>
                </LoginBox>
            </LoginMain>
        // </>
    )
}

export default Login