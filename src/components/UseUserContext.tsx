import {createContext, useContext} from "react";
import {UserInfo} from "os";

type User = {
    id: number,
    name: string,
}

const userContext = createContext<User | null>(null)

const GrandChild = () => {
    const user = useContext(userContext)

    return user !== null ? <p>Hello , {user.name}</p> : null
}

const Child = () => {
    const now = new Date()

    return (
        <div>
            <p>Current : {now.toLocaleString()}</p>
            <GrandChild/>
        </div>
    )
}

export const UseUserContext = () => {
    const user: User = {
        id: 1,
        name: 'Brina Tanaka',
    }

    return (
        <userContext.Provider value={user}>
            <Child/>
        </userContext.Provider>
    )
}