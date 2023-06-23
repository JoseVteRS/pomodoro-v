import { useEffect, useState } from "react"


export const useTimer = () => { 

    const sessionTime = 25
    const breakTime = 5

    // Minutes and seconds
    const [minutes, setMinutes] = useState(sessionTime)
    const [seconds, setSeconds] = useState(0)
    const [text, setText] = useState('session')

    

    useEffect(() => {
        window.document.title = `${text.toUpperCase()} - ⌛ ${minutes}:${seconds}`
    }, [minutes, seconds, text])

    useEffect(() => {

        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
                // setSession((minutes * 60) + (seconds - 1))
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
    }, [minutes, seconds])

    const reset = () => {
        setMinutes(sessionTime)
        setSeconds(0)
    }

    const changeToBreak = () => {
        setMinutes(breakTime)
        setSeconds(0)
    }

    const changeToSession = () => {
        setMinutes(sessionTime)
        setSeconds(0)
    }

    const percent = (((minutes * 60) + seconds) * 100) / (sessionTime * 60)

    return {
        minutes,
        seconds,
        text,
        percent
    }


}