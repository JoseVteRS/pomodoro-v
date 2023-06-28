import { createContext, useState } from "react";


export const SettingsContext = createContext({
    settings: {
        sessionTime: 25,
        breakTime: 5,
        setSessionTime: () => { },
        setBreakTime: () => { },
    },
});


export const SettingProvider = ({ children }) => {

    const [sessionTime, setSessionTime] = useState(25)
    const [breakTime, setBreakTime] = useState(5)


    return (
        <SettingsContext.Provider value={{
            settings: {
                sessionTime,
                breakTime,
                setSessionTime,
                setBreakTime,
            },
        }}>
            {children}
        </SettingsContext.Provider>
    )
}



