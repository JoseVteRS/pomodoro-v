import { useCallback, useEffect, useState } from "react"
import { useTimeContext } from "./useSettingsContext"


export const useTimer = () => {
    const { settings } = useTimeContext()
    const { breakTime, sessionTime, setBreakTime, setSessionTime } = settings

    // Minutes and seconds
    const [minutes, setMinutes] = useState(sessionTime)
    const [seconds, setSeconds] = useState(0)
    const [text, setText] = useState('session')
    const [play, setPlay] = useState(false)
    const [pause, setPause] = useState(true)

    const handlePlay = () => {
        setPlay(true)
        setPause(false)
    }
    const handlePause = () => {
        setPause(true)
        setPlay(false)
        window.localStorage.setItem('pause', JSON.stringify({ minutes, seconds, text }))
    }

    const changeToBreak = useCallback(
        () => {
            setMinutes(breakTime)
            setSeconds(0)
        },
        [breakTime],
    )


    const changeToSession = useCallback(
        () => {
            if (sessionTime === 1)
                setMinutes(0)
            else
                setMinutes(sessionTime - 1)
            setSeconds(seconds)
        }, [sessionTime, seconds]
    )

    useEffect(() => {
        window.document.title = `${text.toUpperCase()} -  ${minutes}:${seconds.toString().padStart(2, '0')}`
    }, [minutes, seconds, text])

    useEffect(() => {
        if (play) {
            const interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1)
                } else {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
            }, 1000)

            if (minutes === 0 && seconds === 0) {
                if (text === 'session') {
                    setText('break')
                    changeToSession()
                } else {
                    setText('session')
                    changeToBreak()
                }
                clearInterval(interval)
            }
            return () => clearInterval(interval)
        }
    }, [minutes, seconds, play, pause, changeToBreak, changeToSession, text])


    const percent = (((minutes * 60) + seconds) * 100) / (sessionTime * 60)

    return {
        minutes,
        setMinutes,
        seconds,
        text,
        percent,
        play,
        pause,
        handlePlay,
        handlePause,
    }


}