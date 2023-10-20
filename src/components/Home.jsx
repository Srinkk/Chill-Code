import { useState, useEffect } from "react"
import Login from "./Login"

import { Box, Typography, Button } from "@mui/material"
import styled from "@emotion/styled"

const Home = ({color, bgColor}) => {

    const [loginBoxStatus, setLoginBoxStatus] = useState('open')

    const MainBox = styled(Box)`
        width: 100vw;
        height: 91.15vh;
        color: ${color};
        background-color: ${bgColor};
        padding: 3rem;
        display: flex;
        justify-content: space-evenly;
        position: absolute;
        border: 1px solid ${color};
    `

    return (
        <>
            <MainBox>
                
            </MainBox>
            {
                (loginBoxStatus === 'open') && <Login color={color} bgColor={bgColor} setLoginBoxStatus={setLoginBoxStatus}/>
            }
        </>
    )
}

export default Home