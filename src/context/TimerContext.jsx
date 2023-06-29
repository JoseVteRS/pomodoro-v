import { createContext, useEffect, useState } from "react";


export const TimerContext = createContext({
    workMinutes: 25,
    breakMinutes: 5,
    remainingMinutes: 25,
    remainingSeconds: 0,
    completedPomodoro: false,
    playTimer: false,
    handleSkip: () => { },
    handlePlay: () => { },
    handlePause: () => { },
    sessionStatus: 'work'
});


export const TimerProvider = ({ children }) => {

    const [workMinutes, setWorkMinutes] = useState(1)
    const [breakMinutes, setBreakMinutes] = useState(2)
    const [sessionStatus, setSessionStatus] = useState('work')

    const [remainingMinutes, setRemainingMinutes] = useState(1)
    const [remainingSeconds, setRemainingSeconds] = useState(0)

    const [completedPomodoro, setCompletedPomodoro] = useState(false)
    const [playTimer, setPlayTimer] = useState(false)

    const handleSkip = () => {
        if (playTimer) setPlayTimer(false)

        setCompletedPomodoro(completedPomodoro => !completedPomodoro)

        if (!completedPomodoro) {
            setRemainingMinutes(breakMinutes)
            setRemainingSeconds(0)
            toggleSession()
            setPlayTimer(true)
        }

        if (completedPomodoro) {
            setRemainingMinutes(workMinutes)
            setRemainingSeconds(0)
        }
    }

    const toggleSession = () => {
        if (sessionStatus === 'work' && remainingMinutes === 0 && remainingSeconds === 0) {
            setSessionStatus('break')
            setRemainingMinutes(breakMinutes)
            setRemainingSeconds(0)
        }

        if (sessionStatus === 'break' && remainingMinutes === 0 && remainingSeconds === 0) {
            setSessionStatus('work')
            setRemainingMinutes(workMinutes)
            setRemainingSeconds(0)
        }
    }


    const handlePlay = () => setPlayTimer(true)
    const handlePause = () => setPlayTimer(false)

    const substractTime = ({ minutes, seconds, setMinutes, setSeconds }) => {
        if (seconds > 0) setSeconds(seconds => seconds - 1)
        if (seconds === 0) {
            if (minutes > 0) {
                setSeconds(59)
                setMinutes(minutes => minutes - 1)
            }
        }
    }

    useEffect(() => {
        let interval = null

        if (playTimer) {
            interval = setInterval(() => {
                if (remainingMinutes === 0 && remainingSeconds === 0) {
                    clearInterval(interval);
                    setPlayTimer(false);
                    setCompletedPomodoro(true);
                    handleSkip()
                    toggleSession()
                } else {
                    substractTime({
                        minutes: remainingMinutes,
                        seconds: remainingSeconds,
                        setMinutes: setRemainingMinutes,
                        setSeconds: setRemainingSeconds
                    })
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    },)


    return (
        <TimerContext.Provider value={{
            workMinutes,
            breakMinutes,
            remainingMinutes,
            remainingSeconds,
            completedPomodoro,
            playTimer,
            handleSkip,
            handlePlay,
            handlePause,
            sessionStatus
        }}>
            {children}
        </TimerContext.Provider>
    )
}



