

import { useState } from 'react'
import { useTimeContext } from '../../hooks/useTimeContext'

export const MainPage = () => {

    // const { minutes, seconds, text, percent, pause, handlePause, handlePlay, setMinutes } = useTimer()
    const [isOpen, setIsOpen] = useState(false)


    const { workMinutes, remainingMinutes, remainingSeconds, handlePlay, handlePause, sessionStatus } = useTimeContext()

    const toggleDrawer = () => {
        setIsOpen(isOpen => !isOpen)
    }




    return (
        <>
            <h1 className='text-white' >
                {remainingMinutes.toString().padStart(2, '0')} : {remainingSeconds.toString().padStart(2, '0') }
                {sessionStatus}
            </h1>
            <button onClick={handlePlay} >PLAY</button>
            <button onClick={handlePause} >PAUSE</button>
        </>
    )
}
