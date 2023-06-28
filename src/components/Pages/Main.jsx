

import { useState } from 'react'
import { useSettingsContext } from '../../hooks/useSettingsContext'
import { useTimer } from '../../hooks/useTimer'
import { ButtonFullScreen } from '../ButtonFullScreen'
import { Drawer } from '../Drawer'
import { ProgressBar } from '../ProgressBar'
import { Timer } from '../Timer'

export const MainPage = () => {

    const { minutes, seconds, text, percent, pause, handlePause, handlePlay, setMinutes } = useTimer()
    const [isOpen, setIsOpen] = useState(false)


    const { settings: { sessionTime, breakTime, setBreakTime, setSessionTime } } = useSettingsContext()

    const toggleDrawer = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const handleChangeSession = (e) => {
        setSessionTime(e.target.value)
        setMinutes(e.target.value)
    }

    const handleChangeBreak = (e) => {
        setBreakTime(e.target.value)
    }



    return (
        <div className='relative grid place-content-center'>

            <Drawer isOpen={isOpen} setIsOpen={toggleDrawer} >
                <div className="flex items-center justify-center gap-5 w-full">
                    <label htmlFor="sessionTime" className="w-full">
                        <span className="block font-semibold">Session Time</span>
                        <input name="sessionTime" id="sessionTime" type="number" max={60} min={1} className="w-full p-3 rounded text-gray-dark text-2xl"
                            defaultValue={sessionTime}
                            onChange={handleChangeSession}
                        />
                    </label>
                    <label htmlFor="breakTime" className="w-full">
                        <span className="block font-semibold">Break Time</span>
                        <input name="breakTime" id="breakTime" type="number" max={60} min={1} className="w-full p-3 rounded text-gray-dark text-2xl"
                            defaultValue={breakTime}
                            onChange={handleChangeBreak}
                        />
                    </label>
                </div>
            </Drawer>


            <div className="w-screen h-calc grid place-content-center">
                <div className='flex-1' >
                    <ProgressBar value={percent} />

                    <Timer
                        minutes={minutes}
                        seconds={seconds}
                        text={text}
                        pause={pause}
                        handlePause={handlePause}
                        handlePlay={handlePlay}
                    />
                </div>


                <div className='absolute bottom-4 right-4' >
                    <ButtonFullScreen />
                </div>
            </div>

        </div>
    )
}
