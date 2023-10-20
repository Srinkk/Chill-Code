import { useState, useEffect } from "react"

import { Box, Typography, Button } from "@mui/material"
import styled from "@emotion/styled"

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Login = ({color, bgColor, setLoginBoxStatus}) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

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
        border: 1px solid green;
        width: 100vw;
        height: 91.15vh;
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
    `

    const LoginBox = styled(Box)`
        border: 2px dotted ${color};
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
        color: ${color};
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
        color: ${color};
        width: 100%;
        height: 100%;
    `

    const LoginBody = styled(Box)`
        border: 1px solid ${color};
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    `

    const EmailInputBox = styled(Box)`
        border: 1px solid ${color};
        color: ${color};
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 5%;
    `

    const PasswordBox = styled(Box)`
        border: 1px solid ${color};
        width: 100%;
        height: 40%;
        color: ${color};
    `
    // document.addEventListener('DOMContentLoaded', function() {
    //     const inputEmail = document.getElementById('inputEmail')
    //     const inputPassword = document.getElementById('inputPassword')
        
    //     inputEmail.addEventListener('input', function(event) {
    //         console.log(event.target.value)
    //         setEmail(event.target.value)
    //     })
    //     inputPassword.addEventListener('input', function(event) {
    //         setPassword(event.target.value)
    //     })
    // })

    useEffect(() => {
        console.log(email)
    }, [email])

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        // e.preventDefault()
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = (e) => {
        // e.preventDefault()
    }

    const ErrorText = () => {
        return (
            <Typography fontFamily={'consolas, sans-serif'}></Typography>
        )
    }

    const LoginFooter = styled(Box)`
        border: 1px solid ${color};
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
        border: 1px solid red;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `

    const SignupButtonBox = styled(Box)`
        border: 1px solid ${color};
        width: 47%;
        height: 100%;
    `

    const LoginButtonBox = styled(Box)`
        border: 1px solid ${color};
        width: 47%;
        height: 100%;
    `

    const GoogleButtonBox = styled(Box)`
        border: 1px solid ${color};
        width: 100%;
        height: 40%;
    `

    return (
        <>
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
                            <form onSubmit={handleFormSubmit}>
                                <input type='text' placeholder='Your e-mail' value={email} onChange={handleEmailChange}/>
                            </form>
                        </EmailInputBox>
                        <PasswordBox>
                            <Typography fontFamily={'consolas, sans-serif'}>Your password:</Typography>
                            <form onSubmit={handleFormSubmit}>
                                <input type='password' placeholder='Your password' value={password} onChange={handlePasswordChange}/>
                            </form>
                        </PasswordBox>
                        {
                            (error !== null) && <ErrorText/>
                        }
                    </LoginBody>
                    <LoginFooter>
                        <LoginFooterLoginSignupBox>
                            <SignupButtonBox></SignupButtonBox>
                            <LoginButtonBox></LoginButtonBox>
                        </LoginFooterLoginSignupBox>
                        <GoogleButtonBox>

                        </GoogleButtonBox>
                    </LoginFooter>
                </LoginBox>
            </LoginMain>
        </>
    )
}

export default Login