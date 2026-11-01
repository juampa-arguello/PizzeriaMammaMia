import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {

    const [token, setToken] = useState(true);

    function logout() {
        setToken(false);
    }

    return (
        <UserContext.Provider value={{ token, logout }}>
            {children}
        </UserContext.Provider>
    );
}