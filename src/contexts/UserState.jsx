import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    const emptyUser = {
        id: '',
        username: '',
        e_mail: '',
        problems: [],
        profilePhoto: '',
        loginStatus: false
    }
    const [user, setUser] = useState(emptyUser)

    const updateUser = (user) => {
        setUser({
            id: user._id,
            username: user.username,
            e_mail: user.e_mail,
            problems: user.problems,
            profilePhoto: '',
            loginStatus: true
        })
    }

    const logout = () => {
        setUser(emptyUser)
    }

    return (
        <UserContext.Provider value={{user, updateUser, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}   

export default UserState