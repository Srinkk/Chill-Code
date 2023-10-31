import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const POTD = () => {

    const navigate = useNavigate()

    const problemId = '1'

    useEffect(() => {
        navigate(`/problem/?id=${problemId}`)
    }, [])

    return (
        <></>
    )
}

export default POTD