import { useState } from "react";
import { createContext } from "react";


export const SettingsContext = createContext({
    settings: {
        session: 25,
        breakTime: 5,
        setSession: () => { },
        setBreakTime: () => { },
    },
});



export const SettingProvider = ({ children }) => {

    const [session, setSession] = useState(25)
    const [breakTime, setBreakTime] = useState(5)


    return (
        <SettingsContext.Provider value={{
            settings: {
                session,
                breakTime,
                setSession,
                setBreakTime,
            },
        }}>
            {children}
        </SettingsContext.Provider>
    )
}



