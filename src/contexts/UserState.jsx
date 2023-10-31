import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    const [user, setUser] = useState({
        id: '12345',
        loginStatus: true
    })

    const updateId = (userId) => {
        setUser({
            id: userId,
            loginStatus: true
        })
    }

    const logout = () => {
        setUser({
            id: '',
            loginStatus: false
        })
    }

    return (
        <UserContext.Provider value={{user, updateId, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}   

export default UserState